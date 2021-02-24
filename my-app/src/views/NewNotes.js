import React, { useState, useEffect } from "react";
import NotesService from "../service/NotesService";
import styles from "./NewNotes.module.scss";
import styled from "styled-components";
import { Button, Card, Typography } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

const CardWrapper = styled.div`
  columns: 1;
`;
const { Title } = Typography;

const NewNotes = ({ initial }) => {
  const service = new NotesService(initial);

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const randomString = (length) => {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
      ""
    );

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    var str = "";
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  };

  useEffect(() => {
    const notesList = service.getNotes();
    return setData(notesList);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue !== "") {
      const newNote = {
        id: randomString(),
        text: inputValue,
      };

      setData(service.pushNote(newNote));
      setInputValue("");
    }
  };

  const handleRemove = (id) => {
    setData(service.removeNote(id));
  };

  const handleRemoveAll = () => {
    setData(service.removeAll());
  };

  return (
    <>
      <Title style={{ color: "#fff" }}>_notify ❤️</Title>
      <div
        key={randomString()}
        className={`${styles.form__group} ${styles.field}`}
      >
        <input
          type="input"
          className={styles.form__field}
          placeholder="Search"
          name="search"
          id="name"
          required
          onChange={handleSearchChange}
          value={searchValue}
          autoComplete="off"
        />

        <label htmlFor="name" className={styles.form__label}>
          Search
        </label>
      </div>

      <div className={`${styles.form__group} ${styles.field}`}>
        <input
          type="input"
          className={styles.form__field}
          placeholder="Enter a new note"
          name="name"
          id="name"
          required
          onChange={handleInputChange}
          value={inputValue}
          autoComplete="off"
        />

        <label htmlFor="name" className={styles.form__label}>
          Enter your note...
        </label>
      </div>

      <Button
        type="primary"
        size="large"
        className={styles.button_button}
        onClick={handleClick}
      >
        Add note
      </Button>

      <Button
        type="primary"
        size="large"
        className={styles.button_button}
        onClick={handleRemoveAll}
      >
        Remove all
      </Button>
      {data !== null && (
        <CardWrapper>
          {data
            .filter((note) => note.text.includes(searchValue))
            .map((note) => (
              <Card
                key={randomString()}
                className={styles.card_card}
                size="small"
                title="❤️"
                style={{ width: 300 }}
                extra={<DeleteTwoTone onClick={() => handleRemove(note.id)} />}
              >
                <p>{note.text}</p>
              </Card>
            ))}
        </CardWrapper>
      )}
    </>
  );
};

export default NewNotes;
