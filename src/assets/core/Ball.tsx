import {MeshProps} from "@react-three/fiber"
import {useRef} from "react"

export const Ball: React.FC = () => {
  const sphereRef = useRef<MeshProps>(null)

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  )
}
