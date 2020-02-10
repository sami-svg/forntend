import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({imgUrl,boxes})=>{ 
  //console.log(boxes);

  return(
    <div className="center ma">
      <div className="mt2 absolute">
        <img id="userinput" src={imgUrl} alt="" width="500px" height="auto"/>
       {boxes.map(box=><div className="bounding-box"
          style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}/>) 
       }
    </div>
  </div>
   );
}
export default FaceRecognition

