const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const connection = mysql.createPool({
    user: `${process.env.DB_USERNAME}`,
    host: "sql12.freesqldatabase.com",
    password: `${process.env.DB_PASSWORD}`,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: `${process.env.DB_PORT}`,
    database: `${process.env.DB_NAME}`,
});

// Check if table exists

if (!connection.query("SHOW TABLES LIKE 'issue'")) {
    connection.query(
        "CREATE TABLE issue(issue_id INT NOT NULL AUTO_INCREMENT, issue_title VARCHAR(100) NOT NULL, issue_author VARCHAR(20) NOT NULL, issue_date DATETIME, issue_isopen INT DEFAULT 1, PRIMARY KEY (issue_id))"
    );
}

router.post("/add-issue", (req, res) => {
    let { title, author } = req.body;
    connection.query(
        "INSERT INTO issue(issue_title, issue_author, issue_date)VALUES(?,?, now())",
        [title, author],
        (err, results, fields) => {
            if (err) throw err;
            res.send({ message: "Successfully added!" });
        }
    );
});

router.get("/list-issues", (req, res) => {
    let { id, page } = req.query;
    let totalIssue = 0;

    connection.query("SELECT * FROM issue", (err, results, fields) => {
        if (err) throw err;
        totalIssue = results.length;
    });

    if (id) {
        connection.query(
            "SELECT * FROM issue WHERE issue_id = ?",
            [id],
            (err, results, fields) => {
                if (err) throw err;
                const main = {};
                main.totalIssue = totalIssue;
                main.data = results;
                res.json(main);
            }
        );
    } else if (page) {
        page = parseInt(page);
        let limit = 10;
        connection.query("SELECT * FROM issue", (err, results, fields) => {
            if (err) throw err;
            const start = (page - 1) * limit;
            const end = page * limit;
            const main = {};

            main.totalIssue = results.length;

            if (end < results.length) {
                main.next = {
                    page: page + 1,
                    limit: limit,
                };
            }

            if (start > 0 && end < results.length + limit) {
                main.prev = {
                    page: page - 1,
                    limit: limit,
                };
            }

            main.data = results.slice(start, end);
            res.json(main);
        });
    }
});

router.patch("/update-issue/:id", (req, res) => {
    let id = req.params.id;
    let { title } = req.body;
    connection.query(
        "UPDATE issue SET issue_title = ? WHERE issue_id = ?",
        [title, id],
        (err, results, fields) => {
            if (err) throw err;
            res.send({ message: "Successfully updated!" });
        }
    );
});

router.delete("/delete-issue/:id", (req, res) => {
    let id = req.params.id;
    connection.query(
        "DELETE FROM issue WHERE issue_id = ?",
        [id],
        (err, results, fields) => {
            if (err) throw err;
            res.send({ message: "Deleted successfully!" });
        }
    );
});

module.exports = router;
