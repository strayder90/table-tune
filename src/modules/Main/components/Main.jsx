import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { SidebarComponent } from "./Sidebar";

export default function Main() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button content="Menu" onClick={() => setVisible(true)} />
      <SidebarComponent visible={visible} setVisible={setVisible} />
    </>
  );
}
