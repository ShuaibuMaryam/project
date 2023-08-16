import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { recentUploads } from "./data";

function Uploads() {
	return (
		<Box fontFamily={"Work Sans"} p={{ base: "1rem", md: "2rem 3rem" }}>
			<Grid
				templateColumns={{
					base: "100%",
					md: "repeat(2, 1fr)",
					lg: "repeat(4, 1fr)",
				}}
				gap={"1rem"}
			>
				{recentUploads.map((card) => {
					return (
						<Flex
							key={card.id}
							flexDir={"column"}
							border={"1px solid rgba(0, 0, 0, 0.12)"}
							p={"1rem"}
							borderRadius={"24px"}
							align={{ base: "center", md: "unset" }}
						>
							<Flex>
								<Image
									src={card.image}
									alt="Missing child"
									w={"100px"}
									h={"100px"}
									borderRadius={"50%"}
								/>
							</Flex>

							<Text
								fontSize={"lg"}
								fontWeight={"600"}
								color={"#2D2D2D"}
								mt={".7rem"}
							>
								{card.name}
							</Text>
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
								</Flex>
								<Flex
									flexDir={"column"}
									fontSize={"1rem"}
									color={"#2D2D2D"}
									fontWeight={"400"}
								>
									<Text>{card.missingDate}</Text>
									<Text>{card.age}</Text>
									<Text>{card.gender}</Text>
								</Flex>
							</Flex>
							<Box mt={"1rem"} w={"100%"}>
								<Button
									bg={"#7CCFED"}
									color={"#2D2D2D"}
									borderRadius={"40px"}
									w={"100%"}
									minH={"40px"}
								>
									View
								</Button>
							</Box>
						</Flex>
					);
				})}
			</Grid>
		</Box>
	);
}

export default Uploads;
