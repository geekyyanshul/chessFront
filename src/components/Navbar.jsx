import React, { useContext } from "react";
import { chessContext } from "../context/Context";

const Navbar = () => {
  const {isFullscreen} = useContext(chessContext);

  return (
    <>
      {!isFullscreen && (
        <nav className="w-full border-[black] border-b-2 p-3 bg-[black] text-2xl font-extrabold text-[white] text-center font-mono ">
          CHESS
        </nav>
      )}
    </>
  );
};

export default Navbar;
