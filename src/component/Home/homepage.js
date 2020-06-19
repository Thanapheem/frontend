import React, { Component } from "react";
//import firebase from "./../../backEnd/firebase/index";
//import { Button, Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from './../../Navbar';
import Footer from './../../Footer';
import {Button} from 'react-bootstrap';
import photo1 from "../Img/photo1.jpg";
import photo2 from "../Img/photo2.jpg";
import photo6 from "../Img/photo6.jpg";
import photo4 from "../Img/photo4.jpg";
import photo5 from "../Img/photo5.jpg";
import "./home.css";


//import { Button,Nav,NavDropdown,Navbar,ListGroup } from "react-bootstrap";
//import axios from "axios";
// หน้า login แล้ว
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      param: "show"
    };
  }

  

  componentDidMount() {
    //const user=firebase.database//อะไรสักอย่าง
    /*axios
      .get("http://localhost:4000/"+this.state.param)
      .then(res => {
        const users = res.data;
        this.setState({ user:users });
      })
      .then(res => {
        console.log(this.state.user);
      });*/
  }

  render() {
    return (
      <div className="container-fluid">
             <div className="row">
          <HeaderLogin />
          <NavbarLogin/>
          </div>
          <div className='row  'style={{backgroundColor:"White",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}> 
          <div className="col-6"> <div className="row container-fluid r2-c4 ">    รายการประมูลโคมีชีวิต
          <div className="dropdown pad">
          <div className="r2-c5">เลือกหมวดหมู่</div>
          <div className="dropdown-content">
            <a href="/listproduct/auction">รายการประมูลโคมีชีวิต</a>
            <a href="/listproduct/salecattle">รายการขายโคมีชีวิต</a>
            <a href="/listproduct/saleproduct">รายการขายผลิตภัณฑ์จากโค</a>
            <a href="/listproduct/accessories">รายการขายสินค้าเบ็ดเตล็ด</a>
          </div>
        </div></div> </div>
            <div className="col-6 text-right r2-c4"> รายการเสนอซื้อ</div>
        </div>
      

          
          <div className='row  'style={{backgroundColor:"#e6e6e6",height: "400px",marginLeft:"10%",marginRight:"10%"}}>  
               <div className="col-md-6"><div className="col-md "><img src={photo1} alt="photo1" className="img1-box box" ></img> </div></div>    
               <div className="col-md-6"  ><h3 class="card-title">ตลาดซื้อ ขายและประมูลโคออนไลน์ </h3><h4 class="card-title">Cattle Market and Auction Online</h4><p class="card-text">เจ้าแดงชาโรดลส์</p><p class="card-text">ราคา: 30000</p><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#">ดูการประมูล</a> </li></ul>
          </div></div>

          <div className='row ' style={{backgroundColor:"White", marginLeft:"10%",marginRight:"10%"}}>
          <div className=" r2-c4"> รายการเสนอซื้อ</div>
          </div> 

          <div className='row ' style={{backgroundColor:"#e6e6e6", marginLeft:"10%",marginRight:"10%"}}>
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo2} alt="photo2" className="img4-box" ></img><h5 class="card-title">เจ้าแดง : 30000 </h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> <Button variant="success">ประมูล</Button></div></div>    
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo6} alt="photo6" className="img5-box" ></img><h5 class="card-title">พายุ : 50000</h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> <Button variant="success">ประมูล</Button></div></div>
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo4} alt="photo4" className="img6-box" ></img><h5 class="card-title">มะพร้าว : 28000</h5> <p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="success">ประมูล</Button></div></div>    
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo5} alt="photo5" className="img7-box" ></img><h5 class="card-title">ขอน : 47000</h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="success">ประมูล</Button> </div></div>
          </div> 
             
            
       
                 
                <Footer/>
          </div>

          

    );
  }
}
export default Home;
/* */