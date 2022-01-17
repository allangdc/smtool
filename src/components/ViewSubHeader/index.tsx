import { Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
}

const ViewSubHeader: React.FC<Props> = (props: Props) => {
  const { title } = props;

  return (
    <Typography variant="body1" align="center" style={{ padding: 20 }}>
      {title}
    </Typography>
  );
};

export default ViewSubHeader;
