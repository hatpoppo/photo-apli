import React from "react";
import { Stack } from "office-ui-fabric-react";
import { PhotoHeader } from "./PhotoHeader";
import { PhotoList } from "./PhotoList";
import { PhotoFooter } from "./PhotoFooter";
export const PhotoApp: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack>
        <PhotoHeader />
        <PhotoList />
        <PhotoFooter />
      </Stack>
    </Stack>
  );
};

export default PhotoApp;
