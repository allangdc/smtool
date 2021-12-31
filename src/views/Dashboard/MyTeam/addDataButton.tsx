import React, { useContext, useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { Grid, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./style";
import { dataContext } from "./dataContext";
import MinSquareButton from "../../../components/MinSquareButton";
import { IMyTeams } from "../../../services/myteams";

const AddDataButton: React.FC = () => {
  const classes = useStyles();
  const { data, setData } = useContext(dataContext);

  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleClose = () => {
    setOpen(false);
    setName("");
    setDescription("");
  };
  const handleOpen = () => setOpen(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dt = new Array<IMyTeams>(...data);
    setData(dt);
    handleClose();
  };

  return (
    <div>
      <MinSquareButton size={30} onClick={handleOpen}>
        <AddIcon style={{ color: "white" }} />
      </MinSquareButton>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modalContent}>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Add new team</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  className={classes.modalTextField}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Description"
                  variant="outlined"
                  className={classes.modalTextField}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </Grid>
              <Grid container spacing={2} item xs={12}>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.modalButton}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.modalButton}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddDataButton;
