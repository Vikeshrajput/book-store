import axios from "axios";
import { useState, useEffect}  from "react";
const Search=()=>
{
    const [input,setInput]=useState("");

    const [mydata,setMydata]=useState([]);
    const recordSearch=()=>
    {
        axios
        .get(`http://localhost:15000/books/?id=${input}`)
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
<h1 class="h1">search by id</h1><br /> <br />
<center>
Enter Name <input class="input" type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="search by id" />
&nbsp;&nbsp;&nbsp;&nbsp;

<button onClick={recordSearch} class="button" class="menu">Search Record</button>
<br />{mydata.map((key)=><h3 class="bg"> {key.bookname} {key.author} {key.publisher}</h3>)}<br />
<center>
<h3> With the introduction of the Amazon Bookstore last year, it’s now easier than ever to search for books by name.<br /><br />
In the past, you needed to rely on a search engine like Google to find the book you wanted.<br /> <br />
But now, I made it easier for you to search for books by name. <br /><br />
Now you can simply type in a book name and you can find the exact book you want.<br /> <br />
The site will even help you to narrow down your search</h3><br /><br />
</center>
    </center>



</>

        );

}
export default Search;