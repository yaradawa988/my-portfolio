import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

const particlesInit = async (main) => {
await loadFull(main)
}

return (

<Particles
className="fixed top-0 left-0 w-full h-full -z-10"
init={particlesInit}
options={{
background:{color:"transparent"},
fpsLimit:60,
particles:{
number:{value:60},
color:{value:"#3b82f6"},
links:{
enable:true,
color:"#3b82f6",
distance:150
},
move:{enable:true,speed:2},
size:{value:3}
}
}}
/>

)

}

export default ParticlesBackground