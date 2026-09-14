import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MS in AI @ University of Michigan",
          "Graduate Student Research Assistant @ PlayLab",
          "ECE Graduate @ CUSAT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
