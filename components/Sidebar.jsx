export default function Sidebar() {
  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3>Notes</h3>
        <button className='new-note-btn'>+</button>
      </div>
      {/* later these are notes */}
      <div>
        <div className='title selected-note'>
          <h4 className='text-snippet'>lorem</h4>
        </div>
      </div>

      <div>
        <div className='title'>
          <h4 className='text-snippet'>Note 2</h4>
        </div>
      </div>
    </section>
  );
}
