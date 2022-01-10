import React, { useEffect, useRef, useState } from "react";
import { Modal, Typography, Paper, TextField } from "@mui/material";
import { useStyles } from "./style";

interface Props {
  onEnterValue: (value: string) => void;
  onChangeModal: (isOpen: boolean) => void;
}

const DefButton: React.FC<Props> = (props: Props) => {
  const { onEnterValue, onChangeModal } = props;
  const classes = useStyles();
  const [openTagModal, setOpenTagModal] = useState<boolean>(false);
  const [tagValue, setTagValue] = useState<string>("");
  const inputRef = useRef<HTMLSpanElement>(null);

  const handleOpen = () => {
    setTagValue("");
    setOpenTagModal(true);
  };
  const handleClose = () => {
    setOpenTagModal(false);
  };

  useEffect(() => {
    if (onChangeModal) {
      onChangeModal(openTagModal);
    }
  }, [openTagModal]);

  const OnSubmitEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tagValue !== "") {
      onEnterValue(tagValue);
    }
    handleClose();
  };

  return (
    <>
      <Typography
        ref={inputRef}
        variant="body1"
        className={classes.defButton}
        onClick={handleOpen}
      >
        Def
      </Typography>
      <Modal open={openTagModal} onClose={handleClose}>
        <form onSubmit={OnSubmitEnter}>
          <Paper
            className={classes.inputModal}
            style={{
              top: inputRef.current
                ? inputRef.current.offsetTop + 110
                : undefined,
              left: inputRef.current?.offsetLeft
            }}
          >
            <TextField
              value={tagValue}
              autoFocus
              onChange={(e) => setTagValue(e.target.value)}
              className={classes.textFieldModal}
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 30,
                  padding: "0 10px"
                }
              }}
            />
          </Paper>
        </form>
      </Modal>
    </>
  );
};

export default DefButton;
