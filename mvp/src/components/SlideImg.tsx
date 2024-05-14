import { useState } from "react";
import PromptBox from "./PromptBox";

type Props = {
  width: number;
  imgUrl: string;
  text: string;
  purpose: string;
};

const SlideImg = ({ width, imgUrl, text, purpose }: Props) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <div
      className={`relative overflow-hidden `}
      style={{ width: `${width}px`, height: `${width}px` }}
      onClick={handleClick}
    >
      <div
        className="absolute top-0 left-0 flex transition-all cursor-pointer"
        style={{ left: `${isClick ? "-100%" : 0}` }}
      >
        <img alt="이미지" src={imgUrl} width={width} height={width} />
        <div>
          <PromptBox width={width} text={text} purpose={purpose} />
        </div>
      </div>
    </div>
  );
};

export default SlideImg;
