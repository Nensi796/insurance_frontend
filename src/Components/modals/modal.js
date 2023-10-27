import React, { useState } from "react";
import CustomButton from '../../Components/Buttons/Button';
import { Modal, Form, Input, Select } from "antd";


const IndustriesOptions = [{ value: "Chemical", label: "Chemical" }, { value: "Mechanical", label: "Mechanical" }]
const StateOptions = [{ value: "CA", label: "CA" }, { value: "AI", label: "AI" }]
const CoverageOptions = [{ value: "Life", label: "Life" }, { value: "Health", label: "Health" }]
const StatusOptions = [{ value: "active", label: "Active" }, { value: "inactive", label: "Inactive" }]

export function CreateProgrammeModel({ open, handleOk, handleCancel, getData }) {


    const [programs, setPrograms] = useState([])

    const onFinish = (values) => {
        console.log(values);
        setPrograms([...programs, values])
        // lifting statup 
        getData([...programs, values])
    }
    console.log(programs);
    return (
        <>

            <Modal

                open={open}
                title="Create Programme"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                ]}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{

                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item

                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item

                        name="industries"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            size={12}
                            placeholder="Choose industries"

                            // onChange={handleChange}
                            style={{ width: '100%' }}
                            options={IndustriesOptions}
                        />
                    </Form.Item>

                    <Form.Item

                        name="States"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            size={12}
                            placeholder="Choose States"

                            // onChange={handleChange}
                            style={{ width: '100%' }}
                            options={StateOptions}
                        />
                    </Form.Item>
                    <Form.Item

                        name="coverarge"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            size={12}
                            placeholder="Choose Coverage Types"

                            // onChange={handleChange}
                            style={{ width: '100%' }}
                            options={CoverageOptions}
                        />
                    </Form.Item>


                    <Form.Item

                        name="status"
                        rules={[
                            {
                                required: true,
                                message: 'Please select status!',
                            },
                        ]}
                    >
                        <Select
                            size={12}
                            defaultValue="active"
                            // onChange={handleChange}
                            style={{
                                width: 200,
                            }}
                            options={StatusOptions}
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        {/* <Button type="primary" htmlType="submit">
                            Submit
                        </Button> */}
                        <div key="" className="flex items-center">
                            <CustomButton
                                title="Cancel"
                                key="linsk"
                                onClick={handleCancel}
                            />

                            <CustomButton key="submit" htmlType="submit" type="primary" title="Create" onClick={handleOk} />


                        </div>

                    </Form.Item>
                </Form>
            </Modal >
        </>
    )
}