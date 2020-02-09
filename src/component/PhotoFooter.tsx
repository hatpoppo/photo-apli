import React from "react";
import { FilterTypes } from "../store";
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from "office-ui-fabric-react";

import { actions, actionsWithService } from "../actions";
import { connect } from "react-redux";

interface PhotoFooterProps {
  addPhoto: (title: string, id: string) => void;
  setFilter: (filter: FilterTypes) => void;
}
const PhotoFooter = (props: PhotoFooterProps) => {
  return (
    <Stack>
      <Stack></Stack>
    </Stack>
  );
};

export { PhotoFooter };
