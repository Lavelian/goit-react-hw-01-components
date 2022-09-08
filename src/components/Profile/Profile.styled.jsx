import styled from '@emotion/styled';

export const Container = styled.div`
  width: 200px;
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
export const StatsList = styled.ul``;
export const StatsItem = styled.li`
  :not(:first-of-type) {
    margin-left: 10px;
  }
`;
export const StatsQuantity = styled.span`
  margin-left: 10px;
`;
export const StatsLabel = styled.span``;
