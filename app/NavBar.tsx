// components/Navbar.js
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
	return (
		<Box bg="gray.100" px={4} py={2} boxShadow="md">
			<Flex align="center">
				<NextLink href="/" passHref legacyBehavior>
					<Link fontWeight="bold" fontSize="xl">
						Marilyn Rifkin, LCSW
					</Link>
				</NextLink>
				<Spacer />
				<NextLink href="#about" passHref legacyBehavior>
					<Link mx={2}>About</Link>
				</NextLink>
				<NextLink href="#services" passHref legacyBehavior>
					<Link mx={2}>Services</Link>
				</NextLink>
				<NextLink href="#contact" passHref legacyBehavior>
					<Link mx={2}>Contact</Link>
				</NextLink>
			</Flex>
		</Box>
	);
};

export default Navbar;
