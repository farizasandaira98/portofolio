import { Col, Row } from "reactstrap";

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
  ]
  return (
    <Row className="d-flex align-items-right justify-content-end ">
        {navbarItems.map((item, index) => (
            <Col key={index} lg={2} md={2} sm={12} className="d-flex align-items-center justify-content-center p-4">
                <a href={item.href}>{item.name}</a>
            </Col>
        ))}
    </Row>
  );
}

export default NavbarMenu;

