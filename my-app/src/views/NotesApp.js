import React from "react";
import { Input } from "antd";

const useFetchNotes = (query) => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    fetch("api/notes?query=${query}")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      });
  }, [query]);

  return { notes };
};

const Item = ({ notes }) =>
  notes.map((note) => (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </li>
  ));

const List = ({ notes }) => (
  <ul>
    <Item notes={notes} />
  </ul>
);

const Search = ({ query, setQuery }) => (
  <nav>
    <Input onChange={setQuery} value={query} type="search" />
  </nav>
);

const NotesApp = () => {
  const [query, setQuery] = React.useState("");
  const { notes } = useFetchNotes(query);

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <List notes={notes} />
    </div>
  );
};

export default NotesApp;
