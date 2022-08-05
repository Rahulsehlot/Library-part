import { createContext, useState, useEffect } from "react";

export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/");
  const [isLoading, setisLoading] = useState(true);
  const [isTransition, setisTransition] = useState(false);
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({});
  const [Starz, setStarz] = useState(0);
  const [height, setheight] = useState("73%");
  const [count, setcount] = useState(0);
  const [Ipad, setIpad] = useState(false);
  const [LandScape, setLandScape] = useState(false);
  const [hidePlayButton, setHidePlayButton] = useState(false);
  const [transition, setTransition] = useState(null);
  const [hideAllButtons, setHideAllButtons] = useState(true)
  const [hideSkipButton, setHideSkipButton] = useState(false)

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <SceneContext.Provider
      value={{
        LandScape,
        setLandScape,
        SceneId,
        setSceneId,
        isLoading,
        setisLoading,
        Assets,
        setAssets,
        Starz,
        setStarz,
        height,
        setheight,
        count,
        setcount,
        Ipad,
        setIpad,
        transition,
        setTransition,
        hidePlayButton,
        setHidePlayButton,
        isTransition,
        setisTransition,
        hideAllButtons,
        setHideAllButtons, hideSkipButton, setHideSkipButton
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
