import React from "react";
import { Stack, Text } from "office-ui-fabric-react";
import { PhotoHeader } from "./PhotoHeader";
export const PhotoApp: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack>
        <PhotoHeader />
      </Stack>
    </Stack>
  );
};

export default PhotoApp;
