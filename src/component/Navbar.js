import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import "../styles/navbar.css";

function NavbarMenu() {
  const navbarItems = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Projects",
        href: "/works"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/works"
    }
  ];

  const styleNavbar = {
    hidden: {y: -100, opacity: 0},
    show: {y: 0, opacity: 1, transition: {delay: 0.5, duration: 0.5}}
  }

  return (
    <>
    <motion.div variants={styleNavbar} initial="hidden" animate="show">
    <Row className="d-flex align-items-right justify-content-end" id="navbar">
        {navbarItems.map((item, index) => (
            <Col key={index} lg={2} md={2} sm={12} className="d-flex align-items-center justify-content-center p-4">
                <a href={item.href} id="navbar-item">{item.name}</a>
            </Col>
        ))}
    </Row>
    </motion.div>
    </>
  );
}

export default NavbarMenu;

