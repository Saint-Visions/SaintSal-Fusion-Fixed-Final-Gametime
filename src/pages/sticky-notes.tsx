import React, { useState } from "react";

interface Note {
  id: string;
  content: string;
  color: string;
  timestamp: Date;
}

export default function StickyNotes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      content: "Follow up with Sarah Johnson about Q4 projections",
      color: "bg-yellow-200",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: "Review PartnerTech.ai integration specs",
      color: "bg-green-200",
      timestamp: new Date(),
    },
    {
      id: "3",
      content: "Schedule team meeting for HACP™ protocol updates",
      color: "bg-blue-200",
      timestamp: new Date(),
    },
  ]);

  const [newNote, setNewNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("bg-yellow-200");

  const colors = [
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-orange-200",
  ];

  const addNote = () => {
    if (!newNote.trim()) return;

    const note: Note = {
      id: Date.now().toString(),
      content: newNote,
      color: selectedColor,
      timestamp: new Date(),
    };

    setNotes((prev) => [note, ...prev]);
    setNewNote("");
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">��</span>
            <div>
              <h1 className="text-4xl font-black text-white">
                Sticky <span className="text-gold">Notes</span>
              </h1>
              <p className="text-gray-400 mt-2">
                Quick notes, tasks, and reminders
              </p>
            </div>
          </div>
          <div className="bg-gray-900/30 p-4 rounded-lg border border-gold/20">
            <p className="text-sm text-gold">
              🔒 Protected by HACP™ + OPATENT™ · U.S. Patent No. 10,290,222
            </p>
          </div>
        </div>

        {/* Add New Note */}
        <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm mb-8">
          <h2 className="text-xl font-bold text-gold mb-4">
            ✏️ Create New Note
          </h2>
          <div className="space-y-4">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Type your note here..."
              className="w-full h-24 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-gold focus:outline-none resize-none"
            />

            {/* Color Picker */}
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">Color:</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${color} border-2 ${
                      selectedColor === color
                        ? "border-gold"
                        : "border-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={addNote}
              className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`${note.color} p-4 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform relative`}
              style={{ minHeight: "200px" }}
            >
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
              >
                ×
              </button>

              <div className="text-gray-800 text-sm leading-relaxed mb-4">
                {note.content}
              </div>

              <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                {note.timestamp.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">📝</span>
            <p className="text-gray-400 text-lg">
              No notes yet. Create your first sticky note above!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
