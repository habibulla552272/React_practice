import Header from "./Header"


let obj = {
    
    age: 21,
    work:'study'
}

function student ()  {
  alert("okay all right");
  

}


function Hero() {
  return (
    <div>

       
        <Header StudentFun={student}/>
      
    </div>
  )
}

export default Hero
