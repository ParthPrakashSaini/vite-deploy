import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((card) => {
        return (
          <Note key={card.key} title={card.title} content={card.content} />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
