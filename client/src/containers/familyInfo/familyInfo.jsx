import React, { useState } from "react";
import { Tabs,Tab } from "react-bootstrap";
import AddFamilyInfo from "../../components/familyInfo/addFamilyInfo";
import ListFamilyInfo from '../../components/familyInfo/listFamilyInfo';
import EditFamilyInfo from "../../components/familyInfo/editFamilyInfo";

export default function FamilyInfo() {
    const [key, setKey] = useState('addFamilyInfo');
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="addFamilyInfo" title="Add Family Info">
            <AddFamilyInfo></AddFamilyInfo>
        </Tab>
        <Tab eventKey="listFamilyInfo" title="List Family Info">
            <ListFamilyInfo></ListFamilyInfo>
        </Tab>
      </Tabs>
    );
}
