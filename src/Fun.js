import React,{useEffect,useState} from 'react'
function Fun(props){
const [seconds, setSeconds] = useState(0);

  useEffect(() => {
   alert("ok")
  }, []);

    return(<h1>hi User {props.cs} {seconds}</h1>)
}
export default Fun;