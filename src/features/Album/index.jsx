import React from "react";
import PropTypes from "prop-types";

import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Vì Mẹ Anh Bắt Chia Tay",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/4/6/3/546379491d8539c7c6d38189ae333d4a.jpg",
    },
    {
      id: 2,
      name: "Vì Mẹ Anh Bắt Chia Tay",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/4/6/3/546379491d8539c7c6d38189ae333d4a.jpg",
    },
    {
      id: 3,
      name: "Vì Mẹ Anh Bắt Chia Tay",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/4/6/3/546379491d8539c7c6d38189ae333d4a.jpg",
    },
  ];

  return (
    <div>
      <h3>Có thể bạn sẽ thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
