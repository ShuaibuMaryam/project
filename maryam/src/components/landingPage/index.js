import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import MainHeading from "./heading";
import Hero from "./Hero";
import Uploads from "../uploads";
import MobileNav from "../navbar/MobileNav";
import SideNav from "../sideNav";

const LandingPage = () => {
	const theme = useTheme();
	return (
		<>
			{/* <MainHeading /> */}
			{/* <Box bg={theme.primary.dark} color={theme.grey[100]}>
				hello world
			</Box> */}
			{/* <MobileNav /> */}
			<Flex
				justify={"space-between"}
				align={"center"}
				p={"1rem"}
				border={"1px solid"}
				display={{ base: "unset", lg: "none" }}
			>
				<Box w={"7rem"}>
					<Image src="/assets/landingPage/OHOME.svg" alt="logo" w={"100%"} />
				</Box>
				<Box>
					<MobileNav />
				</Box>
			</Flex>
			<Hero />
			<Flex maxW={"100vw"}>
				<SideNav />
				<Uploads />
			</Flex>
		</>
	);
};

export default LandingPage;
