import Hero from "./commponent/Hero";

let loging = (status) => {
  if (status) {
    return <button>Loge OUt</button>;
  } else {
    return <button>Loging</button>;
  }
};

const App = () => {
  let mark = 80;
  let x=true;

  let array = ["dhaka", "mohammadpur", "Modhukhali", "Boalmari", "Faridpur"];
  return (
    <>
      <h2
        style={{
          color: "yellow",
          backgroundColor: "black",
          width: "200px",
          textAlign: "center",
          padding: "10px 20px",
        }}
      >
        Habu
      </h2>
      {mark >= 80 ? <h2>Good student</h2> : <h2>Avarage Student</h2>}
      {/* immediately-invoked funtion */}
      {(() => {
        if (mark >= 80 && mark < 100) {
          return <h3>A+</h3>;
        } else if (mark > 70 && mark < 80) {
          return <h4>A</h4>;
        }
      })()}

      <ul>
        {array.map((item, index) => {
          return <li key={index.toString()}>{item}</li>;
        })}
      </ul>

      <h2>Loging Section</h2>
      {loging(false)}

          {/* && test */}

          {x && <button>LogOut</button>}

        {/* immediately invoked function  */}

        {(()=>{
          if(x){
            return <button>okay All right</button>
          }else{
            return <button>Your Value is false all right</button>
          }

        })()}

        <Hero />

    </>
  );
};

export default App;
