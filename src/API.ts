import { IAudio } from "./type";
import rainyBg from "./assets/rainy-bg.jpg";
import summerBg from "./assets/summer-bg.jpg";
import winterBg from "./assets/winter-bg.jpg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";
import sunIcon from "./assets/icons/sun.svg";
// import rainMp3 from "/sounds/rain.mp3"
// import summerMp3 from "/sounds/summer.mp3"
// import winterMp3 from "/sounds/winter.mp3"

export const API: IAudio[] = [
    {
        id: 1,
        audio: new Audio("/sounds/rain.mp3"),
        img: rainyBg,
        icon: rainIcon,
        isPlaying: false,
    },
    {
        id: 2,
        audio: new Audio("/sounds/summer.mp3"),
        img: summerBg,
        icon: snowIcon,
        isPlaying: false,
    },
    {
        id: 3,
        audio: new Audio("/sounds/winter.mp3"),
        img: winterBg,
        icon: sunIcon,
        isPlaying: false,
    },
];
