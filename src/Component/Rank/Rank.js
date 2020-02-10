import React from 'react';

function Rank({name,entries}) {
	//console.log(name);
  return (
    <div className="yellow Rank black tc">
	 		{`${name} , Your current entry count is...`}
	 		<div>{entries}</div>
    </div>
  );
}

export default Rank;
