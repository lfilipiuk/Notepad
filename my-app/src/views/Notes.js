import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Card } from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;

const Wrapper = styled.div`
  width: 400px;
`;

const NotesWrapper = styled.div``;

const Notes = () => {
  const [inputContent, setInputContent] = useState("");

  const [notesList, setNotesList] = useState([
    {
      id: "1",
      content: "Hello, add your first note!",
    },
  ]);

  const addNote = () => {
    const newNote = {
      content: inputContent,
      id: notesList.length + 1,
    };

    setNotesList([...notesList, newNote]);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputContent(e.target.value);
  };

  return (
    <div>
      <Wrapper>
        <h1>Hello Notes</h1>
        <TextArea
          rows={4}
          placeholder="Enter your note..."
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={addNote}>
          Add note 📇
        </Button>
      </Wrapper>
      <NotesWrapper>
        {notesList.map((note) => (
          <>
            <Card
              key={note.id}
              size="small"
              title={note.id}
              style={{ width: 300, margin: "10px" }}
            >
              <p>{note.content}</p>
            </Card>
          </>
        ))}
      </NotesWrapper>
    </div>
  );
};

export default Notes;
