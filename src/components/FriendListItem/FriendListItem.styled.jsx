import styled from '@emotion/styled';
export const ItemGallery = styled.li`
  display: flex;
`;
export const Status = styled.span`
  display: flex;
  margin-bottom: auto;
  margin-top: auto;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${status => {
    switch (status.children) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;
export const Img = styled.img``;
export const FriendName = styled.p`
  margin-left: 10px;
`;
