import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "../../../components/Table";
import TableHeader from "./tableHeader";
import { deleteMyTeams, getMyTeams, IMyTeams } from "../../../services/myteams";
import { AuthContext } from "../../../authContext";
import { IDataType } from "../../../components/Table/datatype";

const MyTeamTable: React.FC = () => {
  const [data, setData] = useState<Array<IDataType>>([]);
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateMyTeams = async () => {
    if (authUser) {
      const myteam: IMyTeams[] | null = await getMyTeams(authUser.id);
      if (myteam) {
        setData(
          myteam.map((item) => {
            const dt: IDataType = {
              id: item.id,
              name: item.name,
              description: item.description
            };
            return dt;
          })
        );
      } else {
        setData([]);
      }
    }
  };

  useEffect(() => {
    updateMyTeams();
  }, [authUser]);

  const onDeleteTableClick = async (myteamID: string) => {
    const ret = await deleteMyTeams(myteamID);
    if (ret) {
      const newDt = data.filter((item) => item.id !== myteamID);
      setData(newDt);
    }
  };

  const onEditTableClick = (myteamID: string) => {
    navigate(`/smtool/edit/${myteamID}`);
  };

  return (
    <div>
      <TableHeader />
      <Divider />
      <Table
        data={data}
        onDeleteClick={onDeleteTableClick}
        onEditClick={onEditTableClick}
      />
    </div>
  );
};

export default MyTeamTable;
