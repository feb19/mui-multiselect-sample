"use client"
import MultiSelectWithChips from "@/components/MultiSelectWithChips";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: 2,
    }}>
      <MultiSelectWithChips />
    </Box>
  );
}
