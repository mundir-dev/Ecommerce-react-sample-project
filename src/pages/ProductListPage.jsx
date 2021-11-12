import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import Products from "../components/product/Products";
import { tab } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
 margin: 20px;
 text-transform: capitalize;
`;
const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;
const Filter = styled.div`
 margin: 20px;
 ${tab({
     margin: "0 20px",
     display: "flex",
     flexDirection: "column"
 })}
`;

const FilterText = styled.span`
 font-size: 20px;
 font-weight: 600;
 margin-right: 20px;
`;

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;
 ${tab({
     margin: "10px 0",
     maxWidth: "130px"
 })}
`;

const Option = styled.option`
 
`;

const ProductListPage = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    
    const handleFilter = event => {
        const value = event.target.value.toLowerCase();
        setFilters({
            ...filters,
            [event.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                   <FilterText>Filter Products:</FilterText>
                   <Select defaultValue="Color" name="color" onChange={handleFilter}>
                    <Option disabled>
                    Color
                    </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select defaultValue="Size" name="size" onChange={handleFilter}>
                    <Option disabled>
                    Size
                    </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue="newest" onChange={event => setSort(event.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductListPage
