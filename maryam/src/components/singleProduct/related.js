import React from 'react'
import {Box, Flex, Grid, Heading} from "@chakra-ui/react";
import {productDetails} from "../productsPage/data";
import Product from "../productsPage/product";

const Related = () => {
    return (
        <>
            <Flex justifyContent={'center'} alignItems={'center'} mt={'4rem'} w={'100%'} flexDir={'column'}>
                <Heading>Related Products</Heading>
                <Box w={'100px'} h={'2px'} bg={'pink.500'} />


            </Flex>
            <Grid gridTemplateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)' }} gap={'1.5rem'} mt={'3rem'} px={'3rem'}>
                {productDetails.splice(0, 4).map((item, index) => (
                    <Product img={item.img} sold={item.sold} available={item.available} discount={item.discount} name={item.name} price={item.price} reviews={item.reviews} key={index} />
                ))}
            </Grid>
        </>
    )
}

export default Related;