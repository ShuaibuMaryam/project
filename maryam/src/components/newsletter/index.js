import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
	Text,
	useTheme,
} from "@chakra-ui/react";
import styled from "styled-components";

const Newsletter = () => {
	const theme = useTheme();
	return (
		<Box
			bg={"#480130"}
			color={"#EEEDED"}
			width={"60%"}
			p={"2rem 4.5rem"}
			mt={"4rem"}
		>
			<Flex flexDir={"row"} alignItems={"center"}>
				<NewsletterText>
					<h2>Newsletter Sign Up</h2>
					<p>
						Dern and Classy bedding styles, curtains, window blinds, corporate
						wear, and interior decoration, that is sure to suit anyone's style
						and taste. While working within time and budget
					</p>
				</NewsletterText>
				{/* ======== newsletter buttons =====*/}
				<Box w={"50%"}>
					<FormControl>
						<Input
							type="email"
							placeholder={"Enter your email"}
							focus={"none"}
							p={"1rem 1.5rem"}
							mb={"1rem"}
							color={"#EEEDED"}
							w={"100%"}
						/>
						<Button
							bg={"#DB0090"}
							w={"100%"}
							p={"1rem 1.5rem"}
							_hover={{
								color: "#480130",
							}}
							color={"#EEEDED"}
						>
							Subscribe Now
						</Button>
					</FormControl>
				</Box>
			</Flex>
		</Box>
	);
};

export default Newsletter;

const NewsletterText = styled.div`
	width: 50%;
	text-align: start;
	margin-right: 20px;

	h2 {
		font-size: 34px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	p {
		text-align: start;
		font-size: 15px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4; /* number of lines to show */
		line-clamp: 4;
		-webkit-box-orient: vertical;
	}
`;
