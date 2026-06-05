import React from 'react';
import { Box, Button, Container, Text, Title } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container size="sm" py="xl">
      <Box ta="center">
        <Title order={1} size="h2" mb="md">
          404 - Page Not Found
        </Title>
        <Text size="lg" mb="xl" c="dimmed">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link href="/">
          <Button variant="filled">
            Go Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}