import { Box, useTheme } from "@chakra-ui/react";
import MainHeading from "./heading";
import Hero from "./Hero";
import Uploads from "../uploads";

const LandingPage = () => {
	const theme = useTheme();
	return (
		<>
			{/* <MainHeading /> */}
			{/* <Box bg={theme.primary.dark} color={theme.grey[100]}>
				hello world
			</Box> */}
			<Hero />
			<Uploads />
		</>
	);
};

export default LandingPage;
