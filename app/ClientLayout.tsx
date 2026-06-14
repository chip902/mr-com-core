"use client";
import "./globals.css";
import { font } from "./font";
import { Box, useColorMode } from "@chakra-ui/react";
import { Providers } from "./providers";
import PrivacyBanner from "./PrivacyBanner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { colorMode } = useColorMode();
  
  return (
    <html lang="en" className={font.roboto.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Marilyn Rifkin, LCSW - Psychotherapy and Psychoanalysis" />
        <meta name="keywords" content="psychotherapy, psychoanalysis, mental health, therapy, san francisco" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <Box as="main" minH="100vh">
            {children}
            <PrivacyBanner />
          </Box>
        </Providers>
      </body>
    </html>
  );
}