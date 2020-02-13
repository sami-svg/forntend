import React from 'react';

function Navigation({isSignedIn,route}) {
if(!isSignedIn){
	return (
    	<nav className="f3 mb6 mr4 pv2  white">
    		<p onClick={()=>route("signout")} className="ml3 fr no-underline hover-dark-green underline-hover pointer">SignIn</p>
    		<p onClick={()=>route("register")} className="fr pointer no-underline hover-dark-green underline-hover">Register</p>
    	</nav>
 	);
}
else{
	return (
    	<nav className="f3 mr4 pv2  white">
    		<p onClick={()=>route("signout")} className="ml3 fr hover-dark-green no-underline underline-hover pointer">SignOut</p>
    	</nav>
  		);	
	}
}
export default Navigation;

