import React, { useState, useEffect } from 'react';



const Pharmaviews = () =>{

    const [phamaviewsList, setpharmaViews] = useState([]);
    const [userviewsList, setuserViews] = useState([]);
  
     
    useEffect(()=>{
        fetch('https://api1.wegotam.com/userviews', {
  
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "userViewsData");
           // result = data.data.username
            setuserViews(data.data);
           
        });
  
    }, [])


    useEffect(()=>{
        fetch('https://api1.wegotam.com/listpharmacies', {
  
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data, "pharmaciesData");
          
            setpharmaViews(data);
           // console.log(phamaviewsList[0]);
          
        });
  
    }, [])
    
   



 const userViews = userviewsList.map((userViews)=>(userViews.username));

  //const pharmalist = phamaviewsList.map((pharmalist)=>(pharmalist[0].pname));
   console.log(userViews);
  // console.log(phamaviewsList[0]['pname']);
   
    

    return(
        <div>
        {phamaviewsList.map(({_id, pname, paddres}) => {
          return (
            <div key={_id} className='listpharmacies'>
              <ul><li>Pharmacy: {pname}</li></ul>
              
              <hr />
            </div>
          );
        })}
      </div>
    )
   

}


export default Pharmaviews;