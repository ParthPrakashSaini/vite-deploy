import React, { useState } from "react";
import "./CreateArea.css";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitnote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleExpand() {
    setExpanded(true);
  }

  return (
    <div className="createArea">
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleExpand}
          name="content"
          placeholder="Take a Note..."
          id="nd"
          rows={isExpanded ? 4 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitnote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
