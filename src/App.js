import React from 'react';
import Logo from './Component/Logo/Logo';
import Navigation from './Component/Navigation/Navigation';
import ImageRecognition from './Component/ImageRecognition/ImageRecognition';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Register from './Component/Register/Register';
import SignIn from './Component/SignIn/SignIn';
import Rank from './Component/Rank/Rank';
//import Clarifai from 'clarifai';
/*const app = new Clarifai.App({
 apiKey:'96f497dc1cf44a9c8466ad5b12a6391e'
});*/

const initialState={
isSignedIn:false,
      route:'',
      imgUrl:'',
      input:'',
      boxes:[],
      user:{
          id:"",
          name:"",
          email:"",
          entries:0,
          joined:new Date()
      }
    } 


class App extends React.Component {
  constructor(){
    super()
    this.state=initialState;
     
  }
  /*  componentDidMount(){
      fetch("http://localhost:3000")
      .then(response=>response.json())
      .then(user=>console.log(user))
      .catch(err=>console.log(err))
    }*/

    loaduser=(data)=>{
      this.setState({user:{
          id:data.id,
          name:data.name,
          email:data.email,
          entries:0,
          joined:new Date()
        }
      }
    )
  }

     FaceDetection=(data)=>{
    //const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
        const image=document.getElementById('userinput');
        const width=Number(image.width);
        const height=Number(image.height);
       // console.log(width,height);
       return data.outputs[0].data.regions.map(face=>{
          const clarifaiFace=face.region_info.bounding_box;
             return {
            leftCol   : clarifaiFace.left_col * width,
            topRow    : clarifaiFace.top_row * height,
            rightCol  : width - clarifaiFace.right_col * width,
            bottomRow : height - clarifaiFace.bottom_row * height,
          };
        })
      }

onBox=(boxes)=>{
  this.setState({boxes})
}

onRouteChange=(route)=>{
    if(route ==="home"){
    this.setState({isSignedIn:true})
  }else {
     this.setState(initialState)
  }
      this.setState({route:route});
}

onInputChange=(event)=>{
  this.setState({input:event.target.value})
}

onButtonChange=()=>{
  this.setState({imgUrl:this.state.input});

        fetch("https://floating-stream-26735.herokuapp.com/imageurl",{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
          input:this.state.input
      })
     })
      .then(response=>response.json())
  //app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=>{
       fetch("https://floating-stream-26735.herokuapp.com/images",{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
          id:this.state.user.id
      })
     })
       .then(response=>response.json())
       .then(count=>{
        this.setState(Object.assign(this.state.user,{entries:count}))  })
       .catch(err=> console.log("err"))

      //console.log(response);
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
               <Rank name={this.state.user.name} entries={this.state.user.entries}/>
               <ImageRecognition onButtonChange={this.onButtonChange} input={this.onInputChange}/>
               <FaceRecognition boxes={boxes} imgUrl={imgUrl}/>
            </div>:(route==='signout'? <SignIn loaduser={this.loaduser} route={this.onRouteChange}/>
              :  <Register loaduser={this.loaduser} route={this.onRouteChange}/>
         ) 
      }
    </div>
  );
 }
}
export default App;
