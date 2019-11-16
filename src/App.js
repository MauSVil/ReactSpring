import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";

function App() {
  const [show, set] = useState(0);
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  const contet = [
    { id: 1, content: "Hola" },
    { id: 2, content: "Adios" },
    { id: 3, content: "Bye" }
  ];

  return (
    <div>
      <div onClick={() => set(0)}>1</div>
      <div onClick={() => set(1)}>2</div>
      <div onClick={() => set(2)}>3</div>
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.div key={contet[item].id} style={props}>
            {contet[item].content}
          </animated.div>
        );
      })}
    </div>
  );
}

export default App;
