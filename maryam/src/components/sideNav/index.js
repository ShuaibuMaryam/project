import { Box, Checkbox, Heading, Text } from "@chakra-ui/react";
import React from "react";

function SideNav() {
	return (
		<Box>
			<Box
				position={"fixed"}
				border={"1px solid"}
				w={"17%"}
				top={"55%"}
				left={"0"}
				right={"0"}
			>
				<Heading>Filter by</Heading>
				<form>
					<Box>
						<Text>Gender</Text>
						<Checkbox>Male</Checkbox>
						<Checkbox>Female</Checkbox>
					</Box>
				</form>
			</Box>
		</Box>
	);
}

export default SideNav;
