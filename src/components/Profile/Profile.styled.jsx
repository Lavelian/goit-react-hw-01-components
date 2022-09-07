import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfileImg = styled.img`
  width: 150px;
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
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:first-of-type) {
    margin-left: 10px;
  }
`;
export const StatsQuantity = styled.span`
  //   margin-left: 10px;
`;
export const StatsLabel = styled.span``;
