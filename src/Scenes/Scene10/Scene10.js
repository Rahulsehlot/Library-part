import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene9AssetMapScreen1 from "../Traces/Scene9trace1";
import Game3Trace1Map from "../Traces/Game3Trace1";

export default function Scene10({ assetID }) {
  const { Loading } = useLoadAsset(Game3Trace1Map);
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (isLoading === false) {
      setBg(Assets?.scene10?.Bg);
      if (Assets?.scene10) {
        Assets?.scene10?.sounds[0]?.play();
        Assets?.scene10?.sounds[0]?.on("end", () => {
          setSceneId("/Game3Screen1");
        });
      }
    }
  }, [isLoading]);
  const Ref = useRef(null);
  const Ref_1 = useRef(null);
  const Ref_2 = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene10?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_1.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene10?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_2.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene10?.lottie[2],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const forward = () => {
    setSceneId("/Game3Screen1");
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

          <div ref={Ref} className="Scene10_lottie_container_1"></div>
          <div ref={Ref_1} className="Scene10_lottie_container_2"></div>
          <div ref={Ref_2} className="Scene10_lottie_container_3"></div>

          <Image
            src={Assets?.scene10?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Library_1_Text"
          />
          <Image
            src={Assets?.scene10?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Library_1_ForeGround"
          />
          <Image
            src={Assets?.scene10?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="Scene10_container_1"
          />
        </>
      }
    />
  );
}
