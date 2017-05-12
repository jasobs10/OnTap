import React from 'react';
import UpdateUserForm from './user_form';


const UserEditButton = (props) => {
  if (props.currentUserId === props.id) {
    return (
      <div className="user-edit-button" style={{display: "none"}}>
        <button className="user-edit">update</button>
      </div>
    );
  }
  return <div></div>
}

const Update = (props) => {
  if (props.currentUser) {
    if (props.currentUser.id === props.user.id) {
      return (
        <span className="change-photo" onClick={() => {
            props.receiveComponent(<UpdateUserForm
              currentUser={props.currentUser}
              editUser={props.editUser}
              defaultEditUser={props.defaultEditUser}
              activateModal={props.activateModal}
              />);
            props.activateModal(true)}}>
            Update Account
        </span>
      );
    }
  }
  return (<div></div>)
}

export const UserItem = (props) => {
  const checkinCount = props.user.checkinCount > 0 ? props.user.checkinCount : 0;
  const uniqueCheckinCount = props.user.uniqueCheckinCount > 0 ? props.user.uniqueCheckinCount : 0;
  return (
    <div className="beer-item-wrapper user-show-wrapper">
      <div className="user-show-main">
        <div className="user-image">
          <div>
            <img className="user-show-avatar" src={props.user.image_url}/>
          </div>
        </div>
        <div className="user-info">
          <div className="name">
            <span>{props.user.f_name}&nbsp; {props.user.l_name}</span>
            <Update
              receiveComponent={props.receiveComponent}
              currentUser={props.currentUser}
              editUser={props.editUser}
              defaultEditUser={props.defaultEditUser}
              activateModal={props.activateModal}
              user={props.user}
              />
          </div>
          <div className="username">
            {props.user.username}
          </div>
          <div className="state">
            {props.user.state}
          </div>
          <div className="about">
            {props.user.about}
          </div>
        </div>

      </div>
      <div className="user-show-footer">
        <div className="user-statistics">
          <div className="bottom-stats bottom-stats-border">
            <div>
              {checkinCount}
            </div>
            <div>
              Total
            </div>
          </div>
          <div className="bottom-stats">
            <div>
              {uniqueCheckinCount}
            </div>
            <div>
              Unique
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};
