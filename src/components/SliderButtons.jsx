import { useSwiper } from "swiper/react";
function SliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="slider_buttons">
      <button onClick={() => swiper.slideNext()} className="slider_next_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="48"
          viewBox="0 0 15 24"
          fill="none"
        >
          <path
            d="M3 3L12 12L3 21"
            stroke="#F1D05A"
            strokeWidth="3"
            strokeLinecap="square"
          />
        </svg>
      </button>
    </div>
  );
}

export { SliderButtons };
