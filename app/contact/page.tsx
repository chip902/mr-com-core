import { Spacer } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Navbar from "../NavBar";
import Hero from "../Hero";

const Contact = () => {
	return (
		<>
			<Navbar />
			<Spacer h="80px" />
			<Hero header="Contact Me" />
			<ContactForm />
		</>
	);
};

export default Contact;
