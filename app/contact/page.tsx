import { Spacer } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Hero from "../Hero";

const Contact = () => {
	return (
		<>
			<Spacer h="80px" />
			<Hero header="Contact Me" />
			<ContactForm />
		</>
	);
};

export default Contact;
