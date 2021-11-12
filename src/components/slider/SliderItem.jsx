import React from 'react'
import styled from 'styled-components';
import { mobile, tab } from '../../responsive';

const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 background-color: ${props=>props.bg};
`;

const ImageContainer = styled.div`
 height: 100%;
 flex: 1;
 ${tab({
    minWidth: "140px"
 })}
`;

const Image = styled.img`
 height: 100%;
 width: 100%;
 object-fit: cover;
`;

const InfoContainer = styled.div`
 flex: 1;
 padding: 50px;
 ${tab({
    padding: "30px"
 })}

 ${mobile({
    padding: "15px"
 })}
`;

const Title = styled.h1`
 font-size: 70px;
 ${tab({
    fontSize: "30px"
 })}
 ${mobile({
    fontSize: "22px"
 })}
`;
const Description = styled.p`
 margin: 50px 0;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
 ${tab({
    margin: "20px 0",
    fontSize: "16px"
 })}
 ${mobile({
    fontSize: "12px"
 })}
`;
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
 ${tab({
    fontSize: "13px"
 })}

${mobile({
    padding: "7px",
    fontSize: "10px"
 })}
`;

const SliderItem = ({item}) => {
    return (
        <Slide bg={item.bg}>
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Slide>
    )
}

export default SliderItem
