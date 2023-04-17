import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import { data } from './data';
import Split from 'react-split';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <main>
      <Split sizes={[30, 70]} direction='horizontal' className='split'>
        <Sidebar />
        <Editor />
      </Split>
    </main>
  );
}

export default App;
