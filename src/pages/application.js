import React, { useState } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import { CreateApplicationModal } from "../Components/modals/createApplicationModal";
import Table from "../Components/Table/Table";

const columns = [{
    key: "ApplicationName",

    title: "Application Name",

},
{
    key: "associated_programme",

    title: "Asscociated Programme",

},
{
    key: "status",

    title: "Status",

},
{
    key: "current_version",

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
    return (
        <Box>
            <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
            <Table columns={columns} data={[{ ApplicationName: "test-1", associated_programme: "Computer Science", status: 12300052158, current_version: 123435 },
            { ApplicationName: "test-2", associated_programme: "Computer Science", status: 12300052158, current_version: 123435 },]} />
            <CreateApplicationModal openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default Applications;