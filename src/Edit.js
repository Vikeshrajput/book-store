import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Edit=()=>
{
	const [mydata, setmydata]=useState([]);
	const Loaddata=()=>
	{
		axios
		.get("http://localhost:15000/books")
		.then((res)=>{setmydata(res.data)});
	}
	useEffect(()=>{
     Loaddata()


	},[]);
	return(
		<>
		<h1 class="h1" align="center"> edit books records</h1><hr />
		{mydata.map((key)=>
		<>
     <table border="1" align="center" border="1" width="1350px" height="30px">
        <tr bgcolor="lightgray">
        <td width="300px" align="center">
        bookname = {key.bookname} </td><td width="300px" align="center"> author name = {key.author} </td><td width="300px" align="center"> publisher name = {key.publisher}
        </td>
        <td width="300px" align="center">  price = {key.price} </td><td>&nbsp;&nbsp;&nbsp;&nbsp;
        
      <Link to={`/Editrec/${key.id}`} class="menu">  Edit record </Link>
      </td>
        </tr>
        </table>
        <br />
        </>
		)}
		</>
		);
}
export default Edit;