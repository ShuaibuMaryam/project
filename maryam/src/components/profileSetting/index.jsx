import React, {useState} from "react";
import {Box, Flex, Text, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Link } from "@chakra-ui/react";
import Content from "./sideBar";
import MainHeading from "../landingPage/heading";
import MyAccount from "./my-account";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Orders from "./orders";
import ProductReview from "./product-review";
import AddressBook from "./address-book";



const profileSetting = () => {
    const [selectedComponent, setSelectedComponent] = useState('/my-account');

    const handleItemClick = (link) => {
        setSelectedComponent(link);
    };
    const renderComponent = () => {
        switch (selectedComponent) {
            case '/order':
                return <Orders/>;
            case '/address-book':
                return <AddressBook />;
            case '/product-reviews':
                return <ProductReview />;
            default:
                return null;
        }
    };
    return(
        <Box>
            <MainHeading />
                <Header>
                <Flex
                    textAlign={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                    pt={"1.5rem"}
                >
                    <Text
                        fontSize={{ base: "sm", lg: "4xl" }}
                        color={"white"}
                        fontWeight={"extrabold"}
                    >
                        Profile Settings
                    </Text>
                    <Breadcrumb
                        display={"flex"}
                        justifyContent={"center"}
                        spacing="1px"
                        separator={
                            <MdOutlineKeyboardArrowRight color="white" fontSize={"1.5rem"} />
                        }
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} href={"/"} color={"white"}>
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} href={"/"} color={"white"}>
                                User
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} href={"/profile-setting"} color={"white"}>
                                Profile Settings
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                </Header>
            <Flex padding={"4rem"}
            gap={"4rem"}>
                <Content onItemClick={handleItemClick} selectedComponent={selectedComponent} />
                <MyAccount/>
            </Flex>
            <Orders/>
            <ProductReview/>
            <AddressBook/>
            <Box>{renderComponent()}</Box>
        </Box>
    )
}
export default profileSetting;

const Header = styled.div`
	background-image:
		url(${"/assets/Img.png"});
	background-size: cover;
	background-repeat: no-repeat;
	padding-block: 4rem;
	padding-block-start: 2rem;
	padding-inline: 1rem;
    height: 200px;
  width: 100%;
	gap: 1rem;
	@media (max-width: 96rem) {
		padding-block-start: 2rem;
		padding-block-end: 2rem;
	}
`;