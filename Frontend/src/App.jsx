import {useEffect,useState} from "react";
import api from "./api/api";


function App(){


const [message,setMessage]=useState("");



useEffect(()=>{


api.get("/")
.then((res)=>{

    setMessage(res.data.message);

})
.catch((err)=>{

    console.log(err);

});


},[]);



return(

<div>

<h1>
{message}
</h1>


</div>

)


}


export default App;