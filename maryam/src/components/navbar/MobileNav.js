import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Image,
	Input,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileNav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} onClick={onOpen}>
				<RxHamburgerMenu />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder="Type here..." />
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default MobileNav;

{
	/* <Box>
							<Flex
								direction={"column"}
								align={"center"}
								justify={"space-between"}
								gap={"1rem"}
								p={"1rem"}
								fontFamily={"Work Sans"}
								bgColor={"white"}
								border={"1px solid"}
								// zIndex={"1"}
							>
								<Box w={"7rem"}>
									<Image
										src="/assets/landingPage/OHOME.svg"
										alt="logo"
										w={"100%"}
									/>
								</Box>
								<Flex gap={"1rem"} direction={"column"}>
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
						</Box> */
}
