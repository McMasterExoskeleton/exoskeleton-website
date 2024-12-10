import React from "react";

function BackgroundVideo() {
  return (
    <div className="w-full h-screen object-cover">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hGSUYuB6uGI?si=Mw3yFqwjGdyxawyD&autoplay=1&controls=0&loop=1&playlist=hGSUYuB6uGI&modestbranding=1&mute=1&rel=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackgroundVideo;
