import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import NavbarMenu from "../component/Navbar";
import { containerVariants } from "../styles/HomeStyle";

function Works() {
    return (
        <>
            <NavbarMenu />
            <motion.div className="p-5" variants={containerVariants} initial="hidden" animate="visible">
                <Row className="mt-3 d-flex align-items-center justify-content-center flex-column">
                    <Col className="d-flex align-items-center justify-content-center" lg={6} md={6} sm={12}>
                        <h1 className="fw-bold text-center">
                            What I Do
                        </h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-between mt-5" lg={6} md={6} sm={12}>
                        <Card className="shadow" style={{ marginRight: "30px"}}>
                            <CardHeader>
                                <h3 className="fw-bold text-center">
                                    Front End
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-muted fw-bold text-center">
                                    Membuat Halaman Depan Web Yang Responsive.
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="shadow" style={{ marginRight: "30px"}}>
                            <CardHeader>
                                <h3 className="fw-bold text-center">
                                    Front End
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-muted fw-bold text-center">
                                    Membuat Halaman Depan Web Yang Responsive.
                                </p>
                            </CardBody>
                        </Card>

                        <Card className="shadow">
                            <CardHeader>
                                <h3 className="fw-bold text-center">
                                    Front End
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-muted fw-bold text-center">
                                    Membuat Halaman Depan Web Yang Responsive.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </motion.div>
        </>
    )
}

export default Works;

