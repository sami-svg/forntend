import React from 'react';
import './ImageRecognition.css';
function ImageRecognition({onButtonChange,input}) {
  return (
  		 <div className="tc">
	 		<p className="f4 white">{`This Magic Brain will detect Faces.Give it try... `}
			</p>
	    <div className="ImageRecognition f2 pa4 center">
	      <input onChange={input} className=" w-70" type="text"/>
	      <button onClick={onButtonChange} className="w-30 pointer black hover-white bg-gray">Detect</button>
	    </div>
    </div>  
  );
}

export default ImageRecognition;
