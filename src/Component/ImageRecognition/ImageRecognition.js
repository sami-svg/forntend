import React from 'react';
import './ImageRecognition.css';
function ImageRecognition({onButtonChange,input}) {
  return (

  		 <div className="tc">
		 		<p className="f4 white">{`This Magic Brain will detect Faces.Give it try... `}
				</p>
				<div className="center">
			    <div className="ImageRecognition br3 pa4 center shadow-5">
			      <input onChange={input} className="center f4 pa2 w-70" type="text"/>
			      <button onClick={onButtonChange} className="w-30 pointer link black dib hover-white bg-gray">Detect</button>
			    </div>
   		 	</div>
   		 </div>
  );
}

export default ImageRecognition;
