import React from "react";
import  Header  from "../components/Header/Header.jsx";
import { ProjectCrd } from "../components/ProjectCards/Card.jsx";

export const WebDev = () => {
    return (
        <>
        <Header
            title="Web Development Projects"
            description="A showcase of my web development projects, including personal portfolios and e-commerce platforms."
        />
        <div className='project-card-header'>
        <ProjectCrd
  title="Todo List App"
  description="A simple todo list application built with React and local storage."
  github="https://robotech83.github.io/JS_ToDoList/"
/>
        <ProjectCrd
  title="Tic Tac Toe Game"
  description="A classic Tic Tac Toe game implemented in JavaScript with a simple UI. NOT Completed yet."
  github="https://robotech83.github.io/TicTacToe/"
/>
        </div>
        </>
    )
}