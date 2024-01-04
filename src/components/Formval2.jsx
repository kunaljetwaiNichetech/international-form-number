import { useState } from "react";
import React from "react";
import Display from "./Display";

export default function Formval2({ InputField }) {
  const [kunal, setkunal] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [email, Setemail] = useState("");
  const [error, seterror] = useState({});
  const handelchange = (e) => {
    const { name, value } = e.target;
    const vaalues = e.target.value;
    if (name === "name") {
      const reg = /^[a-zA-Z]+$/;
      if (vaalues.match(reg)) {
        setkunal({ ...kunal, [name]: value });
      }
    }
    if (name === "lastname") {
      const regs = /^[0-9]+$/;
      if (vaalues.match(regs)) {
        setkunal({ ...kunal, [name]: value });
      }
    }
    // debugger;
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    const reg = /^[a-zA-Z]+$/;
    const validation = {};

    if (kunal.name.length === 0) {
      validation.name = "name is required";
    }
    if (!reg.test(kunal.name)) {
      validation.name = "please enter only char";
    }
    if (kunal.lastname.length === 0) {
      validation.mobile = "mobile number is required";
    }
    // if (!reg.test(kunal.lastname)) {
    //   validation.mobile = "please enter only char";
    // }
    if (kunal.email.length === 0) {
      validation.error = "email is required";
    }

    seterror(validation);

    // if (validation.name == "" && validation.mobile == "") {
    //   alert("done");
    // } else {
    //   alert("notnot");
    // }
    if (Object.keys(validation).length === 0) {
      alert("the form submited");
    }
    console.log("this is reges", reg.test(kunal.name));
    console.log("errors", error);
  };
  /// for second input
  // function onKeyUp2(e) {
  //   console.log(e.target.value);
  //   const reg = /^[a-zA-Z]+$/;

  //   if (!reg.test(e.target.value)) {
  //     seterror({ mobile: "only char are allowed" });
  //   } else {
  //     seterror({ mobile: "" });
  //   }
  // }
  function onKeyUp(e) {
    const reg = /^[a-zA-Z]+$/;
    if (!reg.test(e.target.value)) {
      seterror({ name: "only char are allowed" });
    } else {
      seterror({ name: "" });
    }
  }
  const validemail = (input) => {
    const r = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    return r.test(input);
  };
  /// trying email differently herer....
  const handelchangeemail = (e) => {
    const inputval = e.target.value;
    Setemail(inputval);
    const valuu = validemail(inputval);
    Setemail(valuu);
  };

  console.log(kunal);
  console.log(email);
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div>
          <label>name</label>
          <InputField
            type="text"
            onKeyUp={onKeyUp}
            onChange={handelchange}
            value={kunal.name}
            name={"name"}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.name}</span>}
        <div>
          <label>Number</label>
          <InputField
            type="text"
            onChange={handelchange}
            value={kunal.lastname}
            name={"lastname"}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.mobile}</span>}
        <div>
          <label>email</label>
          <InputField
            type="text"
            onChange={handelchangeemail}
            value={email}
            name={"email"}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.email}</span>}
        <div>
          <button type=" submit">submit</button>
        </div>
      </form>
    </div>
  );
}
