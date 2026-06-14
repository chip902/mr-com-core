"use client";
import { 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  Heading, 
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, this would call your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Marilyn. She will get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an issue sending your message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={6} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            size="lg"
            borderRadius="full"
            focusBorderColor="brand.500"
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            size="lg"
            borderRadius="full"
            focusBorderColor="brand.500"
          />
        </FormControl>
        
        <FormControl>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            size="lg"
            borderRadius="full"
            focusBorderColor="brand.500"
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your needs or questions..."
            size="lg"
            rows={5}
            borderRadius="lg"
            focusBorderColor="brand.500"
          />
        </FormControl>
        
        <Button
          type="submit"
          variant="solid"
          colorScheme="brand"
          size="lg"
          width="100%"
          py={6}
          borderRadius="full"
          fontSize="lg"
          isLoading={isSubmitting}
          boxShadow="0 8px 25px rgba(0,0,0,0.2)"
          _hover={{
            transform: "translateY(-3px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
            bg: "brand.600"
          }}
          _active={{
            transform: "translateY(0)"
          }}
          transition="all 0.3s ease"
        >
          Send Message
        </Button>
      </VStack>
    </form>
  );
}