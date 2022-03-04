import React from "react";
import { Box, Text } from "../Theme";

export const BoxPrimary = () => {

  return (
    <Box
      backgroundColor="primaryCardBackground"
      margin="s"
      padding="m"
      flexGrow={1}
      >
        <Text variant="body" color="primaryCardText">
          Primary Box
        </Text>
    </Box>
  );
}

export const BoxSecundary = () => {
  return (
    <Box
      backgroundColor="secondaryCardBackground"
      margin="s"
      padding="m"
      flexGrow={1}
    >
      <Text variant="body" color="secondaryCardText">
        Secondary Box
      </Text>
    </Box>
  );
}