import {useState, useEffect} from 'react';
import axios from 'axios';
import "./style.css";
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const Display=()=>
{
    const[record, setRecord]=useState([]);
    const loaddata=()=>
    {
        axios
        .get("http://localhost:15000/books")
        .then((res)=>{setRecord(res.data)});
    }
    useEffect(()=>{
        loaddata()
    },[]);
    return(
    <>
    <h1 class="h1">Display Record</h1><br />
    {record.map((key)=>
        <>
        <table border="1" align="center" border="1" width="1300px" height="30px">
        <tr bgcolor="lightgray">
        <td width="300px" align="center">
        bookname = {key.bookname} </td><td width="300px" align="center"> author name = {key.author} </td><td width="300px" align="center"> publisher name = {key.publisher}
        </td>
        <td width="300px" align="center">  price = {key.price}
        </td>
        </tr>
        </table>
        <br />
         </>
        )}
    
    </>
    ); 
}
export default Display;