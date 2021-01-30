import React, { useState } from "react";
import { Tabs,Tab } from "react-bootstrap";
import UserVazhippad from "../userVazhippad/userVazhippad";
import Vazhippad from "../vazhippad/vazhippad";
import FamilyInfo from "../familyInfo/familyInfo";
export default function Layout() {
    const [key, setKey] = useState('userVazhippad');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="userVazhippad" title="User Vazhippad">
            <UserVazhippad></UserVazhippad>
        </Tab>
        <Tab eventKey="vazhippad" title="Vazhippad">
            <Vazhippad></Vazhippad>
        </Tab>
        <Tab eventKey="familyInfo" title="Family Info">
            <FamilyInfo></FamilyInfo>
        </Tab>
      </Tabs>
    );
  }