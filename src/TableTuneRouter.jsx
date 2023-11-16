import { useRoutes } from "react-router-dom";

import routes from "./routes";

const TableTuneRouter = () => {
  const appRoutes = useRoutes(routes);

  return appRoutes;
};

export default TableTuneRouter;
