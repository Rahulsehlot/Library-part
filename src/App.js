import { useState, useEffect, useContext } from "react";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import Scene8Map from "./Scenes/Scene8/Scene8Map";
import Scene8 from "./Scenes/Scene8/Scene8";
import Scene9 from "./Scenes/Scene9/Scene9";
import Scene9AssetMapScreen4 from "./Scenes/Traces/Scene9trace4";
import Scene9AssetMapScreen2 from "./Scenes/Traces/Scene9trace2";
import Scene9AssetMapScreen3 from "./Scenes/Traces/Scene9trace3";
import Scene9AssetMapScreen5 from "./Scenes/Traces/Scene9trace5";
import Scene10 from "./Scenes/Scene10/Scene10";
import Scene10Map from "./Scenes/Scene10/Scene10Trace";
import Game3 from "./Scenes/Game3Screen/Game3";
import Game3Trace2Map from "./Scenes/Traces/Game3Trace2";
import Game3Trace3Map from "./Scenes/Traces/Game3Trace3";
import Game3Trace4Map from "./Scenes/Traces/Game3Trace4";
import Game3Trace5Map from "./Scenes/Traces/Game3Trace5";
import Game3Trace6Map from "./Scenes/Traces/Game3Trace6";
import Game3Trace7Map from "./Scenes/Traces/Game3Trace7";
import WellDone1 from "./Scenes/WellDone/WellDone1";
import { SceneContext } from "./contexts/SceneContext";
import WellDoneMap from "./Scenes/WellDone/WellDoneAssetMap";
import { LoadJson } from "./utils/loadJson";
import Star from "./Scenes/progress_bar/progress_bar";
import { SceneMap } from './Scenes/SceneMap'
import Image from "./utils/elements/Image";
import lottie from "lottie-web";
function App() {
  if (document.getElementById('progressBarID')) {
    document.getElementById('progressBarID').style.display = "none"
  }
  const Asset = useLoadAsset(Scene8Map);

  const { SceneId, setheight, Ipad, setIpad, LandScape, setLandScape, setTransition, Assets, isLoading, setSceneId, hidePlayButton, transition, isTransition, hideAllButtons, hideSkipButton, setHideSkipButton } =
    useContext(SceneContext);
  const [count, setCount] = useState(0);

  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [playing, setplaying] = useState(false);
  const [hidePrevButton, setHidePrevButton] = useState(true)
  const [hideNextButton, setNextPrevButton] = useState(true)

  const loadLottie = async () => {
    // const data = await LoadJson(`ee02_nt_1to10_srn/lottie/transition_01.json`);
    const data = await LoadJson(`ee03_ow_tnb_pl3/lottie/1transition.json`);
    setTransition(data);
  };
  const resizer = () => {
    if (window.innerWidth <= 1264) {
      setheight("87%");
    } else {
      setheight("73%");
    }
    setLandScape(window.innerWidth / window.innerHeight < 1.0);
    setIpad(
      window.innerWidth / window.innerHeight >= 1.3 &&
      window.innerWidth / window.innerHeight <= 1.44
    );
  };

  const currentItem = SceneMap.find((item) => {
    return (item.currentSceneName === SceneId)
  })
  const stop_all_sounds = () => {
    Assets?.[currentItem.assetID]?.sounds?.map((v) => v?.stop());
  };
  useEffect(() => {
    setHidePrevButton(currentItem?.hidePrev)
    setNextPrevButton(currentItem?.hideNext)
  }, [SceneId, hideAllButtons])
  const handleForward = () => {
    stop_all_sounds()
    setSceneId(currentItem.nextSceneName)
  }
  const handleBackward = () => {
    stop_all_sounds()
    setSceneId(currentItem.prevSceneName)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    loadAudio();
    loadLottie()
    window.addEventListener("resize", resizer);
    setIpad(
      window.innerWidth / window.innerHeight >= 1.3 &&
      window.innerWidth / window.innerHeight <= 1.44
    );

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_ow_tnb_pl3/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("ee03_ow_tnb_pl3/images/sound.svg"));
    seticon2(await LoadImage("ee03_ow_tnb_pl3/images/nosound.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true);
      BG_sound?.play();
    }
  }, [BG_sound, SceneId]);

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true);
      } else {
        BG_sound?.mute(false);
      }
    }
  }, [mute]);

  const toggleMute = () => {
    setmute(!mute);
  };
  if (Load && !Asset.Loading)
    return (
      <div className="loadingIndicator">
        <div className="vendorWrapper"></div>
        <div className="playerPreloader">
          <div className="playerPreloadCircle"></div>
        </div>
      </div>
    );
  return (
    <>
      <h1 style={{ display: LandScape ? "" : "none" }} id="landscapeMode">
        Rotate your device
      </h1>
      {!mute && SceneId !== "/" && !hideAllButtons && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          style={{ visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
        />
      )}
      {mute && !hideAllButtons && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
          style={{ visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
        />
      )}{" "}
      <Star num={count} />
      <Image
        src={Assets?.Scene9screen1?.sprites[3]}
        alt="txt"
        id="fadeup"
        className="backwardButton"
        onClick={handleBackward}
        style={{ display: hidePrevButton ? 'none' : 'block', visibility: hideAllButtons || LandScape ? 'hidden' : 'visible' }}
      />
      <Image
        src={Assets?.Scene9screen1?.sprites[2]}
        alt="txt"
        id="fadeup"
        className="forwardButton"
        onClick={handleForward}
        style={{
          display: hideNextButton ? 'none' : 'block',
          visibility: hideAllButtons || LandScape ? 'hidden' : 'visible'
        }}
      />
      <Image
        src={Assets?.scene8?.sprites[6]}
        alt="txt"
        id="fadeup"
        className="skipButton"
        onClick={() => {
          Assets?.scene8?.sounds[0]?.stop();
          setHideSkipButton(true)
          setSceneId("/Scene9Screen1");
        }}
        style={{
          display: hidePlayButton && !hideAllButtons && !hideSkipButton ? "block" : "none",
          visibility: LandScape ? 'hidden' : 'visible'
        }}
      />
      <div style={{ opacity: LandScape ? 0 : 1 }}>
        <GameContainer>

          <Router sceneId="/">
            <Scene8 assetID={"scene8"} />
          </Router>
          <Router sceneId="/Scene9Screen1">
            <Scene9
              scenename={"Scene9Screen2"}
              prevScene={"Scene9Screen1"}
              assetID={"Scene9screen1"}
              preLoad={Scene9AssetMapScreen2}
              hide={1}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene9Screen2">
            <Scene9
              scenename={"Scene9Screen3"}
              prevScene={"Scene9Screen1"}
              assetID={"Scene9screen2"}
              preLoad={Scene9AssetMapScreen3}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene9Screen3">
            <Scene9
              scenename={"Scene9Screen4"}
              prevScene={"Scene9Screen2"}
              assetID={"Scene9screen3"}
              preLoad={Scene9AssetMapScreen4}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene9Screen4">
            <Scene9
              scenename={"Scene9Screen5"}
              prevScene={"Scene9Screen3"}
              assetID={"Scene9screen4"}
              preLoad={Scene9AssetMapScreen5}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene9Screen5">
            <Scene9
              scenename={"Scene10"}
              prevScene={"Scene9Screen4"}
              assetID={"Scene9screen5"}
              preLoad={Scene10Map}
              hide={0}
              hideNxt={1}
            />
          </Router>
          <Router sceneId="/Scene10">
            <Scene10 assetID={"scene10"} />
          </Router>
          <Router sceneId="/Game3Screen1">
            <Game3
              assetID={"Game3Trace1"}
              preLoad={Game3Trace2Map}
              scenename={"Game3Screen2"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen2">
            <Game3
              assetID={"Game3Trace2"}
              preLoad={Game3Trace3Map}
              scenename={"Game3Screen3"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen3">
            <Game3
              assetID={"Game3Trace3"}
              preLoad={Game3Trace4Map}
              scenename={"Game3Screen4"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen4">
            <Game3
              assetID={"Game3Trace4"}
              preLoad={Game3Trace5Map}
              scenename={"Game3Screen5"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen5">
            <Game3
              assetID={"Game3Trace5"}
              preLoad={Game3Trace6Map}
              scenename={"Game3Screen6"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen6">
            <Game3
              assetID={"Game3Trace6"}
              preLoad={Game3Trace7Map}
              scenename={"Game3Screen7"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game3Screen7">
            <Game3
              assetID={"Game3Trace7"}
              preLoad={WellDoneMap}
              scenename={"WellDone"}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/WellDone">
            <WellDone1 assetID={"WellDone"} setCount={setCount} />
          </Router>
        </GameContainer>
      </div>
    </>
  );
}

export default App;
