import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

import { clamp } from "../../helpers/utils";

import styles from "./HorizontalScroll.module.css";

const HorizontalScroll = ({
  showScrollBar,
  items,
  disableAnimation,
  hidePadding,
}) => {
  const [animationStyle, setAnimationStyle] = useSpring(() =>
    !disableAnimation
      ? {
          transform: "perspective(500px) rotateY(0deg)",
        }
      : {}
  );

  const bindScrollChanges = useScroll((event) => {
    return !disableAnimation
      ? setAnimationStyle({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? clamp(event.delta[0], 30) : 0
          }deg)`,
        })
      : {};
  });

  return (
    <div
      className={`${styles["horizontal-contain"]} ${!hidePadding && "py-8"} ${
        !showScrollBar && "hide-scroll-x"
      }`}
      {...bindScrollChanges()}
    >
      {items?.map((item, i) =>
        !disableAnimation ? (
          <animated.div
            key={i}
            style={animationStyle}
            className={styles["card-scroll"]}
          >
            {item}
          </animated.div>
        ) : (
          <div style={{ width: "auto" }} key={i}>
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default HorizontalScroll;
