import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene9AssetMapScreen3 from "../Traces/Scene9trace3";
import Scene9AssetMapScreen2 from "../Traces/Scene9trace2";
import Scene9AssetMapScreen4 from "../Traces/Scene9trace4";
import Scene9AssetMapScreen5 from "../Traces/Scene9trace5";
import Scene9AssetMapScreen1 from "../Traces/Scene9trace1";
import Scene10Map from "../Scene10/Scene10Trace";
const get_ani_map = (val) => {
  switch (val) {
    case "Scene9AssetMapScreen1":
      return Scene9AssetMapScreen1;
      break;
    case "Scene9AssetMapScreen1":
      return Scene9AssetMapScreen2;
      break;
    case "Scene9AssetMapScreen3":
      return Scene9AssetMapScreen3;
      break;
    case "Scene9AssetMapScreen4":
      return Scene9AssetMapScreen4;
      break;
    case "Scene9AssetMapScreen1":
      return Scene9AssetMapScreen5;
    default:
      break;
  }
};

export default function Scene9({
  scenename,
  picture_Id,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const Next = useLoadAsset(preLoad);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const Ref = useRef(null);
  const [isLoading, setisLoading] = useState(true);

  const stop_all_sounds = () => {
    Assets?.[assetID]?.sounds?.map((v) => v?.stop());
  };
  // setBg(Scene3screen1?.Bg);

  useEffect(() => {
    if (isLoading === false) {
      setBg(Assets?.Scene9screen1?.Bg);
      if (Assets?.[assetID]) {
        Assets?.[assetID]?.sounds[0]?.play();
        Assets?.[assetID]?.sounds[0]?.on("end", () => {
          setTimeout(() => {
            setSceneId("/" + scenename);
          }, 1500);
        });
      }
    }
  }, [isLoading]);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/" + scenename);
  };

  const backward = () => {
    stop_all_sounds();
    setSceneId("/" + prevScene);
  };

  const transRef = useRef(null);

  useEffect(() => {
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.scene8?.lottie[3],
        speed: 1,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <div
            className="transition_bg"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div
              className="transition"
              style={{ display: isLoading ? "block" : "none" }}
              ref={transRef}
            ></div>
          </div>

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Questions"
          />
          <Image
            src={Assets?.[assetID]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Questions_Text"
          />

          <Image
            src={Assets?.Scene9screen1?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="backward"
            onClick={backward}
            style={{ display: hide === 1 ? "none" : "block" }}
          />
          <Image
            src={Assets?.Scene9screen1?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="forward"
            onClick={forward}
            style={{ display: hideNxt === 1 ? "none" : "block" }}
          />
        </>
      }
    />
  );
}
