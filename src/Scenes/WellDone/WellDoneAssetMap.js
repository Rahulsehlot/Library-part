const imgUrl = "ee03_ow_tnb_pl3/images/";
const soundUrl = "ee03_ow_tnb_pl3/sounds/";
const lottieUrl = "ee03_ow_tnb_pl3/lottie/";

const WellDoneMap = {
  id: "Welldone",

  Bg: `${imgUrl}thank_you_bg.svg`,

  sprites: [`${imgUrl}skip_btn.svg`, `${imgUrl}replay_btn.svg`],

  sounds: [`${soundUrl}welldone.mp3`, `${soundUrl}replay_sound.mp3`],

  lottie: [
    `${lottieUrl}sb_19_scene_53_particles.json`,
    `${lottieUrl}sb_19_scene_53_text.json`,
  ],
};

export default WellDoneMap;
