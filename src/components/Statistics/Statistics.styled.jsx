import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background: #f3f3f3;
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  padding: 10px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ randomColor }) => randomColor};

  color: #ffffff;
  padding: 10px;
`;

export const StatisticsLabel = styled.span``;

export const StatisticsPercentage = styled.span``;

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const RandomColorStatisticsItem = styled(StatisticsItem)`
  background-color: ${generateRandomColor()};
`;
