import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import {sliderItems} from "../../data"
import { mobile, tab } from "../../responsive";
import Slide from "./SliderItem";

const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 position: relative;
 overflow: hidden;
`;
const Arrow = styled.div`
 width: 50px;
 height: 50px;
 background-color: #fff7f7;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 bottom: 0;
 left: ${props=> props.direction === "left" && "10px"};
 right: ${props=> props.direction === "right" && "10px"};
 margin: auto;
 cursor: pointer;
 opacity: 0.5;
 z-index: 2;
 ${tab({
    width: "40px",
    height: "40px"
 })}
 ${mobile({
    width: "30px",
    height: "30px"
 })}
`;

const Wrapper = styled.div`
 height: 100%;
 display: flex;
 transition: all 1.5s ease;
 transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) => {
       if(direction === "left"){
           setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)
       }else{
        setslideIndex(slideIndex < 2 ? slideIndex +1 : 0)
       }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                    <Slide key={item.id} item={item}/>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
