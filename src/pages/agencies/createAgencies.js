import React, { useState, useMemo } from "react";
import { Box } from '@mui/material';
import CustomButton from "../../Components/Buttons/Button";
import Table from "../../Components/Table/Table";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterModal from "../../Components/modals/programFilterModel";
import { AgenciesModel } from "../../Components/modals/agenciesModel";

export const CreateAgencies = () => {
    const columns = [{
        key: "ProgramName",

        title: "Program Name",
    },
    {
        key: "CovrageType",

        title: "Coverage Types",
        render: (_, item) => (


            <ol>
                {item?.CovrageType?.map((val, index) => {
                    return <li key={index}>{val}</li>
                })}
            </ol>
        )

    },
    {
        key: "Status",

        title: "Status",

    },
    {
        key: "chooseindustry",
        title: "Choose Industry",
        render: (_, item) => {
            return (
                <ul>
                    {item?.chooseindustry?.map((val) => {
                        return (
                            <li key={val?._id}>{val}</li>
                        )
                    })}
                </ul>
            )
        }
    },
    {
        key: "choosestates",
        title: "States",
        render: (_, item) => {
            return (
                <ul>
                    {item?.choosestates?.map((val) => {
                        return (
                            <li key={val?._id}>{val}</li>
                        )
                    })}
                </ul>
            )
        }
    },
    {
        key: "",
        title: 'Action',
        render: () => {

            return (
                <>
                    {/* <MoreHorizIcon className='curso r-pointer' aria-describedby={id} onClick={handleClickPop} /> */}


                </>

            )
        }
    }


    ];

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(null)
    console.log(filterData);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getFilteredData = useMemo(() => {


            if (filterData?.status || filterData?.associated_programme || filterData?.application_name) {
            const updatedStatusData = data?.filter((item) => item?.status.toLocaleLowerCase() === filterData?.status?.toLocaleLowerCase()
                || item?.associated_programme.toLocaleLowerCase() === filterData?.associated_programme?.toLocaleLowerCase()
                || item?.application_name.toLocaleLowerCase() === filterData?.application_name?.toLocaleLowerCase())
            return updatedStatusData
        };


        return data

    }, [filterData, data]);

    const open = Boolean(anchorEl);


    return (
        <>
            <Box>
                <Box className="flex justify-between">
                    <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
                    <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                    <FilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
                </Box>
                <Table columns={columns} data={getFilteredData} />
                <AgenciesModel getData={(values) => setData(values)} openModal={openModal} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
            </Box>
        </>
    )
}