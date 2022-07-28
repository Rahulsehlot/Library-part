import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Image from "../../utils/elements/Image";
import useLoadAsset from "../../utils/useLoadAsset";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { Assets } = useContext(SceneContext);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <div className="progress-bar-container" id='progressBarID'>
        <Image
          src={Assets?.scene8?.sprites[3]}
          alt="txt"
          className="progress-bar-background"
        />

        <div className="progress-bar-star-container">
          <Image
            src={
              num >= 1 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 1 ? "star" : ""}
          />
          <Image
            src={
              num >= 2 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 2 ? "star" : ""}
          />
          <Image
            src={
              num >= 3 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 3 ? "star" : ""}
          />
          <Image
            src={
              num >= 4 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 4 ? "star" : ""}
          />
          <Image
            src={
              num >= 5 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 5 ? "star" : ""}
          />
          <Image
            src={
              num >= 6 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 6 ? "star" : ""}
          />
          <Image
            src={
              num >= 7 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="progress-bar-stars"
            className={num === 7 ? "star" : ""}
          />
        </div>
      </div>
      {/* <div className="star-wrapper">
        <Image
          src={Assets?.scene8?.sprites[3]}
          alt="txt"
          className="progress_bar"
        />

        <div className="star-wrapper0">
          <Image
            src={
              num >= 1 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 1 ? "star" : ""}
          />
          <Image
            src={
              num >= 2 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 2 ? "star" : ""}
          />
          <Image
            src={
              num >= 3 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 3 ? "star" : ""}
          />
          <Image
            src={
              num >= 4 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 4 ? "star" : ""}
          />
          <Image
            src={
              num >= 5 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 5 ? "star" : ""}
          />
          <Image
            src={
              num >= 6 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 6 ? "star" : ""}
          />
          <Image
            src={
              num >= 7 ? Assets?.scene8?.sprites[5] : Assets?.scene8?.sprites[4]
            }
            alt="txt"
            id="stars"
            className={num === 7 ? "star" : ""}
          />
        </div>
      </div> */}
    </>
  );
}
