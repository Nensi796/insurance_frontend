import React from 'react';
import './Tabs.scss';
import Applications from '../../application';
import Agency from '../../agency';
import { Tabs } from 'antd';
import { CreateProgramme } from '../createProgramme';
import MGA from '../../MGA';
import Comision from '../../comision';


const ProgramsTabs = () => (
    <Tabs defaultActiveKey="Programs">
        <Tabs.TabPane tab="Programs" key="Programs">
            <CreateProgramme />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Applications" key="Applications">
            <Applications />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Authorized Agency" key="Authorized Agency">
            <Agency />
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Authorized MGA" key="Authorized MGA">
            <MGA />
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Commision" key="Commision">
            <Comision />
        </Tabs.TabPane>
    </Tabs>
);
export default ProgramsTabs;
