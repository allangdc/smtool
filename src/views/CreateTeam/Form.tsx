import React, { useContext } from "react";
import { AuthContext } from "../../authContext";
import { addMyTeams, IMyTeams } from "../../services/myteams";
import { DataStatesCtx } from "./DataStatesContent";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const {
    description,
    teamName,
    teamWebsite,
    teamType,
    chipItems,
    isOpenModal
  } = useContext(DataStatesCtx);
  const { authUser } = useContext(AuthContext);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authUser && !isOpenModal) {
      const data: IMyTeams = {
        description,
        name: teamName,
        user_id: authUser.id,
        website: teamWebsite,
        teamtype: teamType,
        tags: chipItems
      };
      await addMyTeams(data);
      console.table(data);
      alert("SUCESSO");
    }
  };

  return <form onSubmit={onSubmitForm}>{children}</form>;
};

export default Form;
