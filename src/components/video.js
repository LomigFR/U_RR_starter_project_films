import React, { Component } from "react";

const BASE_URL = "https://www.youtube.com/embed/";

const Video = ({ videoId }) => {
  /**
   * Afficher la vidéo au format 16/9 et responsive
   */
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`${BASE_URL}${videoId}`} />
    </div>
  );
};

export default Video;
