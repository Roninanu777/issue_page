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
  background-color: #159930;
`;

//-----------------------------------------------------------

export default function Modal() {
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
  };

  return (
    <Container onSubmit={handleSubmit}>
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
