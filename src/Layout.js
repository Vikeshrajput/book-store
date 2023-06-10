import {Outlet,Link} from "react-router-dom";

const Layout=()=>{


    return(
        <>
  
        <center>
        <div class="nav" style={{backgroundImage:"url(/nav.jpg)"}}>

         <Link to="/" class="menu">&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;</Link>

         <Link to="store" class="menu">&nbsp;&nbsp;&nbsp;book store&nbsp;&nbsp;&nbsp;</Link>
       
        <Link to="insert" class="menu">&nbsp;&nbsp;&nbsp;Insert book&nbsp;&nbsp;&nbsp;</Link>
        
        <Link to="display" class="menu">&nbsp;&nbsp;&nbsp;Display books&nbsp;&nbsp;&nbsp;</Link>
       
        <Link to="delete" class="menu">&nbsp;&nbsp;&nbsp;Delete book&nbsp;&nbsp;&nbsp;</Link>

        <Link to="edit" class="menu">&nbsp;&nbsp;&nbsp;Edit record&nbsp;&nbsp;&nbsp;</Link>

         <div class="dropdown">
        <Link to="search" class="menu">&nbsp;&nbsp;&nbsp;Search book&nbsp;&nbsp;&nbsp;</Link>

         <div class="dropdown-content">

        <Link to="search" class="menu">&nbsp;&nbsp;&nbsp;by name&nbsp;&nbsp;&nbsp;</Link><br />
        
        <Link to="searchid" class="menu">&nbsp;&nbsp;&nbsp;by id&nbsp;&nbsp;&nbsp;</Link> <br/>
        
        <Link to="author" class="menu">&nbsp;&nbsp;&nbsp;by author&nbsp;&nbsp;&nbsp;</Link>
        </div>

        </div>

        </div>

        </center>
    
        
       <hr color="blue" />
       <Outlet />
       <hr />
       <div class="para">www.bookstore.com &copy; all right reserved<i class="fa fa-facebook" class="fai"></i>
     <i class="fa fa-youtube" class="fai"></i>
     <i class="fa fa-instagram" class="fai"></i></div> 

        
        </>



    );
}
export default Layout;