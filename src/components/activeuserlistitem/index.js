import React from "react";

export default function ActiveUserListItem(props) {
  return (
    <tr className="active_user_list_item" onClick={props.onClickHandler}>
      <td> {props.username} </td>
    </tr>
  );
}
