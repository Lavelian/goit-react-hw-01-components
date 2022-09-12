import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatsList,
  StatItem,
  ItemLabel,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle> {title} </StatisticsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <ItemLabel>{label}</ItemLabel>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
