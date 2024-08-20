import './App.css';
import Application from './components/application/application';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Application/>
      <Skills skills={["html","css",]}/>    
    </div>
  );
}

export default App;
