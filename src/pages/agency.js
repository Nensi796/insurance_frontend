import React, { useState } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import { CreateAgencyModal } from "../Components/modals/createAgencyModel";
import Table from "../Components/Table/Table";

const columns = [{
    key: "ApplicationName",

    title: "Agency Name",

},
{
    key: "associated_programme",

    title: "Asscociated Programme",

},
 {
    key: "",

    title: "Action",
    render: () => (
        //    <MoreHorizIcon/>

        <h1>sdds</h1>
    )
}];

const Agency = () => {
    const [openModel, setOpenModal] = useState(false);
    return (
        <Box>
            <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
            <Table columns={columns} data={[{ ApplicationName: "test-1", associated_programme: "Computer Science", status: 12300052158,},
            { ApplicationName: "test-3", associated_programme: "Computer Science", status: 12300052158, },]} />
            <CreateAgencyModal openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default Agency;