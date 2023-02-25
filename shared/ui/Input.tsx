import styled from "styled-components"

const StyledInput = styled.input`
  color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 15px;
  padding-right: 15px;
`

export const Input = (props: any) => {
    return <StyledInput {...props} />
}
