import axios from "axios";
import { useState, useEffect}  from "react";
const Search=()=>
{
    const [input,setInput]=useState("");

    const [mydata,setMydata]=useState([]);
    const recordSearch=()=>
    {
        axios
        .get(`http://localhost:15000/books/?bookname=${input}`)
        .then((res)=>{setMydata(res.data)});
        console.log(mydata);
    }
//     var status;
//     if (mydata.length==0)
//     {
// status="NO RECORD FOUND!";
// console.log
//     }
    return(
<>
<h1 class="h1">search by name</h1><br /> <br />
<center>
Enter Name <input placeholder="search by name" class="input" type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />


<button class="button" class="menu" onClick={recordSearch}>Search Record</button>

{mydata.map((key)=><h3 class="bg"> book name=   {key.bookname} | author name=  {key.author}  |  publisher name= {key.publisher}</h3>)}


</center>
</>

        );

}
export default Search;