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
      <StatisticsTitle>{title ? title : null}</StatisticsTitle>
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
