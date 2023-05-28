import styled from '@emotion/styled';

export const FriendListBox = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  border-radius: 5%;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const FriendStatusOnline = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
`;
export const FriendStatusOffline = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;
export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10%;
`;
export const FriendName = styled.p`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;
