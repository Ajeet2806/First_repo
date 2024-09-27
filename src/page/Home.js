// import Patt from "../components/navbar";
// import BasicCards from "../components/card";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from "../components/Form";
function Home(){
    return(
        <>
            {/* <Patt/> */}
            <h1 className="text-center">EASY FIND</h1>
            <p style={{ color: 'black', textShadow: 'none' , textAlign: "center"}}>
             You Want To Meet Someone ? Search here...
        </p>
           <br />
           <br />
           <Container>
        {/* <Row>
            <Col>
                <BasicCards/>
            </Col>
            <Col>
                <BasicCards/>
            </Col>
            <Col>
                <BasicCards/>
            </Col>
        </Row> */}
        <Form/>
      </Container>
        </>
    )
}export default Home; 