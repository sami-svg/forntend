import React from 'react';
//import './SignIn.css';
class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""
		}
	}

	onEmailChange=(event)=>{
		this.setState({email:event.target.value})
	}
		onPasswordChange=(event)=>{
		this.setState({password:event.target.value})
	}

	onButtonSubmit=()=>{
		 fetch("https://floating-stream-26735.herokuapp.com/signin",{
		 	method:'post',
		 	headers:{'Content-Type':'application/json'},
		 	body:JSON.stringify({
		 		email:this.state.email,
		 		password:this.state.password
		 	})
		 })
		 .then(response=>response.json())
		 .then(data=>{
		 	if(data.id){
		 		//console.log(data)
		 		this.props.loaduser(data)
		 		this.props.route("home")
		 	}
		 })
		 .catch(err=>console.log(err))
	}


render(){
  return (	   
  		<article className=" br2 center shadow-1-l ba white b--black-10 mv4 w-100 w-50-m w-30-l mw6">
		   <main className="pa4  black-80">
		  <div className="measure 0-10">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange={this.onEmailChange} 
		        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange={this.onPasswordChange}
		        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input onClick={this.onButtonSubmit}
		   	   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
		    </div>
		    </div>
		</main>	    
		</article>
  );
}
}
export default SignIn;





