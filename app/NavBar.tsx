'use client';

import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";

const Navbar = () => {
	return (
		<Box bg="gray.100" px={40} py={2} boxShadow="lg" as="nav" position="fixed" width="100%" zIndex="10">
			<Flex align="center">
				<ChakraLink href="/" fontWeight="bold" fontSize="xl">
					Marilyn Rifkin, LCSW
				</ChakraLink>
				<Spacer />
				<Flex justify="space-evenly">
					<ChakraLink href="/about" variant="linkNav" mx={2} fontSize="xl">
						About
					</ChakraLink>
					<ChakraLink href="/contact" variant="linkNav" mx={2} fontSize="xl">
						Contact
					</ChakraLink>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;