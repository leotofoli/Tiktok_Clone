import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@apenas_um_teste</h3>
        <p>Descrição do video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da musica</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter_record"
        alt="Imagem de um vinil girando"
        //src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png"
        src="https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/18784.png"
      />
    </div>
  );
}

export default VideoFooter;
