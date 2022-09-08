import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-bottom: 15px;
`;
export const StatisticsTitle = styled.h2`
  margin-bottom: 15px;
`;
export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  background-color: ${prop => getRandomHexColor()};
  padding: 20px;
`;

export const ItemLabel = styled.span`
  margin-bottom: 5px;
`;
export const Percentage = styled.span``;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
