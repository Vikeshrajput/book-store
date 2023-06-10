import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Outlet,Link} from "react-router-dom";
import {Carousel} from 'react-responsive-carousel';
const Home=()=>{
return(
    <>
    <hr color="blue" />
    <center>
    <h3>'''A book reader is a person who loves to read books.<br />
You can read as much as you like and still not be a book reader.<br />
You can be a book reader just for one book.<br />
You can be a book reader for your entire life.<br />
However, you’re not a book reader if you don’t read.'''</h3>

<h3 class="homeheading">let's start your book reading journey with our website</h3></center><center><br /> 


    
    </center>


    <Carousel variant="dark">
      <Carousel>
        <img
          className="d-block w-100"
          src="book1.jpg"
          alt="First slide"
        />
        <Carousel>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel>
      </Carousel>
      <Carousel>
        <img
          className="d-block w-100" 
          src="book2.jpg" 
          alt="Second slide" />
        <Carousel>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel>
      </Carousel>
      <Carousel>
        <img
          className="d-block w-100"
          src="book3.jpg" 
          alt="Third slide"
        />
        <Carousel>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel>
      </Carousel>
    </Carousel>
    <center>
    <div class="div"><div>
<h3 class="virticall">www.bookstore.com</h3>
     <div> <img class="d-block w-100" src="b1.jpg" alt="First slide" class="responsive" /></div>
    </div>
  </div>
    <Link to="/rateus" class="rateus">Rate Us</Link></center>
      </>

);


}
export default Home;