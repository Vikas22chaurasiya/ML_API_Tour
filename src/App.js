require('dotenv').config()
import './App.css';
import Axios from 'axios';
import { useState,useEffect } from 'react';



function App() {
  const [Dest,setDest] = useState("")
  const [Price,setPrice] = useState()
  const [Text,setText] = useState("Hello")

  

function UpdateDest(event){

  const Destination=event.target.value;
  setDest(Destination);


}

function UpdatePrice(event){

  const Price = event.target.value
  setPrice(Price)
  
}


  function handleSubmit(e){
    const link = `https://zennyrox.pythonanywhere.com/request/?destination=${Dest}&price=${Price}`

    e.preventDefault()
    Axios.get(link).then(res=> {console.log(res)
    setText(res.data.result)})
    


  
  }


  return (
    <div className="App">

<div className="form-container" >
<h1> {Dest} {Price}</h1>
        <form id="myForm" onSubmit={(e)=>handleSubmit(e)}>

            <label>Select a City:</label>
            <select  name="City" 
                    value={Dest}
                    onChange={(e)=>UpdateDest(e)} >
                    <option value="select">select city</option>
                <option value="mumbai">Mumbai</option>
                 <option value="delhi">Delhi</option>
                 <option value="agra">Agra</option>
                 <option value="bangalore">Bangalore</option>
                 <option value="chennai">Chennai</option>
                 <option value="jaipur">Jaipur</option>
                 <option value="udaipur">Udaipur</option>
                 <option value="kochi">Kochi</option>
            </select>

          
            <label>Enter Price:</label>
            <input name="price" placeholder="Enter Price" onChange={(e)=>UpdatePrice(e)} value={Price}/>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <label>Data:</label>

        <div>
        <h1>
        {Text}
        </h1>
        
          
        </div>
        
    </div>
    </div>
    
  );
}

export default App;
