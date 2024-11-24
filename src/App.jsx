import { useEffect, useState } from "react";
import Hero from "./commponent/Hero";
import ParentClass from "./commponent/ParentClass";
import axios from "axios";

let loging = (status) => {
  if (status) {
    return <button>Loge OUt</button>;
  } else {
    return <button>Loging</button>;
  }
};

const App = () => {
  let mark = 80;
  let x = true;

  let array = ["dhaka", "mohammadpur", "Modhukhali", "Boalmari", "Faridpur"];

  let [inpu, Stateinpu] = useState(false);
  let [mainvalue, Statemainvalue] = useState(null);

  const inputHandel = (val) => {
    Statemainvalue(val.target.value);
    console.log(val.target.value);
  };
   const [data, setData] = useState([]);
   useEffect(()=>{
    axios.get("https://dummyjson.com/products?&limit=0").then((res)=>{
      setData(res.data.products)
      
      
    })
   })
   let [filterData,usefilterData]= useState([])
  
   const [filterdata,setfiltedata]=useState([]);
   const filters=()=>{
   let usefilterData = data.filter((item)=>{
  return item.title.includes({mainvalue});
   })

  
   
    
 }
 console.log(filterData);
 
   
    



  return (
    <section>
      <div>
        <p>
          {
            inpu ? <h3>{mainvalue}</h3>: null
          }
        </p>
        <input type="text" onChange={inputHandel} />
        <button onClick={filters}>click</button>
      </div>
    </section>
  );
};

export default App;
