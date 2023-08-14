import React, {useState} from "react";
import {Box, Flex, Heading, Progress} from "@chakra-ui/react";
import {sideBarData} from "./data";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";

const Content = () => {
    const [activeLink, setActiveLink] = useState({});
    return (
        <>
            {/* Second layer- Left */}
            <Flex
                flexDir="column"
                boxShadow={"lg"}
                height={"fit-content"}
                top={"10rem"}
                pb={"1rem"}
                borderBottom={"lg"}
                width={{base: "100%", lg: "25%"}}
                w={"300px"}
                position={{base: "", lg: "sticky"}}
                overflowY="scroll"
                display={{base: "none", lg: "flex"}}
            >
                <Heading color='#000'
                         fontSize='1.09363rem'
                         fontWeight='400'
                         textTransform={'uppercase'}
                         lineHeight='normal'
                         mb={'2.5rem'}>
                    Profile Settings
                </Heading>
                <Progress value={30} size='xs' colorScheme='pink' />

                <Box mt={'1.5rem'} border={'0.274px solid #480130'}
                     borderBottom={'0px'}
                >
                    {sideBarData.map((item, index) => {
                        return (
                            <Flex
                                paddingInline={".4rem"}
                                justifyContent={"space-between"}
                                key={index}
                                p={".5rem"}
                                cursor={"pointer"}
                                borderBottom={'0.274px solid #480130'}
                                onClick={() => {
                                    setActiveLink({[item.link]: true});
                                }}
                                style={{
                                    background: activeLink[item.link] ? "#DB0090" : "",
                                    color: activeLink[item.link] ? "white" : "#480130",
                                    fontSize: "20px",
                                    fontWeight: "400",
                                    cursor: "pointer",
                                    width: "100%",

                                }}
                            >
                                <Flex gap={"5"} alignItems={"center"}>
                                    <Box>
                                        {item.icon}
                                    </Box>

                                    <Link
                                        fontSize={"lg"}
                                        fontWeight={"normal"}
                                        onClick={() => {
                                            setActiveLink({[item.link]: true});
                                        }}
                                        style={{
                                            background: activeLink[item.link] ? "#DB0090" : "",
                                            fontSize: "20px",
                                            fontWeight: "400",
                                            cursor: "pointer",
                                            width: "100%",
                                        }}
                                        cursor={"pointer"}
                                        w={"full"}
                                        textDecoration={"none"}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                </Flex>
                                <MdKeyboardArrowRight size={"2rem"}/>
                            </Flex>
                        );
                    })}
                </Box>
            </Flex>
        </>
    )
};

export default Content;