"use client";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

const Hero = () => {
	return (
		<Box
			bgImage="url('/waterfall.webp')"
			bgSize="cover"
			boxShadow="xl"
			bgPosition="center"
			height="70vh"
			display="flex"
			justifyContent="center"
			alignItems="flex-end"
			pb="30vh">
			<VStack>
				<MotionHeading
					as="h1"
					fontFamily="Quicksand"
					fontWeight="bold"
					size="xl"
					color="white"
					mb={20}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}>
					Marilyn Rifkin, LCSW
				</MotionHeading>
				<MotionHeading
					as="h2"
					fontFamily="Quicksand"
					fontWeight="bold"
					size="md"
					color="white"
					mb={8}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 4 }}>
					Connecticut | New York | Flordia
				</MotionHeading>
			</VStack>
		</Box>
	);
};

export default Hero;
