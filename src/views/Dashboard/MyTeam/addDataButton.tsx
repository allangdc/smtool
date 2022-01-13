import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import MinSquareButton from "../../../components/MinSquareButton";

const AddDataButton: React.FC = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/new");
  };

  return (
    <div>
      <MinSquareButton size={30} onClick={handleOpen}>
        <AddIcon style={{ color: "white" }} />
      </MinSquareButton>
    </div>
  );
};

export default AddDataButton;
