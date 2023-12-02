import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { SidebarComponent } from "./Sidebar";

export default function Main() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <div className="menu-buttons">
        <Button content="Menu" onClick={() => setVisible(true)} />
        <Button content="Log out" onClick={handleLogOut} />
        <SidebarComponent visible={visible} setVisible={setVisible} />
      </div>
    </>
  );
}
