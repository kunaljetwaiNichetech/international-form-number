import React from "react";

export default function Chcking() {
  const handelchange = (e) => {
    console.log(e.target.value);
  };
  const subbbb = (e) => {
    console.log("this is working");
  };
  return (
    <div>
      <div>
        <label>name</label>
        <input type="text" onChange={handelchange} />
        <button type="submit" onClick={subbbb}>
          submit
        </button>
      </div>
    </div>
  );
}
