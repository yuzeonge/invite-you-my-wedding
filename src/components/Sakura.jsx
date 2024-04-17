import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Petal = styled.div`
  background: ${props => props.color || "black"};

  /* background: ${({ color }) => `linear-gradient(${color.gradientColorDegree}deg, ${color.gradientColorStart}, ${color.gradientColorEnd})`};
  border-radius: ${({ maxSize, width }) =>
    `${randomInt(maxSize, maxSize + Math.floor(Math.random() * 10))}px ${randomInt(1, Math.floor(width / 4))}px`};
  height: ${({ height }) => `${height}px`};
  left: ${() => `${Math.random() * document.documentElement.clientWidth - 100}px`};
  margin-top: ${() => `${-(Math.floor(Math.random() * 20) + 15)}px`};
  pointer-events: none;
  position: absolute;

  width: ${({ width }) => `${width}px`};
  animation: ${({ animations }) => animations} infinite; */
`;

const FlowerEffect = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const options = {
      colors: [
        {
          gradientColorStart: "rgba(255, 183, 197, 0.9)",
          gradientColorEnd: "rgba(255, 197, 208, 0.9)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(255,189,189)",
          gradientColorEnd: "rgba(227,170,181)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(212,152,163)",
          gradientColorEnd: "rgba(242,185,196)",
          gradientColorDegree: 120,
        },
      ],
      delay: 200,
    };

    const animationNames = {
      blowAnimations: ["blow-soft-left", "blow-medium-left", "blow-soft-right", "blow-medium-right"],
      swayAnimations: ["sway-0", "sway-1", "sway-2", "sway-3", "sway-4", "sway-5", "sway-6", "sway-7", "sway-8"],
    };

    const createPetal = () => {
      const blowAnimation = randomArrayElem(animationNames.blowAnimations);
      const swayAnimation = randomArrayElem(animationNames.swayAnimations);
      const fallTime = (document.documentElement.clientHeight * 0.007 + Math.round(Math.random() * 5)) * 1;

      const animations = [
        `fall ${fallTime}s linear 0s 1`,
        `${blowAnimation} ${(fallTime > 30 ? fallTime : 30) - 20 + randomInt(0, 20)}s linear 0s`,
        `${swayAnimation} ${randomInt(2, 4)}s linear 0s`,
      ].join(", ");

      const height = randomInt(10, 14);
      const width = height - Math.floor(randomInt(0, 10) / 3);
      const color = randomArrayElem(options.colors);
      console.log(color);

      setPetals(prevPetals => [
        ...prevPetals,
        {
          id: prevPetals.length,
          height,
          width,
          color,
          animations,
        },
      ]);

      setTimeout(() => {
        window.requestAnimationFrame(createPetal);
      }, options.delay);
    };

    window.requestAnimationFrame(createPetal);

    return () => {
      // 컴포넌트 언마운트 시 애니메이션 중지
      window.cancelAnimationFrame(createPetal);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {petals.map(petal => (
        <Petal key={petal.id} height={petal.height} width={petal.width} color={"red"} maxSize={14} animations={petal.animations} />
      ))}
    </div>
  );
};

export default FlowerEffect;

// Helper functions
function randomArrayElem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
