import {useState} from "react";
import axios from "axios";

const Insert=()=>
{
    const [input,setInput]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.warn(input);
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios
        .post("http://localhost:15000/books",input)
        .then((res)=>{alert("Data Save!!!")});
        document.getElementById("ne").value="";
        document.getElementById("au").value="";
        document.getElementById("pb").value="";
        document.getElementById("pr").value="";
       
    }
    return(
        <>
        <center>
        <div class="shape"><h1 class="h1">Insert books Data</h1></div><br />
        </center>
        <form onSubmit={handleSubmit}>
        <center>
        Enter &nbsp; &nbsp; book &nbsp; Name: &nbsp;&nbsp;&nbsp;&nbsp;<input class="input" name="bookname" id="ne"
        value={input.bookname} onChange={handleInput} />
        < br/><br />
        Enter&nbsp; &nbsp; author&nbsp; name:&nbsp;&nbsp;&nbsp;&nbsp; <input class="input" name="author" id="au"
        value={input.author} onChange={handleInput} />
        < br/><br />
        Enter publisher name:&nbsp;&nbsp;&nbsp;&nbsp;<input class="input" name="publisher" id="pb"
        value={input.publisher} onChange={handleInput} />
        <br /><br />
        Enter &nbsp; book &nbsp; price &nbsp; :&nbsp;&nbsp;&nbsp;&nbsp; <input class="input" name="price" id="pr" 
        value={input.price} onChange={handleInput} />
        <br /><br />
        <input type="submit" class="menu" class="button" value="data save!" />
        </center>
        </form>
    </>
    
);
    
      }
export default Insert;