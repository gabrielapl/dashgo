import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right" >
            <Text>Gabriel Gxguinho</Text>
            <Text color="gray.300" fontSize="small">
              gabriel@gxguinho.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Gabriel Gxguinho" src="https://github.com/gabrielapl.png" />
    </Flex>
  );
};