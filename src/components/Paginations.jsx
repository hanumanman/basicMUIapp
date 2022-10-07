import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Paginations() {
  return (
    <Stack direction="row" spacing={1} mt={3} mb={3}>
      <Chip label="<" variant="outlined" clickable />
      <Chip label="1" variant="outlined" clickable />
      <Chip label="2" clickable color="success" />
      <Chip label="3" variant="outlined" clickable />
      <Chip label="4" variant="outlined" clickable />
      <Chip label=">" variant="outlined" clickable />
    </Stack>
  );
}

export default Paginations;
