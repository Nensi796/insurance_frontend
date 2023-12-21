import React,{useState} from 'react';
import { DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, DialogContent, Select,  Dialog, TextField, Box } from '@mui/material';
import CustomButton from '../Buttons/Button';



export const CreateAgencyModal = ({ openModal, handleOk, handleClose ,getData}) => {
    const [applicationData, setApplicationData] = useState({ application_name: "", associated_programme: "", status: "" })
    const [applications, setApplications] = useState([])
    const handleOnChange = (e) => {
        setApplicationData({ ...applicationData, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {
        setApplications([...applications, applicationData]);
        getData([...applications, applicationData]);
        handleOk();
    }
    return (
        <div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <Box className="flex justify-around">
                        <TextField
                            onChange={(e) => handleOnChange(e)}
                            value={applicationData?.application_name}
                            name="application_name"
                            required
                            id="outlined-required"
                            label="Required"

                        />

                        <FormControl fullWidth className='!w-[300px]'>
                            <InputLabel id="demo-simple-select-label">Programme Name</InputLabel>
                            <Select
                                name="associated_programme"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={(e) => handleOnChange(e)}
                                value={applicationData.associated_programme}
                                label="Programme Name"

                            >
                                <MenuItem value="Ten">Ten</MenuItem>
                                <MenuItem value="Twenty">Twenty</MenuItem>
                                <MenuItem value="Thirty">Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth className='!w-[300px]'>
                            <InputLabel id="demo-simple-select-label">status</InputLabel>
                            <Select
                                name="status"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={(e) => handleOnChange(e)}
                                value={applicationData.status}
                                label="Status"
                                
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="inActive">inActive</MenuItem>

                            </Select>
                        </FormControl>


                    </Box>
                </DialogContent>
                <DialogActions>
                    <CustomButton type="primary" title="Cancel" handleClick={() => handleSubmit()} />
                    <CustomButton type="primary" title="Create" handleClick={handleOk} />
                </DialogActions>
            </Dialog>
        </div>
    )
}