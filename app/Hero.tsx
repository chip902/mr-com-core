import { Box, Heading } from "@chakra-ui/react";

const Hero = () => {
	return (
		<Box bgImage="url('/waterfall.webp')" bgSize="cover" bgPosition="center" height="70vh" display="flex" justifyContent="center" alignItems="center">
			<Heading as="h1" size="2xl" color="white">
				Marilyn Rifkin, LCSW
			</Heading>
		</Box>
	);
};

export default Hero;
