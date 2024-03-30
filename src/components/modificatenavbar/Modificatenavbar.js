import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import React, { Component } from 'react'


const ViewDialog =() =>{

const [open, setOpen] = React.useState(false);

const handleClickToOpen = () =>{
   setOpen(true);
}
const handleClickToCancel = () =>{
   setOpen(false);
}
const handleClickToDelete = () =>{
  setOpen(false);
}  

return(
    <div>
    <Dialog open={true} onClose={handleClickToCancel}>
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

</div>
)

}

export default ViewDialog;