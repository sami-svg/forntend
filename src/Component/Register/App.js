import React from 'react';
import Logo from './Component/Logo/Logo';
import Navigation from './Component/Navigation/Navigation';
import ImageRecognition from './Component/ImageRecognition/ImageRecognition';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Register from './Component/Register/Register';
import SignIn from './Component/SignIn/SignIn';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey:'96f497dc1cf44a9c8466ad5b12a6391e'
});

class App extends React.Component {
  constructor(){
    super()
    this.state={
      isSignedIn:false,
      route:'',
      imgUrl:'',
      input:'',
      boxes:''
    } 
  }

     FaceDetection=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('userinput');
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width,height);
        return {
        leftCol   : clarifaiFace.left_col * width,
        topRow    : clarifaiFace.top_row * height,
        rightCol  : width - clarifaiFace.right_col * width,
        bottomRow : height - clarifaiFace.bottom_row * height,
      };
     }

onBox=(boxes)=>{
  this.setState({boxes})
}

onRouteChange=(route)=>{
    if(route ==="home"){
    this.setState({isSignedIn:true})
  }else {
     this.setState({isSignedIn:false})
  }
      this.setState({route:route});
}

onInputChange=(event)=>{
  this.setState({input:event.target.value})
}

onButtonChange=()=>{
  this.setState({imgUrl:this.state.input});

  app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=>{
      console.log(response);
      this.onBox(this.FaceDetection(response))
    })
     .catch(err=>console.log(err))
}

render(){
  const {route,isSignedIn,imgUrl,boxes}=this.state;
  return(
    <div className="App">
    <Navigation route={this.onRouteChange} isSignedIn={isSignedIn}/> 
        {
        route==='home'?
          <div>
               <Logo/>
               <ImageRecognition onButtonChange={this.onButtonChange} input={this.onInputChange}/>
               <FaceRecognition box={boxes} imgUrl={imgUrl}/>
            </div>:(route==='signout'? <SignIn route={this.onRouteChange}/>
              :  <Register route={this.onRouteChange}/>
           ) 
      }
    </div>
  );
}
}
export default App;











/*import React from 'react';
import Logo from './Component/Logo/Logo';
import Navigation from './Component/Navigation/Navigation';
import ImageRecognition from './Component/ImageRecognition/ImageRecognition';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Register from './Component/Register/Register';
import SignIn from './Component/SignIn/SignIn';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey:'96f497dc1cf44a9c8466ad5b12a6391e'
});

class App extends React.Component {
  constructor(){
    super()
    this.state={
      isSignedIn:false,
      route:'',
      imgUrl:'',
      input:''
    } 
  }

  FaceDetection=(data)=>{
    const facemeasure=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('userinput');
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width,height);
}

onRouteChange=(route)=>{
    if(route ==="home"){
    this.setState({isSignedIn:true})
  }else {
     this.setState({isSignedIn:false})
  }
      this.setState({route:route});
}

onInputChange=(event)=>{
  this.setState({input:event.target.value})
}

onButtonChange=()=>{
  this.setState({imgUrl:this.state.input});

  app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=>{
      console.log(response);
      this.FaceDetection(response)})
     .catch(err=>console.log(err))
}

render(){
  const {route,isSignedIn,imgUrl}=this.state;
  return(
    <div className="App">
    <Navigation route={this.onRouteChange} isSignedIn={isSignedIn}/> 
        {
        route==='home'?
          <div>
               <Logo/>
               <ImageRecognition onButtonChange={this.onButtonChange}
                    input={this.onInputChange}/>
               <FaceRecognition imgUrl={imgUrl}/>
               </div>:(route==='signout'? <SignIn route={this.onRouteChange}/>
                : <Register route={this.onRouteChange}/>
           ) 
      }
    </div>
  );
}
}
export default App;
*/





