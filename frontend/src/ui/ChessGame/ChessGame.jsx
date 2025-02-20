import React, { useState } from "react";
import { Stage, Layer, Rect, Image } from "react-konva";
import { Chess } from "chess.js";
import useImage from "use-image";
import styles from "./ChessGame.module.css";
const boardSize = 600; // Increased for visibility
const squareSize = boardSize / 8;

const Piece = ({ imageUrl, x, y }) => {
  const [image] = useImage(imageUrl);
  const [position, setPosition] = useState({ x, y });


  // Center under cursor on drag start
  const handleMouseDown = (e) => {
    const { x: mouseX, y: mouseY } = e.target
      .getStage()
      .getPointerPosition();
    console.log(mouseX, mouseY);
    setPosition({
      x: mouseX - squareSize / 2,
      y: mouseY - squareSize / 2,
    });
  };

  // Snap to nearest square on drag end
  const handleDragEnd = (e) => {
    const newX = Math.round(e.target.x() / squareSize) * squareSize;
    const newY = Math.round(e.target.y() / squareSize) * squareSize;

    setPosition({
      x: newX,
      y: newY,
    });
  };

  return image ? (
    <Image
      image={image}
      x={position.x}
      y={position.y}
      width={squareSize}
      height={squareSize}
      draggable
      onMouseDown={handleMouseDown}
      onMouseUp={handleDragEnd}
      onDragEnd={handleDragEnd}
    />
  ) : null;
};

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const renderBoard = () => {
    const squares = [];
    let isDark;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        isDark = (row + col) % 2 === 1 ? true : false;
        // Define corner radii for specific corners
        let cornerRadius = [0, 0, 0, 0]; // [top-left, top-right, bottom-right, bottom-left]

        if (row === 0 && col === 0) {
          // Top-left square
          cornerRadius = [15, 0, 0, 0];
        } else if (row === 0 && col === 7) {
          // Top-right square
          cornerRadius = [0, 15, 0, 0];
        } else if (row === 7 && col === 7) {
          // Bottom-right square
          cornerRadius = [0, 0, 15, 0];
        } else if (row === 7 && col === 0) {
          // Bottom-left square
          cornerRadius = [0, 0, 0, 15];
        }

        squares.push(
          <Rect
            key={`${row}-${col}`}
            x={col * squareSize}
            y={row * squareSize}
            width={squareSize}
            height={squareSize}
            fill={isDark ? "#b58863" : "#f0d9b5"}
            cornerRadius={cornerRadius} // ✅ Apply specific corners
          />
        );
      }
    }

    return squares;
  };

  return (
    <Stage width={boardSize} height={boardSize}>
      <Layer>{renderBoard()}</Layer>

      <Layer>
        <Piece
          imageUrl="https://res.cloudinary.com/dtu64orvo/image/upload/v1739978288/Chess_bdt60_cnmydk.png"
          x={0}
          y={0}
        />
      </Layer>
    </Stage>
  );
};

export default ChessGame;
