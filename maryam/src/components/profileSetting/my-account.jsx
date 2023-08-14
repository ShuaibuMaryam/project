import React from "react";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import Link from "next/link";

const MyAccount = () => {
    return (
        <Box
            w={{ base: "100%", lg: "70%" }}
            scrollMarginTop={"150px"}
            id="My-Account">
            <Heading
                color='#000'
                fontSize='1.09363rem'
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                My Account
            </Heading>
            <Text opacity={"0.5"} fontSize={"20px"}>
                Account Information
            </Text>
            <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
            <Flex justifyContent={"space-between"}>
                <Box lineHeight={"30px"}>
                    <Text py={"1rem"} fontWeight={"bold"} fontSize={"20px"}>Confirm Information</Text>
                    <Text fontSize={"sm"}>Abbas Alabura</Text>
                    <Text fontSize={"sm"}>abbasalabson@gmail.com</Text>
                    <Flex gap={"3"}>
                       <Link href={"/"} color={"#0D5292"}>Edit</Link>
                        <Text fontSize={"sm"}>Change Password</Text>
                    </Flex>
                </Box>
                <Box lineHeight={"30px"} pr={"4rem"}>
                    <Text py={"1rem"} fontWeight={"bold"} fontSize={"20px"}>Newsletters</Text>
                    <Text fontSize={"sm"}>You are subscribed to "General Subscription".</Text>
                    <Flex gap={"3"}>
                        <Link href={"/"} color={"#0D5292"}>Edit</Link>
                        <Text fontSize={"sm"}>Change Password</Text>
                    </Flex>
                </Box>
            </Flex>
            <Box pt={"3rem"}>
                <Text opacity={"0.5"} fontSize={"20px"}>
                    Address Book
                </Text>
                <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
                <Flex justifyContent={"space-between"}>
                    <Box lineHeight={"30px"}>
                        <Text py={"1rem"} fontWeight={"bold"} fontSize={"20px"}>Default Billing Address</Text>
                        <Text fontSize={"sm"}>You have not set a default billing address.</Text>
                        <Link href={"/"} color={"#0D5292"}>Edit Address</Link>
                    </Box>
                    <Box lineHeight={"30px"} pr={"4rem"}>
                        <Text py={"1rem"} fontWeight={"bold"} fontSize={"20px"}>Default Shipping Address</Text>
                        <Text fontSize={"sm"}>You have not set a default shipping address.</Text>
                        <Link href={"/"} color={"#0D5292"}>Edit</Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default MyAccount;