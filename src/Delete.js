
import{useState, useEffect} from "react";
import axios from "axios";

const Delete=()=>
{
    const [mydata,setMydata]=useState([]);

    const loaddata=()=>
    {
        axios
        .get("http://localhost:15000/books")
        .then((res)=>{setMydata(res.data)});

    }
    useEffect (()=>{

        loaddata();
    },[]);

    const delRec=(id)=>
    {
        axios
        .delete(`http://localhost:15000/books/${id}`)
        .then((res)=>{alert("Record Deleted") });
        // console.log(id);
        loaddata();
    }


    return(
           <>
    <h1 class="h1">Delete Record</h1><br />
    {mydata.map((key)=>
        <>
        <table border="1" align="center" border="1" width="1400px" height="30px">
        <tr bgcolor="lightgray">
        <td width="300px" align="center">
        bookname = {key.bookname} </td><td width="300px" align="center"> author name = {key.author} </td><td width="300px" align="center"> publisher name = {key.publisher}
        </td>
        <td width="300px" align="center">  price = {key.price}
        </td>
        <td width="110px">
        <button class="button" class="menu" onClick={()=>{delRec(key.id)}}>Delete Record</button>
        </td>
        </tr>
        </table>
         <br />
</>

        )}
    </>
    
    );
}
export default Delete;


