import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene9AssetMapScreen1 from "../Traces/Scene9trace1";

export default function Scene8({
  scenename,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const { Loading } = useLoadAsset(Scene9AssetMapScreen1);
  const { SceneId, setSceneId, Assets, setAssets, setHidePlayButton, setisTransition, setHideAllButtons, hideSkipButton, setHideSkipButton } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [playing, setplaying] = useState(false);
  const [autoPLayState, setautoPLayState] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  const stop_all_sounds = () => {
    Assets?.scene8?.sounds?.map((v) => v?.stop());
  };
  // setBg(Scene3screen1?.Bg);
  const Ref = useRef(null);
  const Ref_1 = useRef(null);
  const Ref_3 = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: Assets?.scene8?.lottie[0],
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
          autoplay: false,
          animationData: Assets?.scene8?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_3.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_3.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: Assets?.scene8?.lottie[2],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.scene8?.Bg);
  }, []);

  const transRef = useRef(null);

  useEffect(() => {
    setHideAllButtons(isLoading)
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

          <div ref={Ref} className="Scene8_lottie_container_1"></div>
          <div ref={Ref_1} className="Scene8_lottie_container_2"></div>
          <div ref={Ref_3} className="Scene8_lottie_container_3"></div>

          <Image
            src={Assets?.scene8?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Library_Text"
          />
          <Image
            src={Assets?.scene8?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Library_ForeGround"
          />
          <Image
            className="play_btn"
            src={Assets?.scene8?.sprites[2]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              SetplayBtnHide(1);
              setHidePlayButton(true)
              lottie.play("placeholder");
              if (playing === false) {
                setautoPLayState(true);
                setplaying(true);
                if (Assets?.scene8) {
                  Assets?.scene8?.sounds[0]?.play();
                  Assets?.scene8?.sounds[0]?.on("end", () => {
                    setSceneId("/Scene9Screen1");
                    setHideSkipButton(true)
                    setplaying(false);
                  });
                }
              }
            }}
            style={{
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: playing === false ? "pointer" : "",
              display: playBtnHide === 0 ? "block" : "none",
            }}
          />

          {/* <Image
            src={Assets?.scene8?.sprites[6]}
            alt="txt"
            id="fadeup"
            className="skip"
            onClick={() => {
              Assets?.scene8?.sounds[0]?.stop();

              setSceneId("/Scene9Screen1");
            }}
            style={{
              display: playBtnHide === 1 ? "block" : "none",
            }}
          /> */}
        </>
      }
    />
  );
}
