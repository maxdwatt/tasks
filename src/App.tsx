import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Favorite Foods Of All Time for CISC275</h1>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "10px",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ul>
                            <li>Mexican</li>
                            <li>Spinach and Ricotta Ravioli</li>
                            <li>Pastelles</li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "10px",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            src={require("./watercolor-cute-avocado-cartoon-character_283146-768.jpg")}
                            width="500"
                            height="500"
                            alt="Cute Avocado"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
