import React from "react";

const SingleReelView = () => {
  return (
    <div>
      <section className="single-reel-show-section">
        <div className="reel__container">
          <div className="reel__title">
            <div className="reel__back-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={5} y1={12} x2={19} y2={12} />
                <line x1={5} y1={12} x2={9} y2={16} />
                <line x1={5} y1={12} x2={9} y2={8} />
              </svg>
              <p>Reels</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-camera"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx={12} cy={13} r={3} />
            </svg>
          </div>
          <div className="reel__content">
            <div className="reel__desc">
              <div className="reel__user">
                <img
                  src="https://i.ibb.co/x36chgX/Untitled.png"
                  className="reel__avatar"
                />
                <p className="reel__username">aisyahnrlh</p>
                <button>Follow</button>
              </div>
              <p className="reel__caption">Trees, fogs, and mountains⛰️🌳</p>
              <p className="reel__audio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tallymark-3"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={8} y1={7} x2={8} y2={17} />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={16} y1={7} x2={16} y2={17} />
                </svg>
                AJR • The Good Part
              </p>
            </div>
            <div className="reel__options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <p className="reel__likes">1.307</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-circle"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-send"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={10} y1={14} x2={21} y2={3} />
                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots-vertical"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={12} cy={12} r={1} />
                <circle cx={12} cy={19} r={1} />
                <circle cx={12} cy={5} r={1} />
              </svg>
              <img
                src="https://i.scdn.co/image/ab67616d0000b2736227bea855e8e32fe0c4e81f"
                className="reel__audio-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleReelView;
