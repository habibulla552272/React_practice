import { useRef } from "react";

const Header = (props) => {
  let myimg = useRef();
  function sumbitForm(e) {
    myimg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myimg.current.setAttribute("width", "200px");
    myimg.current.setAttribute("height", "200px");
  }
  let lastName,firstName =useRef();
  let change=()=>{
    let fName=firstName.value;
    let lName = lastName.value
    alert(`${fName} and ${lName}`);

  }

  return (
    <div>
      <img ref={myimg} src="https://placehold.co/600x400" alt="" />
      <button onClick={sumbitForm}>Click</button>

    <input ref={(a)=>firstName=a} type="text" />
    <input ref={(a)=>lastName=a} type="text" />
    <button onClick={change}>Change</button>
    </div>
  );
};

export default Header;
