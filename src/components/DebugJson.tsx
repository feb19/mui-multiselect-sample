// src/components/DebugJson.tsx
"use client";

import React, { FC } from "react";
import { Box } from "@mui/material";

interface Props {
  value: unknown;
  maxHeight?: number;
}

const DebugJson: FC<Props> = ({ value, maxHeight = 160 }) => (
  <Box
    component="pre"
    sx={{
      fontSize: 12,
      mt: 2,
      p: 1,
      bgcolor: "#f7f7f7",
      borderRadius: 1,
      overflow: "auto",
      maxHeight,
    }}
  >
    {JSON.stringify(value, null, 2)}
  </Box>
);

export default DebugJson;
