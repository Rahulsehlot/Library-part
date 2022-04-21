const imgUrl = "ee03_ow_tnb_pl3/images/";
const soundUrl = "ee03_ow_tnb_pl3/sounds/";
const lottieUrl = "ee03_ow_tnb_pl3/lottie/";

const Scene8Map = {
  id: "scene8",

  Bg: `${imgUrl}sb_19_library_intro_bg.svg`,

  sprites: [
    `${imgUrl}sb_19_library_intro_bg_text.svg`,
    `${imgUrl}sb_19_library_intro_fg.svg`,
    `${imgUrl}buttons_play.svg`,
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}skip_btn.svg`,
  ],

  sounds: [`${soundUrl}scene8_audio/ep_19_audio_41.mp3`],

  lottie: [
    `${lottieUrl}character_with_lip_sync_library.json`,
    `${lottieUrl}character_01eyeblink.json`,
    `${lottieUrl}character_02eyeblink.json`,
    `${lottieUrl}1transition.json`,
  ],
};

export default Scene8Map;
