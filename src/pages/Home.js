import { Col, Row } from "reactstrap";
import NavbarMenu from "../component/Navbar";
import "../styles/home.css";
import { motion } from "framer-motion";
import { containerVariants, descriptionVariants, imageVariants, itemVariants } from "../styles/HomeStyle";
import { socialMedia } from "../component/SocialMedia";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
        <>
            <Row>
                <NavbarMenu />
            </Row>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-5"
            >
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={6} lg={6} sm={12} className="p-5">
                        <Row>
                            <motion.h3
                                className="title"
                                variants={itemVariants}
                            >
                                Hi I Am Muh Fariza
                            </motion.h3>
                            <motion.p
                                className="description"
                                variants={itemVariants}
                            >
                                I'm a <motion.b
                                    className="description-b"
                                    variants={descriptionVariants}
                                ></motion.b>
                            </motion.p>
                        </Row>
                        <motion.div variants={itemVariants} className="d-flex align-items-center justify-content-center mt-3">
                            <Row className="w-100">
                                {socialMedia.map((items, index) => {
                                    return (
                                        <Col key={index} className="d-flex align-items-center justify-content-center mt-2">
                                            <a key={index} href={items.link} target="#">
                                                <div key={index} className="social-media">
                                                    <i className={items.icon} style={{ color: "white", fontSize: "2rem" }}></i>
                                                </div>
                                            </a>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </motion.div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="image p-5">
                        <motion.img variants={imageVariants} src={require('../assets/my-photo.png')} alt=""></motion.img>
                    </Col>
                </Row>
            </motion.div>
            </>
    );
}

export default Home;

