import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Home from './components/Home'
import Projects from './components/Projects';
import Invest from './components/Invest';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/projects" element={< Projects />} />
          <Route path="/company/:id" element={<Company />} />
          <Route exact path="/invest" element={< Invest />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
