import React from 'react';
import './App.css';
//import { library } from '@fortawesome/fontawesome-svg-core';
import projects from './assets/projects.json';
import skills from './assets/skills.json';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full h-full pb-8 bg-gray-700 text-gray-300 flex flex-col items-center justify-center">
      <Header />
      <section className="w-full px-48 mb-4">
        <h1 className="border-l-4 border-r-4 bg-gray-800 border-blue-400 p-4 text-xl text-blue-300">About</h1>
        <div className="ml-32 mt-4">
          <p className="mb-2">I am a young Ecuadorian who likes to solve problems and improve his skills at all times.</p>
          <p className="mb-2">I have a degree in software engineering.</p>
        </div>        
      </section>
      <section className="w-full px-48 mb-4">
        <h1 className="border-l-4 border-r-4 bg-gray-800 border-blue-400 p-4 text-xl text-blue-300">Skills</h1>
        <div className="ml-32 my-4 grid grid-flow-row grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="flex items-center">
              <img src={s.icon} />
              <span className="ml-2">{s.name}</span>
            </div>
          ))}
        </div>  
      </section>
      <section className="w-full px-48">
        <h1 className="border-l-4 border-r-4 bg-gray-800 border-blue-400 p-4 text-xl text-blue-300">Projects</h1>
        <div className="ml-32 mt-4">
          { projects.map((p, i) => (
              <div key={i} className="mb-8">
                <div className="flex items-center mb-2">
                  <h2 className="text-lg text-blue-500 mr-2">{p.name}</h2>
                  <a href={p.url} target="_blank">
                    <img src="https://img.icons8.com/windows/28/ffffff/external-link-squared.png"/>
                  </a>
                </div>
                
                <p>{p.desc}</p>
                
                <div className="flex mt-4">
                  {p.technologies.map((t, i) => {
                    return (
                      <div key={i} className="mr-4 bg-gray-800 px-4 py-1 rounded-full">
                        {t}
                      </div>
                    )
                  })}
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
