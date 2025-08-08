import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import AddNoteButton from "./components/AddNoteButton";
import NoteList from "./components/NoteList";
import NoteModal from "./NoteModal";
const baseUrl = import.meta.env.VITE_API_URL;



function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${baseUrl}/notes`);
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, [])
  

  const handleAddNote = async (noteData) => {
    setEditNote(null);
    

    try {
      const response = await fetch(`${baseUrl}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      if(!response.ok){
        throw new Error("Failed to add note");
      } else {
        const newNote = await response.json();
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  const handleEditNoteClick = (note) => {
    setEditNote(note);
    setShowModal(true);
  }
  const saveEditNote = async (updatedNote) => {
    
    try {
      const response = await fetch(`${baseUrl}/notes/${updatedNote._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedNote.title,
          content: updatedNote.content,
        }),
      });
      if (!response.ok) {
      throw new Error("Failed to update note");
    }

    const editedNote = await response.json();

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === editedNote._id ? editedNote : note
      )
    );
  } catch (error) {
    console.error("Error updating note:", error);
  
    }
  };
  const handleDeleteNote = async (noteId) => {
    try {
      const response = await fetch(`${baseUrl}/notes/${noteId}`, {
        method: "DELETE",
      })
        
        if (!response.ok) {
          throw new Error("Failed to delete note");
        } else {
        setNotes(notes.filter((note) => note._id !== noteId))
      };
        
        
    } catch(error) {
        console.error("Error deleting note:", error);
    }
  };


  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen">
      <AppHeader />
      <AddNoteButton onClick={() => {
        setShowModal(true);
        setEditNote(null);
      }}/>
      <NoteList 
        notes = {notes}
        onEdit = {handleEditNoteClick}
        onDelete = {handleDeleteNote}  
      />

      <NoteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={(noteData) => {
          if (editNote) {
          saveEditNote({ ...editNote, ...noteData });
        } else {
          handleAddNote(noteData);
        }
        setShowModal(false);
      }}
      onEdit={editNote}
      />

    </div>
      
    
    </>
  );
}
export default App;
