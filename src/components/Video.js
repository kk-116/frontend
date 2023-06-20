import React from 'react';

const Video = () => {
  return (
    <div>
      <video width="640" height="480" controls>
        <source src="./assets/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
