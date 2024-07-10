//import React, { Component } from "react";
//import DataGrid from 'react-data-grid';
import "./viewdrugs.css";
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import Logoutuser from "../components/logout/logout";
import Navbar from "../components/sidenavbar/Navbar";
//import AddProduct from "../components/addproduct";
//import image from '../images/pharmacology.jpg';
import UserDetails from "../components/userdetails";
import UserData from "../components/userdata";
import ls from 'local-storage';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ViewDialog from "../components/modificatenavbar/Modificatenavbar";
//import { DeleteIcon } from '@mui/icons-material';
import { MdDelete } from 'react-icons/md';
import { IconContext } from "react-icons";
import { LogoutSharp } from "@mui/icons-material";
import { FaEdit, FaTrash } from 'react-icons/fa';




const ViewDrugs =() =>{

 var listOfDrugsSelected = [];
const columns = [
  
  { field: '_id', headerName: 'ID', width: 200, editable: false},
  { field: 'drugname', headerName: 'Product Name', width: 200, editable: true},
  { field: 'pname', headerName: 'Pharmacy', width: 200 },
  { field: 'mg', headerName: 'Mg', width: 100, editable: false},
  { field: 'pricepercard', headerName: 'Price', width: 100, editable: true},
  { field: 'drugcategory', headerName: 'Product Category', width: 200 },
  { field: 'expdate', headerName: 'Expiry Date', width: 200 },
  { field: 'othersCategory', headerName: 'Other Category', width: 200 },
  {field: 'actions', headerName: "Actions", width: 200, renderCell:(params)=>{return(
    <IconContext.Provider value={{ color: "blue", size:'35px', className: "global-class-name" }}>
    <MdDelete
    onClick={(e) => {onButtonClick(e, params.row);
          // handleClickToOpen();
         // HandleRows();
         // handleDrugDelete();
         
    }}
      variant="outlined"
   
  
    >
    </MdDelete>
    </IconContext.Provider>
   );}}
  
]



const [open, setOpen] = React.useState(false);
//console.log(open);

const handleClickToOpen = () =>{
   setOpen(true);
}
const handleClickToCancel = () =>{
   setOpen(false);
}
const handleClickToDelete = () =>{
  setOpen(false);
}  

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    setClickedRow(row);
   
    return(  
    <Dialog open={open} onClose={handleClickToCancel}>
        <DialogTitle>{"How are you?"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to delete ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClickToDelete} color="primary" autoFocus>
       Delete
      </Button>
    </DialogActions>
    
  </Dialog>

    )
      
  }
  const [clickedRow, setClickedRow] = useState([]);
  console.log(clickedRow['_id']);

  const [tableData, setTableData] = useState([]);

  const [rows, setRows] = useState([]);
  const [deletedDrugId, setDeletedDrugs] = useState();
 // console.log(deletedDrugId);

  useEffect(() => {
     
    fetch("https://waterockapi.wegotam.com/viewalldrugs", {
      method: 'POST',
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
     .then((data) => data.json())
     .then((data) => {
      setTableData(data.data)
            
         window.localStorage.setItem('data', JSON.stringify(data.data))
         //window.location.href = "./userdetails"
     })
           
  }, [])
  
 //  console.log(tableData)
  
  
   useEffect(()=>{
       const data = JSON.parse(window.localStorage.getItem('data'));
       if(data){
          setTableData(data);
       }
   }, []);
    


   const changeColorRow = {
    background: (data) => {
      var response = null;
      if (data.id < 3) {
        response = '#6a822fbb'
      } else if(data.id > 3) {
        response = '#222b'
      }
      return response;
    },
  };




  const [id, setDrugId] = useState([]);
  const [drugname, setDrugName] = useState([]);
  const [mg, setDrugMg] = useState([]);
  const [price, setDrugPrice] = useState([]);
  const [time, setDrugTime] = useState([]);
  
  
  
  var updatedRow;

  const HandleRows = (newRow) =>{
    
   
      updatedRow = { ...newRow, isNew: false };
   console.log(updatedRow, "updatedRow");
  
   //anewList.push(updatedRow);
   //console.log(anewList);
   const {_id: drugId, pricepercard, drugname,  drugcategory, expdate,
    mg, time
  } = updatedRow

   console.log(drugId);
   console.log(drugname);
   console.log(pricepercard);

  
   
   setDrugId(drugId);
   setDrugPrice(pricepercard);
   setDrugName(drugname);
   setDrugMg(mg);
   setDrugTime(time);


        //handle send data to api
         return updatedRow;

  }

  const HandleUpdate = () =>{
     
    // console.log(drugname);
   // const newId = updatedRow.drugId;

   // if(newId === undefined){
   //   alert("Product Not updated");
    // }
  
     fetch("https://waterockapi.wegotam.com/editdrug",{
               method: "POST",
               crossDomain: true,
               headers: {
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",
               },
               body: JSON.stringify({
                id,
                drugname,
                mg,
                price,
                time
              
              }),
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(drugname, 'drugname');
              console.log(data, "editdrug");
              if (data.status === "ok") {
                alert("Product successfully updated");
               window.localStorage.setItem("token", data.data);
                //window.location.href = "./viewdrugs";
              }
              
            }); 
            
    }
  
     let destructuredDrugList = [];

    const handleDrugDelete = () =>{
     // setDeletedDrugs(clickedRow['_id'])
     // const id = clickedRow['_id'];
     
     const [list1 ] = destructuredDrugList;
      const {id: iddelete} = list1;
      //console.log(list1);
      //console.log(iddelete);

      fetch("https://waterockapi.wegotam.com/deletedrug",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id,
         
       }),
     })
     .then((res) => res.json())
     .then((data) => {
       console.log(id, 'drugId');
       console.log(data, "deletedrug");
       if (data.status === "ok") {
         alert("Product successfully deleted");
        //window.localStorage.setItem("token", data.data);
         //window.location.href = "./viewdrugs";
       }
       
     }); 

  }

 
    return(
      <div>
      <Navbar />
      <div className="grid" style={{ height: 500, width: '80%' }}>

       <div className="editupdatecontainer">
       <FaEdit className="edit-icon"
                             onClick={() => HandleUpdate}
                    />  
                      <FaTrash
                        className="delete-icon"
                        onClick={() => handleDrugDelete}
                      />
       </div>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
       //rows={rows}
        columns={columns}
        pageSize={12}

        experimentalFeatures={{ newEditingApi: true }}       
         
        checkboxSelection={true}
       // onSelectionModelChange={({ selectionModel = [] }) => {
         // const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
         // const rowsToDelete = tableData.filter(row => rowIds.includes(row._id));
         // setDeletedRows(rowsToDelete);
          //console.log(rowsToDelete);
       // }}
        //rows={rows}
        processRowUpdate={HandleRows}
    
       onSelectionModelChange={(ids) => {
         const selectedIDs = new Set(ids);
     
         listOfDrugsSelected.push(ids);
         const selectedRowData = tableData.filter((row) =>
          
           selectedIDs.has(row._id)
           // rows.find(selectedIDs)
            
             
         );

       

          destructuredDrugList = selectedRowData.map((drug)=>({
          'id': drug._id,
          'drugname':drug.drugname,
          'pricepercard': drug.pricepercard,
          'pname': drug.pname,
          'mg': drug.mg,
          'expdate': drug.expdate,
          'phone': drug.phone,
          'paddress': drug.paddress 
  
        }));

        
          console.log('Destructed',destructuredDrugList);
          console.log(selectedIDs);
         // console.log(listOfDrugsSelected);
         //console.log(tableData);
        
         
       }}


      // onRowUpdated={handleUserUpdate}
       // onRowDeleted={handleDrugDelete}
      />
     
    </div>
    
    </div> 
    )
}

export default ViewDrugs

