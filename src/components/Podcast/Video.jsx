
import React from "react";
import PropTypes from "prop-types";

const Video = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="750"
      height="470"
      src={`https://www.youtube.com/embed/${embedId}`}
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      // title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video;