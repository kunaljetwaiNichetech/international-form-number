import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
export default function Formval2({ InputField, det }) {
  const [val2, setval2] = useState();
  //this is for number format
  let n = 123456789;
  const f = new Intl.NumberFormat(n, {
    initialCountry: "us",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  console.log("this is format of phone number", f.format(n));

  ///////////////end format number
  /////////////////
  function vallliidate(e) {}
  //////////////////

  const [kunal, setkunal] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [email, Setemail] = useState("");
  const [error, seterror] = useState({});
  const history = useNavigate();
  const handelchange = (e) => {
    let { name, value } = e.target;
    let vaalues = e.target.value;

    if (name === "name") {
      const reg = /^[a-zA-Z]*$/;
      // if (vaalues.match(reg)) {
      if (vaalues.match(reg)) {
        setkunal({ ...kunal, [name]: value });
        seterror({
          name: "",
        });
      } else {
        seterror({
          name: "only charter are allowed",
        });
      }
    }
    // if (name === "lastname") {
    //   const regs = /^(1|)?(\d{3})(\d{3})(\d{4})$/;
    //   const nminput = e.target.value.replace(/\D/g, "");
    // nminput.match(regs);
    // let formatedNumber = "+1";
    // // if (nminput.length >= 2) {
    // //   formatedNumber += nminput[0];
    // // }
    // if (nminput.length >= 4) {
    //   formatedNumber += `(${nminput.substring(0, 3)}`;
    // }
    // if (nminput.length >= 7) {
    //   formatedNumber += `)${nminput.substring(3, 6)}`;
    // }
    // if (nminput.length >= 10) {
    //   formatedNumber += `-${nminput.substring(6, 10)}`;
    // }
    // let damo = Number(formatedNumber);
    // console.log(damo);

    // setkunal({ ...kunal, [name]: value });

    // if (vaalues.match(regs)) {
    // const newArray = vaalues.match(regs);
    // seterror({ mobile: "" });
    // let intlCountryCode = newArray[1] ? "+91" : "+1";

    // Resolving the above array we get
    // the international number
    //   let internationalNumber =
    //     intlCountryCode +
    //     " (" +
    //     newArray[2] +
    //     ") " +
    //     newArray[3] +
    //     "-" +
    //     newArray[4];
    //   setkunal({ ...kunal, [name]: internationalNumber });
    // } else {
    //   seterror({
    //     mobile: "only number  are allowed",
    //   });
    // }
    /////////////////////////////////////////
    // }

    ///////////////////////back same////////////////
    if (name === "lastname") {
      // const regs = /^(1|)?(\d{3})(\d{3})(\d{4})$/;
      // if (vaalues.match(regs)) {
      let p = e.target.value;
      let newnumber = "";
      let cleaned = ("" + p).replace(/\D/g, "");
      for (let i = 0; i < cleaned.length; i++) {
        if (i == 0) {
          newnumber = "+1 (";
        } else if (i == 3) {
          newnumber = newnumber + ") ";
        } else if (i == 6) {
          newnumber = newnumber + "-";
        }

        newnumber = newnumber + cleaned[i];
      }
      console.log(newnumber);
      setkunal({ ...kunal, [name]: newnumber });
      seterror({ mobile: "" });
    } else {
      seterror({
        mobile: "only charter are allowed",
      });
    }
    // }
    if (name === "email") {
      setkunal({ ...kunal, [name]: value.trim() });
      const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
      // const r = /^[a-zA-Z]*$/;
      if (!vaalues.match(r)) {
        console.log("hiii this is");
        seterror({ email: "email.is not valid" });
      } else {
        Setemail(e.target.value);
        seterror("");
      }
    }
    // debugger;
    // if (name === "email") {
    //   const { name, value } = e.target;
    //   setkunal({ ...kunal, [name]: value });
    //   const input = e.target.value;

    //   const r = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    //   if (r.test(input)) {
    //     // debugger;
    //     seterror({ email: "valid" });
    //     setkunal({ ...kunal, [name]: input });
    //   } else {
    //     seterror({ email: "please cheak email" });
    //   }
    //   console.log("this is input", input);
    // }
  };
  console.log("email is this", email);
  const handelsubmit = (e) => {
    e.preventDefault();
    const reg = /^[a-zA-Z]+$/;
    const regs = /^[0-9]*$/;
    const validation = {};

    if (kunal.name.length === 0) {
      validation.name = "name is required";
    }
    // if (!reg.test(kunal.name)) {
    //   validation.name = "please enter only char";
    // }
    if (kunal.lastname.length === 0) {
      validation.mobile = "mobile number is required";
    }
    // if (!reg.test(kunal.lastname)) {
    //   validation.mobile = "please enter only number";
    // }
    console.log("email", email);
    if (email.length === 0) {
      validation.namee = "email is required";
    }

    seterror(validation);
    console.log("", validation.error);

    // if (
    //   validation.name === "" &&
    //   validation.mobile === "" &&
    //   error.email === ""
    // ) {
    //   alert("done");
    // } else {
    //   debugger;
    //   alert("notnot");
    // }
    if (Object.keys(validation).length === 0) {
      console.log(error.email === undefined);
      if (error.email === undefined) {
        alert("the form submited");
        det(kunal);
        history("/details", { state: kunal });
      }
      // debugger;
    }

    // console.log("this is reges", reg.test(kunal.name));
    // console.log("errors", error);
  };

  // const validemail = (input) => {
  //   return /^[a-zA-z]*$/.test(input);
  // };

  /// trying email differently herer....
  // const handelchangeemail = (e) => {
  //   const r = /^[a-zA-z]*$/;

  // Setemail(e.target.value);
  // console.log("email", e.target.value);
  // let p = r.test(e.target.value);
  // console.log(p);
  // if (!p) {
  //   seterror({ email: "email.is not valid" });
  // } else {
  //   Setemail(e.target.value);
  //   seterror("");
  // }

  //   const valuu = validemail(e.target.value);
  //   setkunal(validemail(valuu));
  // };

  console.log(kunal);

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div>
          <label>name</label>
          <InputField
            type="text"
            // onKeyUp={onKeyUp}
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
            // onKeyUp2={onKeyUp2}
            value={kunal.lastname}
            name={"lastname"}
            maxLength={16}
          />
          {/* <input
            type="text"
            onKeyUp={keyyyyyy}
            value={val2}
            onChange={validationNumber}
          /> */}
        </div>
        {error && <span style={{ color: "red" }}>{error.mobile}</span>}
        <div>
          <label>email</label>
          <InputField
            type="text"
            onChange={handelchange}
            value={kunal.email}
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
