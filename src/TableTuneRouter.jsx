import { useRoutes } from "react-router-dom";

import routes from "./routes";

export default function TableTuneRouter() {
  const appRoutes = useRoutes(routes);

  return appRoutes;
}
