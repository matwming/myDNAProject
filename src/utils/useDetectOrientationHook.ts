import {useEffect, useState} from "react";
import {Dimensions,Platform} from "react-native";

export type IDeviceMode = 'Portrait'|'Landscape';

const useDetectOrientationHook = ():IDeviceMode => {
    const {width,height} = Dimensions.get('screen');
    const result:IDeviceMode = width > height?'Portrait':'Landscape';
    const [currentMode,setCurrentMode] = useState<IDeviceMode>(result);
    useEffect(() => {
        const onOrientationChangeHandler=(e:any)=>{
            const currentWidth = e?.screen?.width;
            const currentHeight = e?.screen?.height;
            if(currentWidth > currentHeight){
                return setCurrentMode(()=>'Portrait')
            }
            return setCurrentMode(()=>'Landscape');
        }
        Dimensions.addEventListener('change',onOrientationChangeHandler);
        return ()=>Dimensions.removeEventListener('change',onOrientationChangeHandler);
    })
    return currentMode;
};

export default useDetectOrientationHook;
