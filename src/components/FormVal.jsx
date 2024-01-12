const InputField = ({
  maxLength,
  onInput,
  onKeyUp,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        onKeyUp={onKeyUp}
        value={value}
        onChange={onChange}
        onInput={onInput}
        maxLength={maxLength}
      />
    </div>
  );
};
export { InputField };

// export default function FormVal() {
//   //   const [Formdata, setFormdata] = useState({
//   //     firstname: "",
//   //     // middelename: "",
//   //     // lastname: "",
//   //   });
//   const lala = document.getElementById("fa");
//   console.log(lala);
// const handelchange = (e) => {
//   const { name, value } = e.target;
//   setFormdata({ ...Formdata, [name]: value });
// };
// const handelsubmit = (e) => {
//   e.preventDefault();
//   console.log(Formdata);
// };
//   return (
//     <div>
//       <h1>this is form validation</h1>
//       <input id="fa" type="text" />
//       {/* <form onSubmit={handelsubmit}>
//         <div>
//           <label id="f">Firstname</label>
//           <input
//             type="text"
//             name="firstname"
//             id="f"
//             value={Formdata.firstname}
//             onChange={handelchange}
//           />
//         </div>
//         <button type="submit">submit</button>
//       </form> */}
//     </div>
//   );
// }
// export { lala };
