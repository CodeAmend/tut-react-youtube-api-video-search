import React from 'react';

// onVideoSelect is a function from App to setState
const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (

    <li
      // onClick uses a function sent from App and returns the video reference
      onClick={() => onVideoSelect(video)}
      className="list-group-item">

      <div className="video-list media">
        <div className="media-left">
          <div className="media-object">
            <img src={imageUrl} />
          </div>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videoTitle}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
