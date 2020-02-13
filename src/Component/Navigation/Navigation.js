import React from 'react';

function Navigation({isSignedIn,route}) {
if(!isSignedIn){
	return (
    	<nav className="f3 mb6 mr4 pv2 black">
    		<p onClick={()=>route("signout")} className="ml3 fr no-underline hover-white underline-hover pointer">SignIn</p>
    		<p onClick={()=>route("register")} className="fr pointer no-underline hover-white underline-hover">Register</p>
    	</nav>
 	);
}
else{
	return (
    	<nav className="f3 mr4 pv2  black">
    		<p onClick={()=>route("signout")} className="ml3 fr hover-white no-underline underline-hover pointer">SignOut</p>
    	</nav>
  		);	
	}
}
export default Navigation;

