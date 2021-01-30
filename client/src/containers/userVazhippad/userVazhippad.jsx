import React, {useState} from 'react'
import { Tabs,Tab } from "react-bootstrap";
import AddUserVazhippad from '../../components/userVazhippad/addUserVazhippad'
import ListUserVazhippad from "../../components/userVazhippad/listUserVazhippad";
import EditUserVazhippad from "../../components/userVazhippad/editUserVazhippad";

export default function UserVazhippad() {
    const [key, setKey] = useState('addUserVazhippad');
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="addUserVazhippad" title="Add User Vazhippad">
            <AddUserVazhippad></AddUserVazhippad>
        </Tab>
        <Tab eventKey="listUservazhippad" title="List User Vazhippad">
            <ListUserVazhippad></ListUserVazhippad>
        </Tab>
      </Tabs>
    )
}
