import React, { useEffect, useRef } from "react";
import "../css/Marquee.css";
import { useGetNews } from "./../hooks/useGetNews";

export const Marquee = () => {
  const { getCurrentNews, nextNews, index, isError } = useGetNews();

  const ref = useRef();

  const onAnimationEnd = e => {
    nextNews();
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      ref.current.style.animationName = "none";

      setTimeout(() => {
        ref.current.style.animationName = "";
      }, 0);
    });
  }, [index]);

  return (
    <div className="marquee-text">
      <div ref={ref} onAnimationEnd={onAnimationEnd}>
        <h1>{isError ? "No news :C" : getCurrentNews()}</h1>
      </div>
    </div>
  );
};
