//import React, { Component } from 'react'
import Select from 'react-select';
import UserDetails from '../components/userdetails';
//import UserData from '../components/userdata';
import './registerdrug.css';
import Navbar from "../components/sidenavbar/Navbar";
import React, { useState, useEffect, useRef } from 'react';
import UserData from '../components/userdata';
import Timestamp from 'react-timestamp';
import Calendar from 'react-calendar';

 const RegisterProduct = (props) => {
       
    var result = '';
    var pharmaname ='';
    var pharmaaddress = '';
    var pharmaphone = '';
      

     const [drugname, setdrugName] = useState('')
     const[alternativedrugname, setalternativeName] = useState('')
     const[alternativedrugprice, setalternativedrugPrice] = useState('')
     const[alternativedrugmg, setalternativedrugMg] = useState('')

     const [mg, setMg] = useState('')
     const [pricepercard, setpriceperCard] = useState('')
     const [pricepercarton, setpriceperCarton] = useState('')
     const [priceperpack, setpriceperPack] = useState('')

     //const [quantity, setQuantity] = useState('')

     const [uname, setUname] = useState(result)
      
     const [druglist, setDrugList] = useState([])

     const [drugcategory,  setdrugCategory] = useState('')
    // const [others, setothers] = useState("")
    const[othersCategory, setOtherCategory] = useState("");

    // const [pname, setPharmaname] = useState(pharmaname);
    // const [paddress, setPharmaaddress] = useState(pharmaaddress);
    // const [phone, setPharmaphone] = useState(pharmaphone);


      // For multi pharmacies

     const [pharmacies, setpName] = useState([])
     const [singlepharmaName, setsinglePharmaName] = useState('')
     const [pharmaciesList, setPharmaciesList] = useState([])

     const [expdate, setDate] = useState(''); 
      const dateInputRef = useRef(null);
     const refinput = useRef();

      const [inputBox, setInputBox] = useState(false);
       
     useEffect(()=>{
     
      fetch('https://waterockapi.wegotam.com/multipharmaData',{

        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
         
        }),

      })
       .then((res) => res.json())
       .then((data) =>{
        //console.log(data.data);
         setpName(data.data);
         window.localStorage.setItem('pharmadata', JSON.stringify(data.data))           
       });

  }, [])

  
  useEffect(()=>{
    const data = JSON.parse(window.localStorage.getItem('pharmadata'));
    if(data){
      setPharmaciesList(data);   
    }
}, []);

      
let optionItems = pharmacies.map((pharma)=>({
  'value': pharma._id,
  'label': pharma.pname
}));

