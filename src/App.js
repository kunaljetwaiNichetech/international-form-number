import './App.css';
import { useState } from 'react';
import { InputField } from './components/FormVal';
import Formval2 from './components/Formval2';
import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import Display from './components/Display';
import { Context } from './components/COOntext';
import Tryingusecontext from './components/Tryingusecontext';
import Chcking from './components/chcking';

function App() {
  // const [Formdata, setFormdata] = useState({
  //     firstname: "",
  //     // middelename: "",
  //     // lastname: "",
  //   });
//     const [name, setName] = useState('');
//     const [error,seterror]=useState()
//     const [ffff,setffff]=useState({
//       f:'',
//       k:''
//     })
//   const handelchange = (e) => {
//     setName(e.target.value)    
//     const validation={}
//     if (name.length>=3){
//       validation.name=""
//     }else
//     {
//       validation.name="please enter minimum 3 char"
//     }
//     seterror(validation)

// };
// // const handelsubmit = (e) => {
// //   e.preventDefault();
// //   console.log(Formdata);
// // };
// console.log(name)
let [sendingdata,setsendingdata]=useState()
function det (pop)
{
  console.log("this is pop",pop)
  setsendingdata( pop)
}
  return (
    <div className="App">
     <h1>this is form</h1>
    {/* <div>
      <div>
      <label>firstname</label>
      <InputField type={"text"} value={name} name={ffff.k}  onChange={handelchange}/>
      </div>
      {error&& <span style={{color:"red"}} >{error.name}</span>}
        <div>
      <label>firstname</label>
      <InputField type={"text"}  name={ffff.f}  onChange={(e)=>setName(e.target.value)}/>
      </div>
        <div>
      <label>firstname</label>
      <InputField type={"text"}  onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
      </div>
    </div> */}

    <Router> 
      {/* <Context.Provider value={sendingdata}> */}
     
      <Routes>
        <Route path='/' element={<Formval2 InputField={InputField} det ={det}/>} />
        <Route path='/details' element={<Display/>} />
        <Route path='/cheack' element={<Tryingusecontext/>} />
      </Routes>
    {/* </Context.Provider> */}
    </Router>
        {/* <Formval2 InputField={InputField} /> */}
        {/* <Chcking/> */}
    </div>
  );
}

export default App;
