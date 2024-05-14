import { Tooltip, Zoom } from "@mui/material";
import React from "react";

interface CustomTooltipProps {
  title: string;
  children: React.ReactElement;
}

export default function CustomTooltip({ title, children }: CustomTooltipProps) {
  return (
    <Tooltip
      title={title}
      TransitionComponent={Zoom}
      PopperProps={{
        sx: {
          ".MuiTooltip-tooltip": {
            backgroundColor: "#161716",
            fontFamily: "var(--font)",
            color: "white",
            padding: "10px",
            textTransform: "lowercase",
            "&:hover": {
              color: "var(--accent)",
            },
          },
          "&:hover": {
            color: "var(--accent)",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}
