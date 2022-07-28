import { useEffect, useState } from 'react';
import { SceneContext } from './../contexts/SceneContext';
import { useContext } from 'react';
const wrh = 1920 / 900
export default function GameContainer({ children, LandScape, setLandScape }) {
  const [scale, setScale] = useState(1);
  const [newWidth, setNewWidth] = useState(window.innerWidth)
  const [newHeight, setNewHeight] = useState(newWidth / wrh)
  useEffect(() => {
    if (newHeight > window.innerHeight) {
      setNewWidth((window.innerHeight) * wrh)
      setNewHeight(window.innerHeight)
    }
  }, [newHeight])

  const onResize = () => {
    setNewWidth(window.innerWidth)
    setNewHeight(window.innerWidth / wrh)

    const currentScreenAspectRatio = window.innerWidth / window.innerHeight

    if (currentScreenAspectRatio > wrh) {
      // ultra wide screen
      const newWidth = window.innerHeight * wrh
      setScale(window.innerWidth / newWidth)
    } else {
      const newHeight = window.innerWidth / wrh
      setScale(window.innerHeight / newHeight)
    }
  }
  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      // clearInterval(interval)
    }
  }, [])
  return <div className="vendorWrapper">
    <div className="playHold" style={{
      position: "fixed",
      width: `${newWidth}px`,
      height: `${newHeight}px`,
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) scale(${scale})`,
      overflow: "hidden"
    }}>
      {!LandScape && children}

    </div>
  </div>
}