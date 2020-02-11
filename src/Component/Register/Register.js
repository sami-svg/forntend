import React from 'react';
//import './Regiter.css';

class Register extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:"",
			email:"",
			password:""
		}
	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value})
	}

	onEmailChange=(event)=>{
		this.setState({email:event.target.value})
	}
	onPasswordChange=(event)=>{
		this.setState({password:event.target.value})
	}

	onButtonSubmit=()=>{
		 fetch("https://floating-stream-26735.herokuapp.com/register",{
		 	method:'post',
		 	headers:{'Content-Type':'application/json'},
		 	body:JSON.stringify({
		 		name:this.state.name,
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
  		<article className="br2 pa3 center shadow-5 ba b--black-10 mv4 mh5 w-100 w-50-m w-30-l mw6">
		   <main className="black-80">
		  <div className="pa4">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
		        <input onChange={this.onNameChange}
		        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
		        	type="email" name="email-address"  id="email-address"/>
		      </div>

		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange={this.onEmailChange} 
		        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
		        	type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange={this.onPasswordChange}
		        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
		        	type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input onClick={this.onButtonSubmit} 
		      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		      	type="submit" value="Register"/>
		    </div>
		    </div>
		</main>	    
		</article>
  );
}
}
export default Register;






