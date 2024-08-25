import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Container
