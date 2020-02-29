import React from 'react';
import Tilt from 'react-tilt';
import logo from './brain-min.gif';
//import logo from './logo.png';

function Logo() {
  return (
    <div className="ml5 mt4  Logo">
   		<Tilt className="Tilt bw2 shadow-5" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
		 <div className="Tilt-inner"><img src={logo} alt=""/> </div>
		</Tilt>
    </div>
  );
}
export default Logo;