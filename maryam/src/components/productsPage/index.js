import React from 'react'
import MainHeading from "../landingPage/heading";
import {Box, Container, Flex, Grid, Heading} from "@chakra-ui/react";
import HeroSection from "./heroSection";
import Categories from "./categories";
import Price from "./price";
import Product from "./product";
import {productDetails} from "./data";
import Featured from "./featured";
import Sortings from "./sortings";
import PaginationBtn from "./pagination";


const FurniturePage = () => {
    return (
        <>
            <MainHeading />
            <HeroSection />

            <main>
                <Flex justifyContent={'start'} alignItem={'center'} w={'100%'} p={'2rem'}>

                    {/* ======= left-side menu ======= */}
                    <Box w={'19rem'} mr={'2rem'}>
                        <Categories />
                        <Price />
                        <Featured/>
                    </Box>

                    {/* ======= right-side menu ======= */}
                    <Box>
                        <Sortings />
                        <Grid gridTemplateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1fr, 1fr, 1fr)' }} gap={'1.5rem'}>
                            {productDetails.map((item, index) => (
                                <Product img={item.img} sold={item.sold} available={item.available} discount={item.discount} name={item.name} price={item.price} reviews={item.reviews} key={index} />
                            ))}
                        </Grid>
                        <PaginationBtn />
                    </Box>
                </Flex>
            </main>
        </>
    )
}

export default FurniturePage