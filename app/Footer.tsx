import { Box, Text, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import PsyTodayBadge from "./PsyTodayBadge";

const Footer = () => {
	return (
		<Box bg="gray.100" px={4} py={4} boxShadow="xl">
			<Flex align="center">
				<NextLink href="/" passHref legacyBehavior>
					<Link fontWeight="bold" fontSize="xl">
						Marilyn Rifkin, LCSW
					</Link>
				</NextLink>
				<PsyTodayBadge />
				<Spacer />
				<NextLink href="/privacy-policy" passHref legacyBehavior>
					<Link mx={2}>Privacy Policy</Link>
				</NextLink>
				<NextLink href="/contact" passHref legacyBehavior>
					<Link mx={2}>Contact</Link>
				</NextLink>
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
