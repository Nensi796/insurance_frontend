import React, { useState } from 'react';
import { Box, Popover, FormControl, InputLabel, TextField, MenuItem, Select } from '@mui/material';
import CustomButton from '../Buttons/Button';

const MgaFilterModal = ({ open, anchorEl, handleClose, getFilterData }) => {
    const [mgadata, setMgadata] = useState({ mga_name: "", mga_programme: "", authorize_state: "", commision: "", mga_status: "" })
    const id = open ? 'simple-popover' : undefined;


    const handleOnChange = (e) => {
        setMgadata({ ...mgadata, [e.target.name]: e.target.value })

    }
    const handleSubmit = () => {

        getFilterData(mgadata);
        handleClose()
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Box className="p-5">
                <Box className="flex justify-space-between">
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">MGA Name</InputLabel>
                        <Select
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata?.mga_name}
                            name="mga_name"
                            labelId="demo-simple-select-label"
                            id="outlined-required"
                            label="mga_name"
                        >
                            <MenuItem value="MGA 1">MGA 1</MenuItem>
                            <MenuItem value="MGA 2">MGA 2</MenuItem>
                            <MenuItem value="MGA 3">MGA 3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Associated Programme</InputLabel>
                        <Select
                            name="mga_programme"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={mgadata.mga_programme}
                            label="Associated Programme"
                        >
                            <MenuItem value="Programme 1"> Programme 1</MenuItem>
                            <MenuItem value="Programme 2"> Programme 2</MenuItem>
                            <MenuItem value="Programme 3"> Programme 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">States</InputLabel>

                    <Select
                        name="authorize_state"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={mgadata.authorize_state}
                        label="authorize_state"
                    >
                        <MenuItem value="State 1">State 1</MenuItem>
                        <MenuItem value="State 2">State 2</MenuItem>
                        <MenuItem value="State 3">State 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth className='!w-[300px]'>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <TextField
                        type='number'
                        name="commision"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={mgadata.commision}
                        label="commision"

                    />

                </FormControl>
                <FormControl fullWidth className='!w-[300px]'>
                    <InputLabel id="demo-simple-select-label">mga_status</InputLabel>
                    <Select
                        name="mga_status"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={mgadata.mga_status}
                        label="mga_status"

                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="inActive">inActive</MenuItem>

                    </Select>
                </FormControl>

            </Box>

            <Box className="flex justify-between">
                <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
                <CustomButton type="primary" title="Create" handleClick={() => handleSubmit()} />
            </Box>
        </Popover>
    )
}
export default MgaFilterModal;