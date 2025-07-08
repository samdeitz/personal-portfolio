import { useState } from 'react';
import { ThemeProvider } from "./ThemeProvider";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { ProjectProvider } from './ProjectProvider';
import Header from './components/Header';
import Project from "./components/Project.jsx";
import sample from "./assets/sample.jpg"
import projects from "./projects.js";

function App() {

  return (
    
    <ThemeProvider>
      <ProjectProvider>
        <Project projects={projects} />
        <Header />
        <Desktop />
        <Taskbar projects={projects} />
      </ProjectProvider>
    </ThemeProvider>
  )
}

export default App;
