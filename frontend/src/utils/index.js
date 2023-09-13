import { initialReducer } from "../redux/userSlicer"

export const errorChecker = (userDetail) =>{
    const errors = {}
    Object.entries(userDetail).forEach(([key,value]) => {
        if(!value || value === ''){
            errors[key] = true
        }else{
            errors[key] = false
        }
    })
    return errors
}

export const disableScroll = (disable) =>{
    if(disable){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'visible'
    }
}