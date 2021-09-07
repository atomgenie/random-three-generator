import {MeshProps, useFrame} from "@react-three/fiber"
import {useRef} from "react"

export const Ball: React.FC = () => {
  const sphereRef = useRef<MeshProps>(null)

  useFrame((state, delta) => {
    if (!sphereRef.current) {
      return
    }

    sphereRef.current.rotation.x += 0.5 * delta
  })

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  )
}
