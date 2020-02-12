import React from 'react';
import './ImageRecognition.css';
function ImageRecognition({onButtonChange,input}) {
  return (

  		 <div className="tc center">
		 		<p className="f4 white">{`This Magic Brain will detect Faces.Give it try... `}
				</p>
			    <div className="ImageRecognition f2 pa4 center shadow-5">
			      <input onChange={input} className="center  w-70" type="text"/>
			      <button onClick={onButtonChange} className="w-30 pointer black dib hover-white bg-gray">Detect</button>
			    </div>
   		 </div>
  );
}

export default ImageRecognition;
