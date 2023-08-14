import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";

function Hero() {
	return (
		<Box>
			<Flex direction={"column"}>
				<Box>
					<Heading>Bringing your Loved ones Home</Heading>
				</Box>
				<form>
					<Input placeholder="Find a missing child"></Input>
				</form>
			</Flex>
		</Box>
	);
}

export default Hero;
