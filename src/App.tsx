import "./App.css"

import {Canvas} from "@react-three/fiber"
import {Ball} from "assets/core/Ball"
import styled from "styled-components"

/*
 * Styles.
 */

const StyledRoot = styled.div`
  color: white;
  background-color: black;
  height: 100%;
`

/*
 * Component.
 */

export const App: React.FC = () => {
  return (
    <StyledRoot>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Ball />
      </Canvas>
    </StyledRoot>
  )
}
