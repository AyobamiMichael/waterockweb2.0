import { React, useState, useEffect} from "react";
import './druglist.css';
//import { NavLink } from "react-router-dom";
//import { blue } from "@mui/material/colors";
import  searchresultimg from "../images/pharma2.jpg";
//import * as IoIcons from 'react-icons/io';

const AllDrugsList = (props) =>{

  const [alldrugsList, setDrugsList] = useState([]);

  useEffect(()=>{
    fetch('https://waterockapi.wegotam.com/viewalldrugs', {

    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data, "drugListData");
       // result = data.data.username
        setDrugsList(data);
       
    });

  }, [])

     //const destructedList = alldrugsList.map(({_id, drugname, mg, pricepercard, pricepercarton, pname})=>{
       //   _id = {_id},
         // drugname = {drugname}
         // mg = {mg},
         // pricepercard ={pricepercard},
          //pricepercarton = {pricepercarton},
          //pname = {pname}
     //})
      //console.log("DESTR", destructedList);

      let destructuredDrugList = alldrugsList.map((drug)=>({
        'id': drug._id,
        'drugname':drug.drugname,
        'pricepercard': drug.pricepercard,
        'pname': drug.pname,
        'mg': drug.mg,
        'expdate': drug.expdate,
        'phone': drug.phone,
        'paddress': drug.paddress 

      }));
     console.log('newlist:',destructuredDrugList);

  //create a new array by filtering the original array
  const filteredData = destructuredDrugList.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
       
      return el;
      
    }
    //return the item which contains the user input
    else {
        return el.drugname.toLowerCase().includes(props.input)
    }
})
  

return (
  <div className="searchresult" >
     
        {filteredData.map((item) => (
          <div className="resultbox" style={{backgroundImage: `url(${searchresultimg})`,
        }}>
           <p key={item.id} className="drugname">{item.drugname}</p>
           <p key="{item1}">{'NGN'+item.pricepercard} </p>
           <p key="{item2}">{item.pname}</p>
           <p key="{item3}">{item.mg}</p>
           <p key="{item4}">{"EXP DATE: "+item.expdate}</p>
           <p className="contacttitle" >Contact</p>
           <p key="{item5}" className="contactaddress">{item.paddress}</p>
           <p key="{item6}" className="contactphone">{item.phone}</p>
           </div>
       ))}
     
     </div>
)


}



export default AllDrugsList;