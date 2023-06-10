import {Routes,Route, BrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Delete from "./Delete";
import Search from "./Search";
import Nopage from "./Nopage";
import Searchid from "./Searchid";
import Searchau from "./Searchau";
import Edit from "./Edit";
import Editrecord from "./Editrec";
import Store from "./Store";



const App=()=>
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} /> 
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display />} /> 
        <Route path="delete" element={<Delete />} /> 
        <Route path="search" element={<Search />} />
        <Route path="searchid" element={<Searchid />} /> 
        <Route path="author" element={<Searchau />} />
        <Route path="edit" element={<Edit />} />
        <Route path="/Editrec/:id" element={<Editrecord />} />
        <Route path="store" element={<Store />} />
        <Route path="" element={<Nopage />} />
        </Route>
 </Routes>
    
</BrowserRouter>
  );
}
export default App;