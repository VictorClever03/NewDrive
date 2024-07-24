import path from "path";
import React from "react";


export function VideoPlayer(props: {srcvideo:string}){
    return(
        <div>
      <video width="600" controls>
        <source src={props.srcvideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
    )
}