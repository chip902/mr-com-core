"use client";
import { Box, Text, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect } from "react";

const Footer = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://member.psychologytoday.com/verified-seal.js";
		script.async = true;
		script.setAttribute("data-badge", "13");
		script.setAttribute("data-id", "384337");
		script.setAttribute(
			"data-code",
			"aHR0cHM6Ly93d3cucHN5Y2hvb2d5dG9kYXkuY29tL2FwaS92ZXJpZmllZC1zZWFsL3NlYWxzL1tCQUQyRV0vcHJvZmlsZS9bUFJPX0ZJRUxfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
		);
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Box bg="gray.100" px={4} py={4} boxShadow="xl">
			<Flex align="center">
				<NextLink href="/" passHref legacyBehavior>
					<Link fontWeight="bold" fontSize="xl">
						Marilyn Rifkin, LCSW
					</Link>
				</NextLink>
				<NextLink href="https://www.psychologytoday.com/profile/384337" passHref legacyBehavior>
					<a className="sx-verified-seal" />
				</NextLink>
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
