import React, { useState } from "react";

interface IntegrationStatusNotesProps {
  integrationName: string;
  notes: string;
  onSave: (notes: string) => void;
  className?: string;
}

export function IntegrationStatusNotes({
  integrationName,
  notes,
  onSave,
  className = "",
}: IntegrationStatusNotesProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempNotes, setTempNotes] = useState(notes);

  const handleSave = () => {
    onSave(tempNotes);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempNotes(notes);
    setIsEditing(false);
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-gray-300">Notes</h4>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-gold hover:text-gold/80 transition-colors"
          >
            ✏️ Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={tempNotes}
            onChange={(e) => setTempNotes(e.target.value)}
            placeholder={`Add notes for ${integrationName}...`}
            className="w-full bg-charcoal/50 border border-gold/30 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
            rows={3}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-xs bg-gold/20 text-gold px-3 py-1 rounded hover:bg-gold/30 transition-all"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-xs bg-gray-500/20 text-gray-400 px-3 py-1 rounded hover:bg-gray-500/30 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          {notes || `No notes for ${integrationName}`}
        </p>
      )}
    </div>
  );
}
