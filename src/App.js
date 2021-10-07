
import './App.css';

import image from "./Photo.jpg" 



function App() {
  return (
    <div style={{ border:'solid 1px black'}} className="App">
       <h1 style={{ color:"blue", height:"360"}}  className="titlered">Earth Sciences</h1>
       <img style={{width:"360", height:"360"}} src="/assest/AA.jpg" alt="imagefrom public" />
       <br/>
       <img style={{width:"10", height:"10"}} src={image} alt ='imagefrom src' />
        <br/>
       <video style={{width:800,height:800}} controls>
      <source src="/assest/video.mp4" type="video/mp4" ></source>
     </video>  
   </div>
  );
}

export default App;