const resultpharma = pharmacies.filter((pharma)=>(
singlepharmaName === pharma.pname));
const data = resultpharma[0];
console.log(data);
 
 const pharmaNames = resultpharma.map((pharma)=>(pharma.pname)); 
 const pharmaAddress  = resultpharma.map((pharma)=>(pharma.paddress));
 const pharmaPhone = resultpharma.map((pharma)=>(pharma.phone));
 console.log(pharmaNames[0]);

 var pname = pharmaNames[0];
 var paddress = pharmaAddress[0];
 var phone = pharmaPhone[0];

  

  // For adding  pharmaID, pname into the drug collection
  /*
  useEffect(()=>{
    fetch("http://localhost:4000/pharmaData", {
  method: "POST",
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
    token: window.localStorage.getItem("token"),
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "pharmaData");
    pharmaname = data.data.pname;
     setPharmaname(pharmaname);
    pharmaaddress = data.data.paddress;
     setPharmaaddress(pharmaaddress);
     pharmaphone = data.data.phone
     setPharmaphone(pharmaphone); 
    
  });
 }, [])

*/

 // For adding uname into drug collection
     useEffect(()=>{
      fetch("https://waterockapi.wegotam.com/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      result = data.data.uname
      setUname(result);
    });
   }, [])
  
   
  
   const handleSubmit = (e) =>{
       e.preventDefault();
          
           const time = new Date().toUTCString().slice(0, 16);

          console.log(drugname, mg, uname, pricepercard, priceperpack, pricepercarton, pname, paddress, phone, alternativedrugname, alternativedrugprice, alternativedrugmg, time, drugcategory, expdate,  othersCategory);

         
          fetch("https://waterockapi.wegotam.com/registerdrug",{
             method: "POST",
             crossDomain: true,
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify({
              drugname,
              mg,
              uname,
              pricepercard,
              pricepercarton,
              pname, 
              paddress, 
              phone,
              alternativedrugname,
              alternativedrugprice,
              alternativedrugmg,
              time,
              drugcategory,
              expdate,
              othersCategory,
             
            }),
          })
          .then((res) => res.json())
          .then((data) => {
  
            console.log(data, "drugRegister");
            if (data.status === "ok") {
              alert("Drug successfully registered");
             // window.localStorage.setItem("token", data.data);
              //window.location.href = "./viewdrugs";

              setdrugName('');
              setalternativeName('');
              setalternativedrugPrice('');
              setalternativedrugMg('');
              setMg('');
              setpriceperCard('');
              setpriceperCarton('');
              setpriceperPack('');
              setOtherCategory('');
              setDate('');
            }
            else if(data.error === "Product Exists"){
               alert("Product Exists");
             }
           else if(data.error === "Pls Register Pharmacy"){
              alert("Pls Register Pharmacy");
            }
          
          });     
          
    }
     
    
    
      const actions = [{label: "5mg", value: 1},
      {label: "10mg", value: 2},
      {label: "20mg", value: 3},
      {label: "100mg", value: 4}, 
      {label: "200mg", value: 5},
    ];


      const alternativeactions = [{label: "50mg", value: 1},
      {label: "100mg", value: 2}, 
      {label: "200mg", value: 3},
      {label: '500mg', value: 4}
  ];

      const quantityactions = [{label: "10", value: 1},
      {label: "20", value: 2}, 
      {label: "30", value: 3},
      {label: "40", value: 4}
    ];

    const categoryItems = [{label: 'AntiMalaria', value: 1}, 
    {label: 'Pain Killers', value: 2},
    {label: 'Analgesics', value: 3},
    {label: 'Inhalants', value: 4},
    {label: 'Antibiotics', value: 5},
    {label: 'Haematinics', value: 6},
    {label: 'Antihypertensive', value: 7},
    {label: 'Others', value: 8}
  ]

      return (
        <> 
       <Navbar />
        <div className='registerdrugcontainer'>
        <form onSubmit={handleSubmit} className='registerdrugform'>
        <div className="mb-3">
        <Select options={optionItems}
        onChange={e =>{ 
          const val = e.label;
            setsinglePharmaName(val)
          }}
          placeholder='Select Pharmacy' 
          required='true' />
      </div>
      <div className="mb-3">
        <Select options={categoryItems}
        onChange={e =>{ 
          const val = e.label;
           if(val === 'Others'){
                  setInputBox(true)
                 // setdrugCategory(val) 
           }else{
              setInputBox(false);
               setdrugCategory(val);
           }
             
           
          }}
          placeholder='Product Category' 
          required='true' />
          {inputBox ? <input placeholder='Enter Other Category' 
               type="text"
               value={othersCategory}
                className="form-control"
                  onChange={e =>{ 
                const val = e.target.value;
              setOtherCategory(val.toLocaleLowerCase())
            }}
            required={true}
          />: null}
      </div>
        <div className="mb-3">
          <input
            type="text"
            value={drugname}
            className="form-control"
            placeholder="Product Name"
            onChange={e =>{ 
                const val = e.target.value;
              setdrugName(val.toLocaleLowerCase())
            }}
          required='true' />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={pricepercard}
            className="form-control"
            placeholder="Price per card"
            onChange={e => {
               const val = e.target.value;
              setpriceperCard(val)
            }}
            required='true' />
        </div>
        <div className="mb-3">
        <input
          type="text"
          value={pricepercarton}
          className="form-control"
          placeholder="Price per carton"
          onChange={e => {
             const val = e.target.value;
             setpriceperCarton(val)
          }}
          required='true' />
      </div>
      <div className="mb-3">
      <input
        type="text"
        value={priceperpack}
        className="form-control"
        placeholder="Price per pack"
        onChange={e => {
           const val = e.target.value;
            setpriceperPack(val)
        }}
        required='true' />
    </div>
        <div className="mb-3">
          <Select options={actions} className="form-control"
           onChange={e => {
            const val = e.label;
            setMg(val)
          }}
          placeholder='Miligramm'
          required='true' />   
        </div>
        <div>
          <h5 className='form-control'>Expiry Date</h5>
        <input className="form-control"
          type='date'
        
          refinput={refinput}
          onChange={ e=>{
              setDate(e.target.value);
          }}
        
          ref = {dateInputRef}
        />

        
        </div>
        <div className="mb-3">
        <input
          type="text"
          value={alternativedrugname}
          className="form-control"
          placeholder="Alternative Product"
          onChange={e =>{ 
              const val = e.target.value;
             setalternativeName(val.toLocaleLowerCase())
          }}
          required='true' />
      </div>
      <div className="mb-3">
      <input
        type="text"
         value={alternativedrugprice}
        className="form-control"
        placeholder="Alternative Product Price"
        onChange={e =>{ 
            const val = e.target.value;
             setalternativedrugPrice(val)
        }}
        required='true' />
    </div>
    <div className="mb-3">
    <Select options={alternativeactions} className="form-control"
     onChange={e => {
      const val = e.label;
       setalternativedrugMg(val)
    }}
    placeholder='Alternative Product Miligramm'
    required='true' />   
  </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>

      </>
      )
    }


export default RegisterProduct