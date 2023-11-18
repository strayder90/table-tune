import Login from "./modules/Access/components/Login";
import Main from "./modules/Main/components/Main";
import ReservationsList from "./modules/Reservations/components/List";
import SignUp from "./modules/Access/components/Signup";

const routes = [
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "main",
    element: <Main />,
  },
  { path: "list", element: <ReservationsList /> },
];

export default routes;
