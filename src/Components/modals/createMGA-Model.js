import React, { useEffect, useState } from 'react';
import { DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, DialogContent, Select, Dialog, TextField, Box } from '@mui/material';
import CustomButton from '../Buttons/Button';


function CreatMGAModal({ openModal, handleClose, getData, editRecord }) {
    const [mgadata, setMgadata] = useState({ mga_name: "", mga_programme: "", authorize_state: "", commision: "", mga_status: "" })
    const [mga, setMga] = useState([]);


    const handleOnChange = (e) => {
        setMgadata({ ...mgadata, [e.target.name]: e.target.value })
    }

    const handelSubmit = () => {

        console.log(editRecord)
        const recordindex = mga.findIndex((item => item === editRecord));
        console.log(recordindex);

        if (recordindex > 0 || recordindex === 0) {


            const updated = mga.map((i, index) => {
                if (i === editRecord)
                    return mgadata

                else { return i }
            })
            getData(updated)
        }


        else {
            setMga([...mga, mgadata]);
            getData([...mga, mgadata]);
        }
        handleClose()

    }
    useEffect(() => {
        if (editRecord) {
            setMgadata(editRecord)
        }
    }, [editRecord])

    return (
        <Dialog open={openModal} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <Box className="mt-2 flex justify-between">
                    <FormControl fullWidth className='!w-[300px]'>
                        <InputLabel id="demo-simple-select-label">MGA</InputLabel>
                        <Select
                            name="mga_name"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.mga_name}
                            label="Programme Name"

                        >
                            <MenuItem value="MGA 1">MGA 1</MenuItem>
                            <MenuItem value="MGA 2">MGA 2</MenuItem>
                            <MenuItem value="MGA 3">MGA 3</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl fullWidth className='!w-[300px]'>
                        <InputLabel id="demo-simple-select-label">Programme</InputLabel>
                        <Select
                            name="mga_programme"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.mga_programme}
                            label="Programme Name"

                        >
                            <MenuItem value="Programme 1">Programme 1</MenuItem>
                            <MenuItem value="Programme 2">Programme 2</MenuItem>
                            <MenuItem value="Programme 3">Programme 3</MenuItem>
                        </Select>
                    </FormControl>

                </Box>

                <Box className="mt-5 pt-2 flex justify-between">
                    <FormControl fullWidth className='!w-[300px]'>
                        <InputLabel id="demo-simple-select-label">Authorized in state</InputLabel>
                        <Select
                            name="authorize_state"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.authorize_state}
                            label="Programme Name"
                        >
                            <MenuItem value="state 1">state 1</MenuItem>
                            <MenuItem value="state 2">state 2</MenuItem>
                            <MenuItem value="state 3">state 3</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl fullWidth className='!w-[300px]'>
                        <TextField
                            name="commision"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.commision}
                            label="Commsion in %"
                            type='number'
                        >
                        </TextField>
                    </FormControl>

                </Box>

                <Box className="mt-5 pt-2 flex justify-between">
                    <FormControl fullWidth className='!w-[300px]'>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            name="mga_status"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.mga_status}
                            label="Programme Name"
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="inActive">inActive</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>

            <DialogActions>
                <CustomButton type="primary" title="cancel" handleClick={() => handleClose()} />
                <CustomButton type="primary" title="create" handleClick={() => handelSubmit()} />
            </DialogActions>
        </Dialog>
    )
}

export default CreatMGAModal;