import { useState } from "react";
import pause from "./assets/icons/pause.svg";
import "./App.css";
import { API } from "./API";
import { IAudio } from "./type";

function pauseStop(data: IAudio[]) {
    data.forEach((item) => {
        item.audio.pause();
        item.audio.currentTime = 0;
    });
}

function playingStop(data: IAudio[]) {
    data.map((item) => {
        item.isPlaying = false;
    });
}

function App() {
    const [data, setData] = useState(API);
    const [background, setBackground] = useState("");

    const handlerClickContainer = (item: IAudio) => {
        // stop and play
        pauseStop(data);
        item.audio.play();

        // look pause
        if (item.isPlaying) {
            item.isPlaying = false;
            pauseStop(data);
        } else {
            playingStop(data);
            item.isPlaying = true;
        }
        // update
        setBackground(item.img);
        setData((prevState) => prevState.map((item) => item));
    };

    const handlerChangeValue = (value: string, items: IAudio[]) => {
        items.map((item) => {
            item.audio.volume = Number(value)/100
        })
        setData((prevState) => prevState.map((item) => item));
    }

    return (
        <div className="main" style={{ background: `url(${background})` }}>
            <h1 className="main__title">Pavloging FM</h1>
            <div className="main__content">
                {data.map((item: IAudio, index: number) => (
                    <div className="main__map" key={index}>
                        <div
                            className="main__container"
                            style={{ background: `url(${item.img})` }}
                            onClick={() => handlerClickContainer(item)}
                        >
                            <img
                                className="main__icon"
                                src={item.isPlaying ? pause : item.icon}
                                alt=""
                            />
                        </div>

                    </div>
                ))}

            </div>
            <div className="main__block-input">
            <input className="main__input" onChange={(e) => handlerChangeValue(e.target.value, data)} type="range" name="" id="" />

            </div>

        </div>
    );
}

export default App;
