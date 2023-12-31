import {
	Box,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

function Hero() {
	return (
		<Box
			bgImg={"/assets/landingPage/hero-bg.svg"}
			bgSize={"cover"}
			bgPosition={"center"}
			mt={"5rem"}
			// w={"100vw"}
			// border={"1px solid"}
		>
			<Flex
				direction={"column"}
				gap={"1rem"}
				w={{ base: "100%", lg: "40%" }}
				p={{ base: "1rem", lg: "3rem 0" }}
				ml={{ base: "unset", lg: "22%" }}
				// position={"relative"}
				// left={{ base: "unset", lg: "240px" }}
				// right={"0"}
				// border={"1px solid red"}
			>
				<Box>
					<Heading fontFamily={"DM Sans"}>
						<span style={{ color: "#747474" }}>Bringing your</span> Loved
						<br /> <span style={{ color: "#747474" }}>ones</span> Home
					</Heading>
				</Box>
				{/* <form>
					<Input placeholder="Find a missing child"></Input>
				</form> */}
				<InputGroup gap={"10px"}>
					<InputLeftElement pointerEvents="none">
						{/* <PhoneIcon color="gray.300" /> */}
						<CiSearch />
					</InputLeftElement>
					<Input
						type="text"
						placeholder="Find a missing child"
						bg={"#F5F5F5"}
						borderRadius={"20px"}
					/>
				</InputGroup>
			</Flex>
		</Box>
	);
}

export default Hero;
