import { Canvas } from "@react-three/fiber"
import { OrbitControls, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useMemo } from "react"

function Stars(){

const positions = useMemo(()=>{

const arr = new Float32Array(5000)

for(let i=0;i<5000;i++){

arr[i] = (Math.random()-0.5)*10

}

return arr

},[])

return(

<Points positions={positions} stride={3}>

<PointMaterial
transparent
color="#60a5fa"
size={0.02}
sizeAttenuation
/>

</Points>

)

}

function Background3D(){

return(

<div className="fixed inset-0 -z-10">

<Canvas camera={{position:[0,0,1]}}>

<Stars/>

<OrbitControls
enableZoom={false}
autoRotate
autoRotateSpeed={0.5}
/>

</Canvas>

</div>

)

}

export default Background3D