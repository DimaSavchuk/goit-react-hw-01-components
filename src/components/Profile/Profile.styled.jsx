import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Tag = styled.p`
  color: #888888;
  font-size: 20px;
  margin: 0px;
`;

export const Location = styled.p`
  color: #888888;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 0px;
  border-radius: 5px;
  list-style: none;
`;

export const StatsItem = styled.li`
  flex-basis: 30%;
  text-align: center;
  border-right: 1px solid #ccc;
  :last-child {
    border-right: none;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px 20px;
`;

export const StatsLable = styled.span`
  color: #888;
  font-size: 14px;
`;

export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
