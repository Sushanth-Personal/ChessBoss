import useState from "react";
const Chess = () => {
  const [userColor, setUserColor] = useState("White");

  const startingBoardOrientation = () => {
    if (userColor === "White") {
      //Orientation for white
    } else {
      //Orientation for Black
    }
  };

  const movePiece = () =>{
    //
  }

  return <div>Chess</div>;
};

export default Chess;
