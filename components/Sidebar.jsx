export default function Sidebar(props) {
  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3>Notes</h3>
        <button className='new-note-btn' onClick={props.newNote}>
          +
        </button>
      </div>
      {/* later these are notes */}
      {props.notes.map((note, index) => (
        <div key={note.id}>
          <div
            className={`title ${
              note.id === props.currentNote.id ? 'selected-note' : ''
            }`}
            onClick={() => props.setCurrentNoteId(note.id)}
          >
            <h4 className='text-snippet'>Note {index + 1}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
