import styled from "styled-components";

const StyledDrawer = styled.hr`
      width: '100%';
      height: '1px';
      background-color: ${({theme}) => theme.secondaryBackground};
    `

export const Drawer = (props: any) => {
    return <StyledDrawer {...props} />
}