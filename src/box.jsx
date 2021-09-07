import React, {useRef} from "react";
import { Canvas, useFrame} from "@react-three/fiber";


//scene -> sahne
//geometry -> sekil
//material -> renk
//mesh -> geometry + material
const Box = (props) => {
  const ref=useRef();
  useFrame((state,delta) => (ref.current.rotation.x += 0.01));

  return(
    <mesh {...props} ref= {ref} position={[0,0,0]}>
      <boxGeometry args={[1,1,1]}/>
      <meshBasicMaterial color={'#fff'} />

    </mesh>
  );
};

const App = () => {
  return(
    <Canvas>
      <ambientLight/>
      <pointLight position={[10,10,10]}/>
     <Box position={[-1.2,0,0]}/> 
    </Canvas>
  );
};

export default App;