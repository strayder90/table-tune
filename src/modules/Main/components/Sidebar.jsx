import React from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

export const SidebarComponent = ({ visible, setVisible }) => {
  return (
    <>
      <Sidebar.Pusher>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="calendar alternate outline" />
            Events
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="users" />
            Crew
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic></Segment>
        </Sidebar.Pusher>
      </Sidebar.Pusher>
    </>
  );
};
