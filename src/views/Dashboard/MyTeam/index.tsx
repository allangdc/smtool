import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { dataContext, IDataContext } from "./dataContext";
import TableHeader from "./tableHeader";
import { getMyTeams, IMyTeams } from "../../../services/myteams";
import { AuthContext } from "../../../authContext";

const MyTeamTable: React.FC = () => {
  const [data, setData] = useState<Array<IMyTeams>>([]);
  const { authUser } = useContext(AuthContext);

  const updateMyTeams = async () => {
    if (authUser) {
      const myteam = await getMyTeams(authUser.id);
      if (myteam) {
        setData(myteam);
      } else {
        setData([]);
      }
    }
  };

  useEffect(() => {
    updateMyTeams();
  }, [authUser]);

  return (
    <div>
      <TableHeader />
      <Divider />
      <Table data={data} />
    </div>
  );
};

export default MyTeamTable;
