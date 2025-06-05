/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Header from '../components/Header/Header.jsx';
import { ProjectCrd } from '../components/ProjectCards/Card.jsx';

const projects = [
  {
    title: 'Todo List App',
    description: 'A simple todo list application..',
    github: 'https://github.com/Robotech83/JS_ToDoList/',
    demo: 'https://robotech83.github.io/JS_ToDoList/',
    category: 'tools',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic Tic Tac Toe game.',
    github: 'https://github.com/Robotech83/TicTacToe/',
    demo: 'https://robotech83.github.io/TicTacToe/',
    category: 'games',
  },

];

const categories = ['all', 'tools', 'games'];

export const WebDev = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Header
        title="Web Development Projects"
        description="A showcase of my web development projects, including personal portfolios and tools."
      />

      {/* Filter Buttons */}
      <div sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            sx={{
              px: 3,
              py: 2,
              fontSize: 1,
              bg: activeCategory === cat ? 'primary' : 'transparent',
              color: activeCategory === cat ? 'background' : 'text',
              border: '1px solid',
              borderColor: 'primary',
              borderRadius: 4,
              cursor: 'pointer',
              transition: '0.3s',
              ':hover': {
                bg: 'primary',
                color: 'background',
              },
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div
        sx={{
          variant: 'styles.cardGrid',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {filteredProjects.map(({ title, description, github, demo }) => (
          <ProjectCrd key={title} title={title} description={description} github={github}>
            {demo && (
              <iframe
                src={demo}
                title={`${title} Demo`}
                sx={{ variant: 'styles.iframe' }}
              />
            )}
          </ProjectCrd>
        ))}
      </div>
    </>
  );
};
