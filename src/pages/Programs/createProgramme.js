import React, { useState } from 'react'
import CustomButton from '../../Components/Buttons/Button';
import { CreateProgrammeModel } from '../../Components/modals/modal';

export const CreateProgramme = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOk = () => {
        setOpenModal(false)
    }
    return (
        <div>
            <CustomButton type="primary" title="Create Programme" handleClick={() => setOpenModal(true)} />
            <CreateProgrammeModel open={openModal} handleCancel={() => setOpenModal(false)} handleOk={handleOk} />
        </div>
    )
}
