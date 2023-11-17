import Register from "./modules/Access/components/Register";
import Main from "./modules/Main/components/Main";
import ReservationsList from "./modules/Reservations/components/List";

const routes = [
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "main",
    element: <Main />,
  },
  { path: "list", element: <ReservationsList /> },
];

export default routes;
