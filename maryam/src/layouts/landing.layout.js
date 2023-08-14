import React, { useState } from "react";
import Navbar from "../components/navbar";
// import Footer from "./footer";
import HeadData from "./headData";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/footer";

const LandingLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const toggleSideBar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<Box>
			<HeadData></HeadData>
			{/* <SmallSidebar
				isSidebarOpen={isSidebarOpen}
				toggleSideBar={toggleSideBar}
			/> */}
			<Navbar toggleSideBar={toggleSideBar} />
			<Container maxW={"8xl"}>{children}</Container>
			{/* <Footer /> */}
		</Box>
	);
};

export default LandingLayout;
