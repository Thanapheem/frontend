import React, { Component } from "react";
import {form,Button} from "react-bootstrap";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
class auctioncow extends Component{
    render(){
        return(
          <div><HeaderLogin/>
            <Navbar/>
            <form>
             
             
            <div className = "Row f1">
                <div className= "form-group">
                    <label for="CattleName">ชื่อโค</label><input type = "text" name ="CattleName"id ="ctn"className ="form-control is invalid"/>
                    
                </div> 
                <div className= "form-group">
                    <label for="IdCattle">หมายเลขประจำตัวสัตว์</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                </div> 
               
                <div className= "form-group">
                    <label for="Type">ประเภทโค</label>
                    <select className="form-control" id="type">
                    <option>1.โคหย่านม</option>
                    <option>2.โคแม่ลูกอ่อน</option>
                    </select>
                </div> 
                <div className= "form-group">
                    <label for="strain">สายพันธุ์โค</label><select className="form-control" id="stain">
                    <option>1.ชาลา เฮดชาลา</option>
                    <option>2.โนบรา</option>
                    </select>
                </div> 
                <div className= "form-group">
                    <label for="Bdate">วัน/เดือน/ปีเกิด</label><input type = "text" name ="birthdate"id ="bd"className ="form-control is invalid"/>
                </div> 
                <div className= "form-group">
                    <label for="gender">เพศ</label><select className="form-control" id="gender">
                    <option>1.เพศผู้</option>
                    <option>2.เพศเมีย</option>
                    </select>
                </div> 
                <div className= "form-group">
                    <label for="weight">น้ำหนัก</label><input type = "number" name ="weight"id ="weight"className ="form-control is invalid"/>
                </div> 
                <div className= "form-group">
                    <label for="Dadame">ชื่อพ่อพันธ์ุ</label><input type = "text" name ="Dadname"id ="Dn"className ="form-control is invalid"/>
                </div> 
                <div className= "form-group">
                    <label for="MomName">ชื่อแม่พันธ์ุ</label><input type = "text" name ="Momname"id ="Mn"className ="form-control is invalid"/>
                </div> 
                <div className= "form-group">
                    <label for="chest">ความยาวรอบอก</label><input type = "number" name ="chest"id ="chest"className ="form-control is invalid"/>
                </div> 
                <div className= "form-group">
                    <label for="height">ความสูง</label><input type = "number" name ="chest"id ="chest"className ="form-control is invalid"/>
                </div>
                <div className= "form-group">
                    <label for="bodylength">ความยาวลำตัว</label><input type = "number" name ="bdlength"id ="bdlength"className ="form-control is invalid"/>
                </div>            
                <div className= "form-group">
                    <label for="StartPrice">ราคาเริ่มต้น</label><input type = "number" name ="startprice"id ="startprice"className ="form-control is invalid"/>
                </div>
                <div className= "form-group">
                    <label for="Priceperbid">ราคาต่อบิด</label><input type = "number" name ="Priceperbid"id ="Priceperbid"className ="form-control is invalid"/>
                </div>
                <Button type="submit" className="btn btn-primary" column sm ={2}>บันทึก</Button>
                         <Button type="reset" className="btn btn-danger">ยกเลิก</Button>
                     
                
               
                 
            </div>
            
        </form>
       
      </div>
          
        );
    }
}
export default auctioncow;