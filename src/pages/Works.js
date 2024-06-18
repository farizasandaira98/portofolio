import { Col, Row } from "reactstrap";
import NavbarMenu from "../component/Navbar";

function Works() {
    return (
        <div className="">
            <NavbarMenu />
            <Row className="mt-3 d-flex align-items-center justify-content-between flex-column">
                <Col className="d-flex align-items-center justify-content-center" lg={6} md={6} sm={12}>
                    <h1 className="fw-bold text-center">
                        What I Do
                    </h1>
                </Col>
                <Col className="d-flex align-items-center justify-content-center mt-3" lg={6} md={6} sm={12}>
                    <Col lg={4} md={4} sm={12}>
                    <h3 className="fw-bold">
                        Front End
                    </h3>
                    <p>
                        Test 1 2 3
                    </p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <h3 className="fw-bold">
                        Back End
                    </h3>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <h3 className="fw-bold">
                        Database
                    </h3>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </div>
    )
}

export default Works;

