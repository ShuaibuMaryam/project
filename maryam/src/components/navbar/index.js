import {
	Box,
	Container,
	Flex,
	useTheme,
	Text,
	Image,
	Button,
} from "@chakra-ui/react";
import TopNav from "./topnav";
import BottomNav from "./bottomnav";
import Link from "next/link";
import { GrFormAdd } from "react-icons/gr";

const Navbar = () => {
	const theme = useTheme();

	return (
		<Container maxW={"8xl"}>
			{/* <Flex flexDir={"column"}> */}
			{/* <TopNav /> */}
			{/* <BottomNav /> */}
			{/* </Flex> */}

			<Flex align={"center"} justify={"space-between"} p={"1.5rem 0"}>
				<Box w={"7rem"}>
					<Image src="/assets/landingPage/OHOME.svg" alt="logo" w={"100%"} />
				</Box>
				<Flex gap={"1rem"}>
					<Link href="#">
						<Text>Home</Text>
					</Link>
					<Link href="#">
						<Text>About</Text>
					</Link>
					<Link href="#">
						<Text>Contact</Text>
					</Link>
					<Link href="#">
						<Text>News</Text>
					</Link>
				</Flex>
				<Box>
					<Button
						leftIcon={<GrFormAdd />}
						bg={"#7CCFED"}
						color={"#2D2D2D"}
						borderRadius={"40px"}
						minW={"200px"}
						minH={"40px"}
					>
						Report Case
					</Button>
				</Box>
			</Flex>
		</Container>
	);
};

export default Navbar;
