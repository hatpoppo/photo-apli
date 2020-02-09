import React from "react";
import { Stack } from "office-ui-fabric-react";
import { PhotoHeader } from "./PhotoHeader";
import { PhotoList } from "./PhotoList";
export const PhotoApp: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack>
        <PhotoHeader />
        <PhotoList />
      </Stack>
    </Stack>
  );
};

export default PhotoApp;
