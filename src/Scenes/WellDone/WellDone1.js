import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";

export default function WellDone({ scenename, BG_sound, setCount }) {
  // const Next = useLoadAsset(Scene5Map);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, setHideAllButtons, setHidePlayButton, setHideSkipButton } =
    useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [playing, setplaying] = useState(false);

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setHideAllButtons(isLoading)
    if (isLoading === false) {
      setBg(Assets?.Welldone?.Bg);
      if (Assets?.Welldone) {
        setplaying(true);
        Assets?.Welldone?.sounds[0]?.play();
        Assets?.Welldone?.sounds[0]?.on("end", () => {
          Assets?.Welldone?.sounds[1]?.play();
          Assets?.Welldone?.sounds[1]?.on("end", () => {
            setplaying(false);
          });
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (Assets && Ref1.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Welldone?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  useEffect(() => {
    if (Assets && Ref2.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Welldone?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const forward = () => {
    if (playing === false) {
      stop_all_sounds();
      setCount(0);
      setSceneId("/");
      setHidePlayButton(false)
      setHideAllButtons(true)
      setHideSkipButton(false)
    }
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <div ref={Ref1} className="text_lottie_container"></div>
          <div ref={Ref2} className="particles_lottie_container"></div>

          <Image
            src={Assets?.Welldone?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="ReplayBTN"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
