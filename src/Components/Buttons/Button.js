import React from 'react';
import { Button } from 'antd';
import './Button.scss';

const CustomButton = props => {
    return (
        <div className="btn-custom">
            <Button onClick={props.handleClick} {...props}>{props.title}</Button>
        </div>
    );
};

export default CustomButton;
