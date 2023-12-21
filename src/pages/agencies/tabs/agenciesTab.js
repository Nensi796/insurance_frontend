import { Tabs } from "antd";
import React from "react";

const AgenciesTabs = () => (
    <Tabs defaultActiveKey="Agencies">
        <Tabs.TabPane tab="Agencies" key="Agencies">
            Agencies{''}  
        </Tabs.TabPane>
        <Tabs.TabPane tab="Agents" key="Agents">
            Agents{''}  
        </Tabs.TabPane>
    </Tabs>
)

export default AgenciesTabs;

