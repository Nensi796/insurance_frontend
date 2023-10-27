import React from 'react';
import { DialogActions, DialogTitle, DialogContent, DialogContentText, Dialog, TextField } from '@mui/material';
import CustomButton from '../Buttons/Button';



export const CreateApplicationModal = ({ openModal, handleOk, handleClose }) => {


    return (
        <div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
                    <CustomButton type="primary" title="Create" handleClick={handleOk} />
                </DialogActions>
            </Dialog>
        </div>
    )
}