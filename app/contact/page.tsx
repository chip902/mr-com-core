// pages/contact.tsx
import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const Contact = () => {
	return (
		<Box p={8} maxW="800px" mx="auto">
			<Heading as="h1" size="2xl" mb={8}>
				Contact Me
			</Heading>
			<VStack as="form" spacing={4}>
				<FormControl id="name" isRequired>
					<FormLabel>Name</FormLabel>
					<Input type="text" placeholder="Your Name" />
				</FormControl>
				<FormControl id="email" isRequired>
					<FormLabel>Email</FormLabel>
					<Input type="email" placeholder="Your Email" />
				</FormControl>
				<FormControl id="message" isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea placeholder="Your Message" />
				</FormControl>
				<Button type="submit" colorScheme="teal" size="lg" mt={4}>
					Send Message
				</Button>
			</VStack>
		</Box>
	);
};

export default Contact;
