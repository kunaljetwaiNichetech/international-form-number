import './App.css';
import { useState } from 'react';
import { InputField } from './components/FormVal';
import Formval2 from './components/Formval2';

function App() {
  // const [Formdata, setFormdata] = useState({
  //     firstname: "",
  //     // middelename: "",
  //     // lastname: "",
  //   });
    const [name, setName] = useState('');
    const [error,seterror]=useState()
    const [ffff,setffff]=useState({
      f:'',
      k:''
    })
  const handelchange = (e) => {
    setName(e.target.value)    
    const validation={}
    if (name.length>=3){
      validation.name=""
    }else
    {
      validation.name="please enter minimum 3 char"
    }
    seterror(validation)

};
// const handelsubmit = (e) => {
//   e.preventDefault();
//   console.log(Formdata);
// };
console.log(name)
  return (
    <div className="App">
     <h1>this is form</h1>
    <div>
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
        <Formval2 InputField={InputField} />
      </div>
    </div>
    </div>
  );
}

export default App;
