import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { dataContext, IDataContext } from "./dataContext";
import TableHeader from "./tableHeader";
import { getMyTeams, IMyTeams } from "../../../services/myteams";

const MyTeamTable: React.FC = () => {
  const [data, setData] = useState<Array<IMyTeams>>([]);

  const updateMyTeams = async () => {
    const myteam = await getMyTeams();
    setData(myteam);
  };

  useEffect(() => {
    updateMyTeams();
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const valueDataContext: IDataContext = {
    data,
    setData
  };

  return (
    <dataContext.Provider value={valueDataContext}>
      <div>
        <TableHeader />
        <Divider />
        <Table data={data} />
      </div>
    </dataContext.Provider>
  );
};

export default MyTeamTable;
