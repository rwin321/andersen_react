import React from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  console.log("HOME was rendered");

  const stylesTittleTop = useSpring({
    to: async (next) => {
      await next({ opacity: 0, color: "rgb(14,26,19)" });
      await next({ opacity: 1, color: "#db2626d2" });
    },
    from: { opacity: 0, color: "red", fontSize: "2rem" },
  });

  const stylesUl = useSpring({
    to: async (next) => {
      await next({ opacity: 0, color: "rgb(14,26,19)" });
      await next({ opacity: 1, transition: "1s" });
    },
    from: { opacity: 0, color: "red", fontSize: "2rem" },
  });
  const stylesTittleBot = useSpring({
    to: async (next) => {
      await next({ opacity: 0, color: "rgb(14,26,19)" });
      await next({ opacity: 1, color: "#db2626d2", transition: "1.5s" });
    },
    from: { opacity: 0, color: "red", fontSize: "2rem" },
  });

  return (
    <div className="home">
      <animated.div style={stylesTittleTop}>
        Small React APP, where you can see usage of:
      </animated.div>
      <animated.ul style={stylesUl} className="home__menu menu">
        <li className="menu__item">hooks</li>
        <li className="menu__item">hocs</li>
        <li className="menu__item">routes</li>
        <li className="menu__item">renderProp</li>
      </animated.ul>
      <animated.h2 style={stylesTittleBot} className="home__title">
        Thank you for the attention!
      </animated.h2>
    </div>
  );
};

export default Home;
