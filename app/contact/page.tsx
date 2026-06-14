import { Box, Spacer } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Hero from "../Hero";

const Contact = () => {
	return (
		<>
			<Spacer h="80px" />
			<Hero header="Contact Me" />
			<Box maxW="600px" mx="auto" px={4} py={12}>
				<ContactForm />
			</Box>
		</>
	);
};

export default Contact;