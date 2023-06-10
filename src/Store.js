import {Outlet,Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import react from "react";
const Store=()=>
{
	const stars=Array(4).fill(0);
	const stars1=Array(5).fill(0);
	const stars2=Array(3).fill(0);
	const stars3=Array(5).fill(0);
	const stars4=Array(4).fill(0);
	const stars5=Array(2).fill(0);
	const stars6=Array(5).fill(0);
	const stars7=Array(4).fill(0);
	return(
		<>
  <div className="container">
  <div className="row">
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/41kCPF5KiDL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" width="200px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - Ana Huang</h5>
    <p class="card-text">Discover the addictive world of the Twisted series from TikTok sensation.</p>
    <a href="#" class="btn btn-primary">&#8377;89</a>
    <div>
    <div style={{color:"#ffa534"}}>
      {stars.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>

  </div>
  </div>
  </div>&nbsp;&nbsp;&nbsp;
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/41ffUVhmD0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" width="200px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - Ana Huang</h5>
    <p class="card-text">Discover the addictive world of the Twisted series from TikTok sensation.</p>
    <a href="https://www.amazon.in/TWISTED-LOVE-sensation-addictive-romance/dp/0349434271/ref=d_pd_sbs_sccl_3_13/257-4835765-0154667?pd_rd_w=RAMag&content-id=amzn1.sym.e2ce9e2f-6d12-4c08-abc6-a5b1e7e9208f&pf_rd_p=e2ce9e2f-6d12-4c08-abc6-a5b1e7e9208f&pf_rd_r=X5SZHPFNDZHX6PRS3BWP&pd_rd_wg=tWPhV&pd_rd_r=e05dca47-eaa1-4d0b-878d-167730ec13b8&pd_rd_i=0349434271&psc=1" class="btn btn-primary">&#8377;299</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars1.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>&nbsp;&nbsp;&nbsp;
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg" width="200px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - Collen Hoover</h5>
    <p class="card-text">Before It Ends with Us, it started with Atlas.</p>
    <a href="https://www.amazon.in/dp/1398518174/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-5&pf_rd_r=3MMT2F35H684SPK0X89N&pf_rd_t=101&pf_rd_p=a38cb5aa-fb7f-433c-a670-1a58b37fba41&pf_rd_i=976389031" class="btn btn-primary">&#8377;200</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars2.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>&nbsp;&nbsp;&nbsp;

  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/511ODwPR5TL._SX322_BO1,204,203,200_.jpg" width="200px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - Becca Ritchie</h5>
    <p class="card-text">Everyone knows the Hales. No one knows shy, quiet Willow Moore.</p>
    <a href="https://www.amazon.in/dp/1950165388/ref=sspa_dk_detail_4?psc=1&pd_rd_i=1950165388&pd_rd_w=hNMIq&content-id=amzn1.sym.2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_p=2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_r=9YMY6Z5E2SQZEY2SDSB3&pd_rd_wg=hVzUW&pd_rd_r=5c49405e-49a7-415d-8963-739e3f2b8415&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw" class="btn btn-primary">&#8377;1633</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars3.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>


  </div>
  </div><br /><br /><hr /><br />

   <div className="container">
  <div className="row">
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg" width="250px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - George Matthew Adams</h5>
    <p class="card-text">Do you often wonder whether you really have it in you to accomplish your goals</p>
    <a href="https://www.amazon.in/dp/9389931843/ref=sspa_dk_detail_1?psc=1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy" class="btn btn-primary">&#8377;96</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars4.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/51FOJCV2-AS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg" width="250px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - William Shakespeare</h5>
    <p class="card-text">Exiled by Duke Fredrick, who has seized her father’s throne, the witty.</p>
    <a href="https://www.amazon.in/dp/9387779610/ref=sspa_dk_detail_2?psc=1&pd_rd_i=9387779610&pd_rd_w=V8lJX&content-id=amzn1.sym.2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_p=2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_r=6QHNCJ9DCY8HQH9DM9QK&pd_rd_wg=Uc70P&pd_rd_r=11bfe6b1-8a44-4a4f-a792-fe7fd133b819&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw" class="btn btn-primary">&#8377;117</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars5.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/415RTYLijZS._SX460_BO1,204,203,200_.jpg" width="250px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - William Shakespeare</h5>
    <p class="card-text">son of a Montague, sees Juliet, daughter of a Capulet he instantly falls for her.</p>
    <a href="https://www.amazon.in/dp/9387779378/ref=sspa_dk_detail_1?psc=1&pd_rd_i=9387779378&pd_rd_w=XTabd&content-id=amzn1.sym.2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_p=2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_r=EJVHK8ND1G9C02YNNBD4&pd_rd_wg=mPi2Y&pd_rd_r=9406b112-26c1-4e86-86cc-74e1a9eb5025&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw" class="btn btn-primary">&#8377;250</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars6.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>
  <div className="col-md-3">
<div class="card">
  <img class="card-img-top" src="https://m.media-amazon.com/images/I/51z+9qXRNAS._SX258_BO1,204,203,200_.jpg" width="250px" height="270px;" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title" style={{color:"blue",  fontWeight:"bold"}}>Author - William Shakespeare</h5>
    <p class="card-text"> this edition comprises Romeo and Juliet, Hamlet, Julius Caesar, Macbeth.</p>
    <a href="https://www.amazon.in/dp/8194898897/ref=sspa_dk_detail_3?psc=1&pd_rd_i=8194898897&pd_rd_w=0s43w&content-id=amzn1.sym.2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_p=2d591cad-b72c-4edb-a913-c75b0cb961d6&pf_rd_r=HHY7HDH6PSKGV4VQ6Y7Y&pd_rd_wg=QIlOQ&pd_rd_r=db5b7617-1651-40c1-959f-06308cc17ce0&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw" class="btn btn-primary">&#8377;499</a>
        <div>
    <div style={{color:"#ffa534"}}>
      {stars7.map((_, index)=>
 {
	return(
	<FaStar key={index} />
	)
})}

    </div>
    </div>
  </div>
  </div>
  </div>


  </div>
  </div>

</>
		);
}
export default Store;