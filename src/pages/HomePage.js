import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/HomePage.css";

function HomePage() {
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [timeCount, setTimeCount] = useState(10);
    // let timer;
    useEffect(() => {
        let timer = setInterval(() => {
            setTimeCount(preCount => preCount - 1)
            //setTimeCount(timeCount - 1)
            console.log(timeCount, "seconds");
            if (timeCount === 0) {
                setTimeCount(5);
                console.log("time out");
            }
            clearInterval(timer);
        }, 1000)
    },[timeCount])

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }
    }, []);

    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
                <main className="main-homepage pt-5">
                    <Row className="main-content d-flex justify-content-start align-items-center">
                        <Col xs={1}></Col>
                        <Col md={8} sm={8} xs={11} style={{marginTop: "10%", textAlign: "center" }}>
                            <h2 className="text-white">
                                Welcome to the MSE BookStore Website!
                            </h2>
                            <LinkContainer to="/books">
                                <Button
                                    size="lg"
                                    variant="outline-light"
                                    className="mt-2"
                                >
                                    {timeCount} -&gt; Book Page
                                </Button>
                            </LinkContainer>
                            {timeCount===0 && <Navigate replace to="/books" />}
                        </Col>
                        <Col xs={7}></Col>
                    </Row>
                </main>
            </>
        </>
    );
}

export default HomePage;
