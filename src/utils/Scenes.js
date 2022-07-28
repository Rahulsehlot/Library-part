import { useContext, useEffect, useState, Fragment, useRef } from "react";
import { SceneContext } from "../contexts/SceneContext";
// import "../styles/Scenes.css"
// import apple from "./apple.svg"
import lottie from 'lottie-web';
export default function Scenes({ sprites, Bg = "" }) {
  const { setSceneId, setisLoading, isLoading, Ipad, setIpad, transition } =
    useContext(SceneContext);
  const containerRef2 = useRef(null);
  useEffect(() => {
    if (transition && containerRef2.current && isLoading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: containerRef2.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: transition,
      });
      ch.setSpeed(0.9)
      ch.play()
      ch.addEventListener('complete', () => {
        setisLoading(false)
      })
    }
  }, [transition, isLoading]);
  return (
    <div id="vision">
      {Bg !== "" && (
        <img
          className="Bg_Image"
          id="vision"
          alt="background"
          style={{ transform: Ipad ? "scale(1.5)" : "" }}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(Bg)}`}
        />
      )}
      <div
        className="transition_bg"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <div
          className="transition"
          style={{ display: isLoading ? "block" : "none" }}
          ref={containerRef2}
        ></div>
      </div>
      {sprites}
    </div>
  );
}
