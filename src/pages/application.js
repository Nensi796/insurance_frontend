import React, { useState } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import { CreateApplicationModal } from "../Components/modals/createApplicationModal";
import Table from "../Components/Table/Table";

const columns = [
    {
        key: "application_name",

        title: "Asscociated Programme",

    },
    {
        key: "programm_name",

        title: "Status",

    },
    {
        key: "status",

        title: "Current Version",
        render: () => (
            <a href="#">Link Address</a>
        )
    }
    , {
        key: "",

        title: "Action",
        render: () => (
            //    <MoreHorizIcon/>

            <h1>sdds</h1>
        )
    }];

const Applications = () => {
    const [openModel, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    console.log(data);
    return (
        <Box>
            <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
            <Table columns={columns} data={data} />
            <CreateApplicationModal getData={(value) => setData(value)} openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default Applications;