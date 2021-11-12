import { useEffect, useState } from "react";
import styled from "styled-components"
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({category, filters, sort}) {
    const [products, setproducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const products = category ? popularProducts.filter(item => item.category === category.toLowerCase()) : popularProducts;
        setproducts(products);
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(products.filter(item => 
                Object.entries(filters).every(([key,value]) => 
                   item[key].includes(value)
                )
            )
        );
    }, [category, filters, products])

    useEffect(() => {
        if(sort === "newest"){
            console.log(sort);
            setFilteredProducts((prev) => [...prev].sort((a,b) => new Date(a.created_at) - new Date(b.created_at)))
        } else if(sort === "asc"){
            setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
        } else{
            setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {category ? filteredProducts.map(item=> (
                <Product key={item.id} item={item} />
            )) : products.slice(0,8).map(item=> (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products
