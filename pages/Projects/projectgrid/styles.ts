import styled from 'styled-components';

export const CardFooter = styled.ul`
  list-style: none;
  display: flex;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
`;
export const AvatarItem = styled.span`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #eff2f7 !important;
  img {
    width: 30px;
    height: 30px;
  }
`;
export const Title = styled.h5`
  color: #343a40 !important;
  font-size: 15px;
`;
export const Content = styled.p`
  color: #74788d !important;
  margin-bottom: 1.5rem !important;
  font-size: 15px;
`;
export const ListItem = styled.li`
  margin-right: 6px;
  i {
    font-size: 13px;
    color: #495057;
    font-style: normal;
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AvatarGroupItem = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: -10px;
  border: 3px solid #fff;
`;
