import React, {useState} from 'react'
import {MdKeyboardArrowRight} from "react-icons/md";
import {Flex, Box, Heading, Progress} from "@chakra-ui/react";
import Link from "next/link";
import {categories} from "./data";

const Categories = () => {
    const [activeLink, setActiveLink] = useState({});

    return (
        <>
            <Heading color='#000'
                     fontSize='1.09363rem'
                     fontWeight='400'
                     textTransform={'uppercase'}
                     lineHeight='normal'
                     mb={'2.5rem'}>
                Furniture Categories
            </Heading>
            <Progress value={30} size='xs' colorScheme='pink' />

            <Box mt={'1.5rem'} border={'0.274px solid #480130'}
                 borderBottom={'0px'}
            >
                <Flex
                    paddingInline={".4rem"}
                    justifyContent={"space-between"}
                    bg={'#DB0090'}
                    color={'white'}
                    borderBottom={'0.274px solid #480130'}
                    p={".5rem"}
                >
                    <Link
                        onClick={() => {}}
                        sx={{
                            color: "white",
                            background: 'pink',
                            fontSize: "18px",
                            fontWeight: "400",
                            cursor: "pointer",
                            width: "100%",
                        }}
                        href={`#`}
                    >
                        All
                    </Link>

                    <MdKeyboardArrowRight size={"2rem"} />
                </Flex>
                {categories.map((item, index) => (
                    <Flex
                        paddingInline={".4rem"}
                        justifyContent={"space-between"}
                        key={index}
                        borderBottom={'0.274px solid #480130'}
                        p={".5rem"}
                    >
                        <Link
                            onClick={() => {
                                setActiveLink({ [item.id]: true });
                            }}
                            sx={{
                                color: activeLink[item.id] ? "white" : "",
                                fontSize: "18px",
                                fontWeight: "400",
                                cursor: "pointer",
                                width: "100%",
                            }}
                            href={`#`}
                        >
                            {item}
                        </Link>

                        <MdKeyboardArrowRight size={"2rem"} />
                    </Flex>
                ))}
            </Box>

        </>
    )
}

export default Categories;