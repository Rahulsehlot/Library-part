const imgUrl = "ee03_ow_tnb_pl3/images/";
const soundUrl = "ee03_ow_tnb_pl3/sounds/";
const lottieUrl = "ee03_ow_tnb_pl3/lottie/";

const Scene10Map = {
  id: "scene10",

  Bg: `${imgUrl}sb_19_library_bg.svg`,

  sprites: [
    `${imgUrl}sb_19_library_fg.svg`,
    `${imgUrl}sb_19_library_bg_text.svg`,
    `${imgUrl}asset_2.svg`,
  ],

  sounds: [`${soundUrl}game4_audio/ep_19_audio_47.mp3`],

  lottie: [
    `${lottieUrl}sb_19_scene_45_ch.json`,
    `${lottieUrl}sb_19_scene_45_eyeblink_01.json`,
    `${lottieUrl}sb_19_scene_45_eyeblink_02.json`,
  ],
};

export default Scene10Map;
