import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components"
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import { mobile, tab } from "../responsive";
import {popularProducts} from "../data";

const Container = styled.div`
 
`;

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 ${tab({
     padding: "20px"
 })}
 ${mobile({
     flexDirection: "column"
 })}
`;

const ImageContainer = styled.div`
 flex: 1;
`;

const Image = styled.img`
 width: 100%;
 height: 90vh;
 object-fit: cover;
 ${mobile({
     height: "50vh",
 })}
`;

const InfoContainer = styled.div`
 flex: 1;
 padding-left: 50px;
 ${tab({
     paddingLeft: "20px"
 })}
 ${mobile({
     paddingLeft: "0px",
     paddingTop: "20px"
 })}
`;

const Title = styled.h1`
 font-weight: 200;
`;

const Description = styled.p`
 margin: 20px 0;
`;

const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
`;

const FilterContainer = styled.div`
 width: 100%;
 max-width: 300px;
 margin: 30px 0;
 display: flex;
 justify-content: space-between;
 ${tab({
     flexDirection: "column"
 })}
 ${mobile({
     maxWidth: "400px",
     flexDirection: "row",
     flexWrap: "wrap"
 })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${tab({
     margin: "10px 0"
 })}
`;

const FilterTitle = styled.span`
 font-size: 20px;
 font-weight: 200;
`;

const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props=>props.color};
 margin: 0 5px;
 cursor: pointer;
`;

const FilterSize = styled.select`
 margin-left: 10px;
 padding: 5px;
`;

const FilterSizeOption = styled.option`
 
`;

const AddContainer = styled.div`
 width: 100%;
 max-width: 250px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({
     maxWidth: "400px",
 })}
`;

const AmmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700;
`;

const Ammount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
 padding: 15px;
 border: 2px solid teal;
 background-color: white;
 cursor: pointer;
 font-weight: 500;

 &:hover{
     background-color: #f8f4f4;
 }
`;

const ProductInfoPage = () => {
    const location = useLocation();
    const productId = parseInt(location.pathname.split("/")[2]);
    const [product, setproduct] = useState([]);
    useEffect(() => {
        const product = popularProducts.filter(item => item.id === productId)[0];
        setproduct(product);
    }, [productId])
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Description>{product.description}</Description>
                    <Price>{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmmountContainer>
                            <Remove/>
                            <Ammount>1</Ammount>
                            <Add/>
                        </AmmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductInfoPage
