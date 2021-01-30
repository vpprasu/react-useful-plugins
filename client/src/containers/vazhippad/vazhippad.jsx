import React, {useState} from 'react'
import { Tabs,Tab } from "react-bootstrap";
import AddVazhippad from '../../components/vazhippad/addVazhippad'
import ListVazhippad from "../../components/vazhippad/listVazhippad";
import EditVazhippad from "../../components/vazhippad/editVazhippad";
export default function Vazhippad() {
    const [key, setKey] = useState('addVazhippad');
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="addVazhippad" title="Add Vazhippad">
            <AddVazhippad></AddVazhippad>
        </Tab>
        <Tab eventKey="listvazhippad" title="List Vazhippad">
            <ListVazhippad></ListVazhippad>
        </Tab>
      </Tabs>
    )
}
