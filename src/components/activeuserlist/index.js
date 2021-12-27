import React from "react";
import ActiveUserListItem from "../activeuserlistitem";

const userList = [
  {
    username: "Akash",
    socketId: 123,
  },
  {
    username: "Deep",
    socketId: 1234,
  },
  {
    username: "Singh",
    socketId: 12345,
  },
  {
    username: "Sarin",
    socketId: 123456,
  },
];

export default function ActiveUserList() {
  const activeUsers = userList;

  return (
    <div className="active-user-list-container">
      <table>
        <tbody>
          {activeUsers.map((user) => (
            <ActiveUserListItem key={user.socketId} username={user.username} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
