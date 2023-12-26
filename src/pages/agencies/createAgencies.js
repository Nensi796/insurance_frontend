// import React from "react";
// import { Box } from '@mui/material';
// import CustomButton from "../Components/Buttons/Button";
// import Table from "../Components/Table/Table";
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// import FilterModal from "../Components/modals/filtermodal";

// export const CreateAgencies = () => {
//     return(
//         <>
//          <Box>
//             <Box className="flex justify-between">
//                 <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
//                 <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
//                 <FilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
//             </Box>
//             <Table columns={columns} data={getFilteredData} />
//             <CreateApplicationModal getData={(values) => setData(values)} openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
//         </Box>
//         </>
//     )
// }