"use client";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
	header: String;
	subHeader?: String;
}

const Hero = ({ header, subHeader }: Props) => {
	return (
		<Box
			bgImage="url('/waterfall.webp')"
			bgSize="cover"
			boxShadow="xl"
			bgPosition="center"
			height="60vh"
			display="flex"
			justifyContent="center"
			alignItems="flex-end"
			pb="25vh">
			<VStack>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
					<Heading as="h1" fontFamily="Roboto" fontWeight="bold" size="xl" color="white" mb={20}>
						{header}
					</Heading>
				</motion.div>
				{subHeader && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
						<Heading as="h2" fontFamily="Roboto" fontWeight="bold" size="md" color="white" mb={8}>
							{subHeader}
						</Heading>
					</motion.div>
				)}
			</VStack>
		</Box>
	);
};

export default Hero;
