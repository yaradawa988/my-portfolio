import Lottie from "lottie-react"
import animationData from "../assets/animations/developer.json"

function DeveloperAvatar(){

return(

<div className="w-[420px]">

<Lottie
animationData={animationData}
loop={true}
/>

</div>

)

}

export default DeveloperAvatar