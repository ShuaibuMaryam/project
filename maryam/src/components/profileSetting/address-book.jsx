import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";

const AddressBook = () => {
    return(
        <Box  w={{ base: "100%", lg: "70%" }}
              scrollMarginTop={"150px"}
              id="My-Account">
            <Heading
                color='#000'
                fontSize='1.09363rem'
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                Address Book
            </Heading>
            <Text opacity={"0.5"} fontSize={"20px"}>
                Add New Address
            </Text>
            <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>

        </Box>
    )
}
export default AddressBook;