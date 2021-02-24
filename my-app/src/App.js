import styled from "styled-components";
import Notes from "./views/Notes.js";
import NotesApp from "./views/NotesApp.js";
import NewNotes from "./views/NewNotes.js";

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

function App() {
  const initialData = [{ text: "CHUJ" }, { text: "THERE" }];

  return (
    <>
      <NewNotes />
    </>
  );
}

export default App;
