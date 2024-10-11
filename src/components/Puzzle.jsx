import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";
import "../App.css";



const PuzzlePiece = ({ piece }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "PUZZLE_PIECE",
    item: { id: piece.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <motion.div
      ref={drag}
      className="puzzle-piece"
      initial={{ scale: 1 }}
      animate={{ scale: isDragging ? 1.2 : 1 }}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img src={piece.src} alt={`Piece ${piece.id}`} />
    </motion.div>
  );
};

export const PuzzleBoard = ({ pieces }) => {
  const [board, setBoard] = useState(Array(12).fill(null));
  const [availablePieces, setAvailablePieces] = useState(pieces);

  const handleDrop = (pieceId, dropIndex) => {
    const newBoard = [...board];
    const pieceToMove =
      availablePieces.find((p) => p.id === pieceId) ||
      board.find((p) => p?.id === pieceId);

    if (!pieceToMove) return;

    // Если в целевой ячейке уже есть пазл, переместить его обратно в доступные
    if (newBoard[dropIndex]) {
      const pieceInCell = newBoard[dropIndex];
      setAvailablePieces((prev) => [...prev, pieceInCell]);
    }

    // Обновить доску: добавить новый пазл и удалить его из старого места
    newBoard[dropIndex] = pieceToMove;
    setBoard(newBoard);

    // Удалить пазл из списка доступных, если он был там
    setAvailablePieces((prev) => prev.filter((p) => p.id !== pieceId));
  };

  const handleRemovePiece = (index) => {
    const newBoard = [...board];
    const removedPiece = newBoard[index];

    if (removedPiece) {
      newBoard[index] = null;
      setBoard(newBoard);

      setAvailablePieces((prev) => [...prev, removedPiece]);
    }
  };

  return (
    <div className="puzzle-container flex flex-col">
      <div className="puzzle-board">
        {board.map((piece, index) => (
          <DropCell
            key={index}
            index={index}
            piece={piece}
            onDrop={handleDrop}
            onRemovePiece={() => handleRemovePiece(index)}
          />
        ))}
      </div>

      <div className="puzzle-pieces flex flex-wrap flex-row-reverse">
        {availablePieces.map((piece) => (
          <PuzzlePiece key={piece.id} piece={piece} />
        ))}
      </div>
    </div>
  );
};

const DropCell = ({ index, piece, onDrop, onRemovePiece }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "PUZZLE_PIECE",
    drop: (item) => onDrop(item.id, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <motion.div
      ref={drop}
      className="drop-cell"
      initial={{ backgroundColor: "#fff" }}
      animate={{ backgroundColor: isOver ? "#f0f0f0" : "#fff" }}
      onClick={onRemovePiece}
    >
      {piece ? <img src={piece.src} alt="piece" /> : null}
    </motion.div>
  );
};