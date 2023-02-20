import { useEffect,useState } from "react";


const useRwd = () => {
    const [userDevice,setUserDevice] = useState("computer")
    const handleRwd = ()=>{
        const userweight = window.innerWidth
        
        if(userweight > 600){
            setUserDevice("computer")
        }
        else{
            setUserDevice("phone")
        }
        console.log(userweight)
        console.log(userDevice)
    }

    useEffect(()=>{
        document.addEventListener("resize",handleRwd)
        handleRwd()
        return()=>{document.addEventListener("resize",handleRwd)}
    },[])

    return userDevice
}
export default useRwd;