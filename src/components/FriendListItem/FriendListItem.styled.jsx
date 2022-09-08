import styled from '@emotion/styled';
export const ItemGallery = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  width: 250px;
  padding: 10px;
`;
export const Status = styled.span`
  display: flex;

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
  margin-right: 3px;
`;
export const Img = styled.img`
  margin-right: 10px;
`;
export const FriendName = styled.p`
  /* margin-left: 10px; */
`;
