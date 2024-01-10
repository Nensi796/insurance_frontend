import React, { useMemo, useState, useEffect } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import Table from "../Components/Table/Table";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import MgaFilterModal from "../Components/modals/mgaFilterModal";
import axios from 'axios';
import CreatMGAModal from "../Components/modals/createMGA-Model";




const MGA = () => {

    const [openModel, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(null)
    const [edit, setEditRecord] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const columns = [
        {
            key: "mga_name",

            title: "MGA Name ",

        },
        {
            key: "mga_programme",

            title: "Associated Programme",

        },
        {
            key: "authorize_state",

            title: "States",

        },
        {
            key: "commision",

            title: "Commision",

        },
        {
            key: "mga_status",

            title: "mga_status",

        },
        {
            key: "",

            title: "Action",
            render: (u, i) => {

                return (
                    <button onClick={() => { setOpenModal(true); setEditRecord(i); console.log(i) }}>Edit</button>
                )
            }
        }];





    const getFilteredData = useMemo(() => {

        if (filterData?.status || filterData?.associated_programme || filterData?.application_name) {
            const updatedStatusData = data?.filter((item) => item?.status.toLocaleLowerCase() === filterData?.status?.toLocaleLowerCase() || item?.associated_programme.toLocaleLowerCase() === filterData?.associated_programme?.toLocaleLowerCase()
                || item?.application_name.toLocaleLowerCase() === filterData?.application_name?.toLocaleLowerCase())
            return updatedStatusData
        };
        return data
    }, [filterData, data]);





    const getData = () => {
        axios.get('http://localhost:3002/Application').then((response) => {
            console.log(response.data);
            setData(response.data)
        });
    }

    useEffect(() => {
        getData();
    }, [])

    // console.log("===============getFilteredData", getFilteredData);
    const open = Boolean(anchorEl);
    return (
        <Box>
            <Box className="flex justify-between">
                <CustomButton type="primary" title="+Add MGA" handleClick={() => setOpenModal(true)} />
                <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                <MgaFilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
            </Box>
            <Table columns={columns} data={getFilteredData} />

            <CreatMGAModal editRecord={edit} getData={(values) => setData(values)} openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default MGA;