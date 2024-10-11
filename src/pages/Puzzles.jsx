import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PuzzleBoard } from '../components/Puzzle';
import "../App.css";


function Puzzles() {
    const pieces = [
        { src: "puzzles/1.jpg", id: 1 },
        { src: "puzzles/2.jpg", id: 2 },
        { src: "puzzles/3.jpg", id: 3 },
        { src: "puzzles/4.jpg", id: 4 },
        { src: "puzzles/5.jpg", id: 5 },
        { src: "puzzles/6.jpg", id: 6 },
        { src: "puzzles/7.jpg", id: 7 },
        { src: "puzzles/8.jpg", id: 8 },
        { src: "puzzles/9.jpg", id: 9 },
        { src: "puzzles/10.jpg", id: 10 },
        { src: "puzzles/11.jpg", id: 11 },
        { src: "puzzles/12.jpg", id: 12 },
      ];
  return (
    <dev>
        <DndProvider backend={HTML5Backend}>
          <div className="container mx-auto text-center">
            <PuzzleBoard pieces={pieces} />
          </div>
        </DndProvider>
      </dev>
  )
}

export default Puzzles