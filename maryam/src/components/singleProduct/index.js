import React from 'react'
import Details from "./details";
import MainHeading from "../landingPage/heading";
import {Box, Container} from "@chakra-ui/react";
import Related from "./related";
import Description from "./description";

const SingleProduct = () => {
    return (
        <>
            <MainHeading />
            <Box mt={'3rem'} px={'4rem'}>
                <Details />
            </Box>
            <Description />
            <Related />
        </>
    )
}

export default SingleProduct;