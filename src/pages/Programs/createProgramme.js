import React, { useState, useEffect, useMemo } from 'react'
import CustomButton from '../../Components/Buttons/Button';
import { CreateProgrammeModel } from '../../Components/modals/programModal';
import Table from '../../Components/Table/Table';
import axios from 'axios';
import { Box } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ProgramFilterModal from '../../Components/modals/programFilterModel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';


export const CreateProgramme = () => {

  
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const handleOk = () => {
        setOpenModal(false)
    }

    const [filterData, setFilterData] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClickPop = (event) => {
        setAnchor(event.currentTarget);
      

      };

      const handleClosePop = () => {
        setAnchor(null);
      };
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
                    <MoreHorizIcon className='curso r-pointer' aria-describedby={id}  onClick={handleClickPop} />
                    
                    
                </>

            )
        }
    }


    ];


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const updatedData = useMemo(() => {

        if (filterData) {
            const newData = data?.filter((item) => item?.ProgramName === filterData?.program_name
                || item?.Status === filterData?.Status
            )
            return newData;
        }
        else return data
    }, [filterData, data])





    const getData = () => {
        axios.get('http://localhost:8081/get-all').then((response) => {
            console.log(response.data);
            setData(response.data)
        });
    }

    useEffect(() => {
        getData();
    }, [])

    console.log("filterData", filterData);
    const open = Boolean(anchorEl);


    const [anchor, setAnchor] = React.useState(null);


   

    const open1 = Boolean(anchor);

    const id = open1 ? 'simple-popover' : undefined;

    return (
        <div>
            <Box className="flex justify-between">
                <CustomButton className="mb-[20px]" type="primary" title="Create Programme" handleClick={() => setOpenModal(true)} />
                <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                <ProgramFilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
            </Box>
            <Table columns={columns} data={updatedData} />
            <CreateProgrammeModel getData={(values) => setData(values)} open={openModal} handleCancel={() => setOpenModal(false)} handleOk={handleOk} />
            <Popover
                        id={id}
                        open={open1}
                        anchorEl={anchor}
                        onClose={handleClosePop}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <CustomButton handleClick={() => setOpenModal(true)} title="Edit"/>
                    </Popover>
        </div>
        
    )
}
