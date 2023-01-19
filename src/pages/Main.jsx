import React from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import {Link} from "react-router-dom";


    export default () => {
        const box = {
            backgroundColor: "orange",
            borderRadius: "20px",
            height: "250px",
            display: "flex",
            alignItems: "center" 
        }
    
        const block_1 = {
            backgroundColor: "#E0CC49",
            height: "250px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
        const block_2 = {
            backgroundColor:  "#08E8DE",
            height: "250px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

        const block_3 = {
            backgroundColor:  "lightGreen",
            height: "250px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

        const block_4 = {
            backgroundColor:  "#FF5722",
            height: "250px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    
        const st_h1 = {
            color:"white",
            fontWeight:"900",
            padding:"10px 20px",
            fontSize:"30px",
        }
    
        const st_p = {
            color:"white",
             padding:"10px 50px",
            fontSize:"20px"
        }
    
       
    
        function Banner() {
            return <Row xs={12} md={12} style={box}  className="g-4">
                        <Col xs={8} md={6}>
                            <h1 size="md" style={st_h1}>Подарок за первый заказ!</h1>
                            <p style={st_p}>Легкое говяжье - пластины</p>
                        </Col>
                        <Col xs={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Figure className="rotate">
                            <Figure.Image src="https://cdn0.youla.io/files/images/360_360/62/34/6234062585b60d6a6a7c0263-1.jpg" style={{height: "200px"}}>
                            </Figure.Image>
                        </Figure>   
                        </Col>
                    </Row>
                    
        }
    
    
        return <>
            <div className="main__container" style={{backgroundColor: "#ffe44d"}}>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <h2 className="main" style ={{fontWeight:"900", padding:"10px 20px", fontSize:"30px"}}>Крафтовые лакомства для собак</h2>
                            <p style={{padding:"10px 50px", fontSize:"20px"}}>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                            <Link to="/catalog"><Button className="btn" size="md" variant="light" style={{margin:"20px"}}>Каталог <ChevronRight/></Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="">
                <Row  className="gx-5 p-4 g-4">
                    <Banner/>
                            <Col xs={12} md={6}>
                                <Row style={block_1}>
                                    <Col xs={6}>
                                        <h1 size="md" style={st_h1}>Наборы</h1>
                                        <p style={st_p}>для дрессировки</p>
                                        <h1 size="md" style={st_h1}>От 840 ₽ </h1> 
                                    </Col>
                                    <Col xs={6}>
                                        <Figure>
                                            <Figure.Image size="md" src="https://хордог.рф/wp-content/uploads/2022/10/dressirovka.png" style={{height: "150px"}}/>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row style={block_2}>
                                    <Col>
                                        <h1 style={st_h1}>Микс масел</h1>
                                        <p style={st_p}>пищевая здоровая натуральная добавка</p>
                                    </Col>
                                    <Col>
                                        <Figure>
                                            <Figure.Image src="https://img2.freepng.ru/20180702/rhb/kisspng-hemp-oil-dog-fatty-acid-oel-5b3a4c490c7fb8.9701349515305472730512.jpg" style={{height: "150px"}}/>
                                        </Figure> 
                                    </Col> 
                                </Row>
                            </Col>


                            <Col xs={12} md={6}>
                                <Row style={block_3}>
                                    <Col xs={6}>
                                        <h1 size="md" style={st_h1}>Рога северного оленя</h1>
                                        <p style={st_p}>От 10 до 30 кг.</p>
                                    </Col>
                                    <Col xs={6}>
                                        <Figure>
                                            <Figure.Image size="md" src="https://cdn1.ozone.ru/s3/multimedia-a/6121664854.jpg" style={{height: "150px"}}/>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row style={block_4}>
                                    <Col>
                                        <h1 style={st_h1}>Слипы из шеи индейки</h1>
                                        <p style={st_p}>100% натуральные</p>
                                    </Col>
                                    <Col>
                                        <Figure>
                                            <Figure.Image src="https://cdn1.ozone.ru/multimedia/1036430580.jpg" style={{height: "150px"}}/>
                                        </Figure> 
                                    </Col> 
                                </Row>
                            </Col>



                    <Banner/>
                </Row>


                
            </Container>
        </>
}