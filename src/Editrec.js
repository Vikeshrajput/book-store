import axios from "axios";
import { useState, useEffect}  from "react";
import {useParams} from "react-router-dom";
import React from "react";
const Editrecord=()=>
{
	let {id} = useParams();
	const [mydata, setmydata]=useState({
   bookname:"",
   author:"",
   publisher:""


	});
	const loaddata=()=>
	{
		axios
		.get(`http://localhost:15000/books/${id}`)
		.then((res)=>{setmydata(res.data)});
	}
	useEffect(()=>{
    loaddata();

	},[]);
	const handleinput=(e)=>
	{
      let name=e.target.name;
      let value=e.target.value;
      setmydata({...mydata, [name]:value});
      console.log(mydata);
	}
	const updatesave=()=>
	{
        axios
        .put(`http://localhost:15000/books/${id}`,mydata)
        .then((res)=>{
        alert("record updated");

        });
	}
	return(
      <>
      <center>
   <h1 class="h1"> edit book record</h1><br />
  book name <input class="input" type="text" name="bookname" value={mydata.bookname} onChange={handleinput} /><br /><br />
    book author <input class="input" type="text" name="author" value={mydata.author} onChange={handleinput} /><br /><br />
  book publisher <input type="text" class="input" name="publisher" value={mydata.publisher} onChange={handleinput} /><br /><br />
    book price <input type="text" class="input" name="price" value={mydata.price} onChange={handleinput} /><br /> <br />

<button onClick={updatesave}>update record </button>
</center>
      </>
		);
}
export default Editrecord;