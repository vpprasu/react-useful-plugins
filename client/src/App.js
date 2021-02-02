import './App.css';
import Layout from "./containers/layout/layout";
import FullComponents from "./containers/fullComponents/fullComponents"
import {Container,Row,Col, Jumbotron} from "react-bootstrap"
import ServerTable from "./containers/table/serverTable";
import ReduxSaga from './containers/reduxSaga/reduxSaga'
import FileUpload from './containers/fileUpload/fileUpload'
import ServerAgGrid from './containers/serverAgGrid/serverAgGrid.jsx'
import ServerAgGrid2 from './containers/serverAgGrid/serverAgGrid2.jsx'
import UseMemoHook from './containers/useMemo/useMemoHook'
import UseCallbackHook from './containers/useCallback/useCallbackHook'
import MuiReactHookForm from './containers/muiReactHookForm/muiReactHookForm'
import MuiGrid from './containers/muiGrid/muiGrid'
import MultiFileUpload from './containers/multiFileUpload/multiFileUpload'
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Server Table</h1>
            <ServerTable></ServerTable>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Full React-Form-Hook Components</h1>
            <FullComponents></FullComponents>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Redux Thunk Example</h1>
            <Layout></Layout>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Redux Saga Example</h1>
            <ReduxSaga></ReduxSaga>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>File upload Example</h1>
            <FileUpload></FileUpload>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Server Side Ag-Grid</h1>
            <ServerAgGrid></ServerAgGrid>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Client Side Ag-Grid</h1>
            <ServerAgGrid2></ServerAgGrid2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>useMemo Hook Example</h1>
            <UseMemoHook></UseMemoHook>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>useCallback Hook Example</h1>
            <UseCallbackHook></UseCallbackHook>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>MUI React Hook Form Example</h1>
            <MuiReactHookForm></MuiReactHookForm>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>MUI Grid Example</h1>
            <MuiGrid></MuiGrid>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Multi-File Upload</h1>
            <MultiFileUpload></MultiFileUpload>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
