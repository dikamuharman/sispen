import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function WidgetCount({ title, jumlah }) {
  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      maxW="500px"
      bgColor="blue.500"
      color="white"
      borderRadius="2xl"
      p={16}
    >
      <Heading as="h2" size="lg" textAlign="center">
        {title}
      </Heading>
      <Text fontSize="100px" fontWeight="bold">
        {jumlah}
      </Text>
    </Flex>
  );
}
