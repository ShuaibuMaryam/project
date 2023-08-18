import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function ChildDetails() {
	return (
		<Box
		// bgImage={"assets/landingPage/hero-bg.svg"}
		// bgPosition={"center top"}
		// bgSize={"cover"}
		// bgRepeat={"no-repeat"}
		// w={"100%"}
		// border={"1px solid"}
		>
			<Flex
				direction={"column"}
				p={"1.5rem"}
				gap={"1rem"}
				m={"0 auto"}
				w={{ base: "100%", lg: "70%" }}
			>
				<Heading size={{ base: "sm", md: "md", lg: "lg" }}>
					Susan Leonard
				</Heading>
				<Flex direction={{ base: "column", lg: "row" }} gap={".6rem"}>
					<Box maxW={"450px"} maxH={"360px"}>
						<Image
							src="/assets/uploads/details-photo.svg"
							alt="Child in green clothes"
							borderRadius={"24px"}
						/>
					</Box>
					<Flex gap={".7rem"} mt={".4rem"}>
						<Flex
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							<Text>Missing since</Text>
							<Text>Age</Text>
							<Text>Gender</Text>
							<Text>Location</Text>
							<Text>Height</Text>
							<Text>Eye colour</Text>
							<Text>Hair colour</Text>
						</Flex>
						<Flex
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							<Text>04/07/2023</Text>
							<Text>6 years</Text>
							<Text>Female</Text>
							<Text>Rayfield, Jos Nigeria</Text>
							<Text>3’3 ft</Text>
							<Text>Brown</Text>
							<Text>Black</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex w={{ base: "100%", lg: "80%" }} direction={"column"} gap={"1rem"}>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Last Seen Circumstance
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							Susan was last seen in front of Unity private school, No 3
							Rayfield road, Jos. She had just closed from school hence, was
							wearing a green check uniform. She was carrying a blue school bag
							with a “Frozen” cartoon character on it.
						</Text>
					</Flex>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Reported by
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							Ambrose Leonard
						</Text>
						<Text>Father</Text>
					</Flex>
					<Flex direction={"column"}>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"rgba(0, 0, 0, 0.40)"}
							fontWeight={"400"}
							fontFamily={"Work Sans"}
						>
							Contact
						</Text>
						<Text
							flexDir={"column"}
							fontSize={"1rem"}
							color={"#2D2D2D"}
							fontWeight={"400"}
						>
							08065288113
						</Text>
						<Text>08062417489</Text>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}

export default ChildDetails;
