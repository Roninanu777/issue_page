import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

//Styles-----------------------------------------------------

const Container = styled.form`
  width: 70%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${(props) =>
    props.show ? "translateY(7vh)" : "translateY(-30vh)"};
  transition: all 0.5s cubic-bezier(0.24, 1.01, 0.98, 1.04);
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 2.5%;
  color: #454545;
  outline: none;
  margin-bottom: 3%;
  background-color: #e4e4e4;
`;

const Button = styled.button`
  padding: 2.1% 0;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  background-color: #156783;
`;

//-----------------------------------------------------------

export default function Modal(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  let handleTitle = (e) => {
    setTitle(e.target.value);
  };

  let handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://issue-github-page.herokuapp.com/add-issue", {
      title: title,
      author: author,
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <Container show={props.show} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder="Title"
      />
      <Input
        type="text"
        value={author}
        onChange={handleAuthor}
        placeholder="Author"
      />
      <Button type="submit">Add</Button>
    </Container>
  );
}
