import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext";
import { addMyTeams, IMyTeams, updateMyTeams } from "../../services/myteams";
import { DataStatesCtx } from "./DataStatesContent";

interface Props {
  children: React.ReactNode;
  editModeID?: string;
}

const Form: React.FC<Props> = (props: Props) => {
  const { children, editModeID } = props;
  const {
    description,
    teamName,
    teamWebsite,
    teamType,
    chipItems,
    isOpenModal
  } = useContext(DataStatesCtx);
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authUser && !isOpenModal) {
      const data: IMyTeams = {
        id: editModeID || "",
        description,
        name: teamName,
        uid: authUser.id,
        website: teamWebsite,
        type: teamType,
        tag: chipItems.map((item) => item.label)
      };
      if (!editModeID) {
        await addMyTeams(data);
        alert("Criado");
      } else {
        await updateMyTeams(data);
        alert("Atualizado");
      }
      console.table(data);
      navigate("/");
    }
  };

  return <form onSubmit={onSubmitForm}>{children}</form>;
};

export default Form;
