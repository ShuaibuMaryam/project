import React from "react";
import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import { RiFacebookCircleLine } from "react-icons/ri";
// import {LiaTelegram} from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import styled from "styled-components";
import { FiTwitter } from "react-icons/fi";

const TopNav = () => {
	const theme = useTheme();

	return (
		<TopContainer>
			<Flex
				w={"100%"}
				bg={"#480130"}
				color={"#fff"}
				justifyContent={"space-between"}
				alignItems={"center"}
				h={"5vh"}
				px={"4rem"}
			>
				<Flex justifyContent={"center"}>
					<Text px={".6rem"}>Contact</Text>
					<Text
						px={".6rem"}
						borderRight={"1.4px solid #fff"}
						borderLeft={"1.4px solid #fff"}
					>
						Reviews
					</Text>
					<Text px={".6rem"}>Support</Text>
				</Flex>
				<Flex justifyContent={"center"}>
					<Text px={"1.6rem"} borderRight={"1.4px solid #fff"} mr={"10px"}>
						support@weatherfor2.com
					</Text>
					<SocialIcons>
						<RiFacebookCircleLine />
						{/*<LiaTelegram />*/}
						<BsInstagram />
						<FiTwitter />
						<FaPinterestP />
					</SocialIcons>
				</Flex>
			</Flex>
		</TopContainer>
	);
};

export default TopNav;

const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background: #480130;

	padding: 10px 0;
`;

const SocialIcons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;

	svg {
		font-size: 1.3rem;
		margin: 0 10px;
	}
`;
