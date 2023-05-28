import React from 'react';
import PropTypes from 'prop-types';

import {
  FriendListBox,
  FriendStatusOnline,
  FriendStatusOffline,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <FriendListBox>
      {isOnline ? <FriendStatusOnline /> : <FriendStatusOffline />}
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendListBox>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
