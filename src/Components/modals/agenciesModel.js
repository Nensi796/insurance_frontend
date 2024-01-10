import React, { useState } from 'react';
import { DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, DialogContent, Select, DialogContentText, Dialog, TextField, Box } from '@mui/material';
import CustomButton from '../Buttons/Button';


export const AgenciesModel = ({ openModal, handleOk, handleClose, getData }) => {
    const [agenciesData, setAgenciesData] = useState({ agencies_name: "", agencies_number: "",agencies_city:"", status: "" })
    const [agencies, setAgencies] = useState([])
    const handleOnChange = (e) => {
        setAgenciesData({ ...agenciesData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        setAgencies([...agencies, agenciesData]);
        getData([...agencies, agenciesData]);




    }
    //  console.log(applicationData);



    return (
        <div>
            <Dialog maxWidth={900} open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box className="flex justify-around">
                        <TextField
                            onChange={(e) => handleOnChange(e)}
                            value={agenciesData?.agencies_name}
                            name="agencies_name"
                            required
                            id="outlined-required"
                            label="agencies_name"

                        />

                        <TextField
                            type='number'
                            onChange={(e) => handleOnChange(e)}
                            value={agenciesData?.agencies_number}
                            name="agencies_number"
                            required
                            id="outlined-required"
                            label="agencies_number"

                        />
                    </Box>
                    <Box className="flex justify-around mt-5">
                        <FormControl fullWidth className='!w-[300px]'>
                            <InputLabel id="demo-simple-select-label">Programme Name</InputLabel>
                            <Select
                                name="agencies_city"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={(e) => handleOnChange(e)}
                                value={agenciesData.agencies_city}
                                label="agencies_city"

                            >
                                <MenuItem value="Rajkot">Rajkot</MenuItem>
                                <MenuItem value="Surat">Surat</MenuItem>
                                <MenuItem value="Baroda">Baroda</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth className='!w-[300px]'>
                            <InputLabel id="demo-simple-select-label">status</InputLabel>
                            <Select
                                name="status"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={(e) => handleOnChange(e)}
                                value={agenciesData.status}
                                label="Status"
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="inActive">inActive</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
                    <CustomButton type="primary" title="Create" handleClick={() => handleSubmit()} />
                </DialogActions>
            </Dialog>
        </div >
    )
}