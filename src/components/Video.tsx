import React from 'react';

const Video = ({
  video,
  showOverlay,
  overlayStyle,
}: {
  video: string;
  showOverlay?: boolean;
  overlayStyle?: {};
}) => {
  return (
    <div className="video absolute left-0 top-0 min-w-full min-h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="w-full h-screen object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showOverlay && (
        <div
          className="video-overlay absolute left-0 top-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #131700CC, #131700)',
            ...overlayStyle,
          }}
        />
      )}
    </div>
  );
};

export default Video;
