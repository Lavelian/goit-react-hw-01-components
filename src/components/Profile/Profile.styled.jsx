import styled from '@emotion/styled';

export const Box = styled.div`
  width: 300px;
  text-align: center;
  margin-bottom: 30px;
`;
export const Description = styled.div`
  margin-bottom: 20px;
`;
export const ProfileImg = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const DescriptionInfo = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #d7d7d7;
  padding: 20px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;
export const StatsQuantity = styled.span`
  margin-top: 5px;
`;
export const StatsLabel = styled.span``;
