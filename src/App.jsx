import { useState } from 'react';
import { initialNotes } from './data/initialData';
import { Sidebar } from './components/Sidebar';
import { NoteArea } from './components/NoteArea';

export default function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [activeNoteId, setActiveNoteId] = useState(initialNotes[0]?.id || null);

  const activeNote = notes.find((note) => note.id === activeNoteId);

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  return (
    <div className="flex h-screen w-screen bg-slate-900 text-slate-100 overflow-hidden">
      <Sidebar
        notes={notes}
        activeNoteId={activeNoteId}
        onSelectNote={setActiveNoteId}
      />
      <NoteArea
        activeNote={activeNote}
        onUpdateNote={handleUpdateNote}
      />
    </div>
  );
}