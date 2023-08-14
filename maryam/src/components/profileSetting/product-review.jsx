import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import {AiOutlineWarning} from "react-icons/ai";


const ProductReview = () => {
    return (
        <Box
            w={{ base: "100%", lg: "70%" }}
            ml={"1rem"}
               scrollMarginTop={"150px"}
               id="My-Account">
            <Heading
                color='#000'
                fontSize='1.09363rem'
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                My Product Reviews
            </Heading>
            <Flex
                bg={"#FDD5D5"}
                 w={"100%"}
                 px={"1.5rem"}
                py={"7px"}
                 borderLeft={"4px solid #CA0B0B"}
                  alignItems={"center"}
                gap={"3"}
            >
                   <AiOutlineWarning/>
                You have submitted no reviews.
            </Flex>

        </Box>
    )
}

export default ProductReview;
