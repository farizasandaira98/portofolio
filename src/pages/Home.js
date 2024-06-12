import { Col, Row } from "reactstrap";
import NavbarMenu from "../component/Navbar";
import "../styles/home.css";
import { motion } from "framer-motion";
import { containerVariants, descriptionVariants, itemVariants } from "../styles/HomeStyle";
import { socialMedia } from "../component/SocialMedia";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {


    return (
        <div className="home">
            <Row>
                <NavbarMenu />
            </Row>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-5"
            >
                <Row>
                    <Col md={12} lg={12} sm={12} className="p-5">
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
                    </Col>
                    {/* <Col sm={12} md={12} lg={6} className="image p-5">
                        <img src={require('../assets/my-photo.png')} alt=""></img>
                    </Col> */}
                </Row>
                <div className="d-flex align-items-center justify-content-center mt-3">
                <Row className="w-50">
                    {socialMedia.map((items, index) => {
                        return (
                        <Col key={index} className="d-flex align-items-center justify-content-center">
                            <div key={index} className="social-media">
                                <i className={items.icon} style={{color:"white", fontSize: "2rem"}}></i>
                                {/* <strong>{items.title}</strong> */}
                            </div>
                        </Col>
                        )
                    })}
                </Row>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;

