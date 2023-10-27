import React, { useState } from 'react'
import CustomButton from '../../Components/Buttons/Button';
import { CreateProgrammeModel } from '../../Components/modals/modal';
import Table from '../../Components/Table/Table';

export const CreateProgramme = () => {
    const columns = [{
        key: "username",

        title: "Program Name",

    },
 

    {
        key: "coverarge",

        title: "Coverage Types",

    },
    {
        key: "status",

        title: "Status",

    },

    ];

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const handleOk = () => {
        setOpenModal(false)
    }

    // // useEffect(() => {
    //     setData()
    // }, [data])

    console.log(data);
    return (
        <div>
            <CustomButton type="primary" title="Create Programme" handleClick={() => setOpenModal(true)} />

            <Table columns={columns} data={data} />
            <CreateProgrammeModel getData={(values) => setData(values)} open={openModal} handleCancel={() => setOpenModal(false)} handleOk={handleOk} />
        </div>
    )
}
