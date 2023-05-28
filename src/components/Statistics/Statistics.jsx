import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
  RandomColorStatisticsItem,
} from './Statistics.styled';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <RandomColorStatisticsItem key={id}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </RandomColorStatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
