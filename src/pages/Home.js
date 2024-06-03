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

    const descriptionVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: 1.0, duration: 0.5 } },
    };

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
                </Row>
            </motion.div>
        </div>
    );
}

export default Home;

