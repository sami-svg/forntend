import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({imgUrl,boxes}) {

  console.log(boxes);
  return (
   <div className="center mv2">
	    <div className="absolute">
   			<img id="userinput"
            className="" 
     			  src={imgUrl}
     				width="500px"
            height="auto" 
            alt=""
   			/>
         {boxes.map((box,i) => {
          return (
            <div
              key={box.topRow}
              className='bounding-box'
              style={{ top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol }}
            />
          );
        })}
      </div> 
    </div>
  );
}
export default FaceRecognition;