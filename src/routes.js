import { SignUp } from "./modules/Access/components/Signup";
import { Main } from "./modules/Main/components/Main";
import { ReservationsList } from "./modules/Reservations/components/List";

const routes = [
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "main",
    element: <Main />,
  },
  { path: "list", element: <ReservationsList /> },
];

export default routes;
