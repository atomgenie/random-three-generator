import "./App.css"

import {Canvas, SceneProps} from "@react-three/fiber"
import {Ball} from "assets/core/Ball"
import {useCallback, useEffect, useRef} from "react"
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
  const sceneRef = useRef<SceneProps>(null)

  const exportScene = useCallback(() => {
    if (!sceneRef.current) {
      return
    }

    return JSON.stringify(sceneRef.current.toJSON())
  }, [])

  useEffect(() => {
    ;(window as any).exportScene = () => exportScene()

    return () => {
      delete (window as any).exportScene
    }
  }, [exportScene])

  return (
    <StyledRoot>
      <Canvas>
        <scene ref={sceneRef}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Ball />
        </scene>
      </Canvas>
    </StyledRoot>
  )
}
