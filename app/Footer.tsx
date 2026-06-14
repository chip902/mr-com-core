'use client';

import { Box, Text, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/next-js";
import PsyTodayBadge from "./PsyTodayBadge";

const Footer = () => {
	return (
		<Box bg="gray.100" px={4} py={4} boxShadow="xl">
			<Flex align="center">
				<ChakraLink href="/" fontWeight="bold" fontSize="xl">
					Marilyn Rifkin, LCSW
				</ChakraLink>
				<PsyTodayBadge />
				<Spacer />
				<ChakraLink href="/privacy-policy" mx={2}>
					Privacy Policy
				</ChakraLink>
				<ChakraLink href="/contact" mx={2}>
					Contact
				</ChakraLink>
			</Flex>
			<Flex align="center" mt={4}>
				<Text mx="auto" fontSize="sm">
					&copy; {new Date().getFullYear()} Marilyn Rifkin, LCSW. All rights reserved.
				</Text>
			</Flex>
		</Box>
	);
};

export default Footer;