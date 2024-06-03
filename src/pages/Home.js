import { Col, Row } from "reactstrap";
import NavbarMenu from "../component/Navbar";
import "../styles/home.css";
import { motion } from "framer-motion";

function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
    };

    const itemVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
    };

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
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <motion.h3
                            className="title"
                            variants={itemVariants}
                        >
                            Hi Welcome To My Website
                        </motion.h3>
                        <motion.p
                            className="description"
                            variants={itemVariants}
                        >
                        </motion.p>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="image">
                            <motion.img
                                src={require("../assets/my-photo.png")}
                                alt="MyPhoto"
                                variants={itemVariants}
                            />
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
}

export default Home;

