import React from "react";
import { User } from "../typings/interfaces";
import { ListGroup } from "react-bootstrap";

const UserItem = ({ key, user }: { key: string; user: User }) => {
  return (
    <button>
      <ListGroup.Item>{user.username}</ListGroup.Item>
    </button>
  );
};

export default UserItem;
