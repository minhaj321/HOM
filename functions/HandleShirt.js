import { CoatArray,ShirtArray } from "../components/DataArrays"
import { useDispatch } from "react-redux";
import {setCurrentType} from '../Store/action';

export const HandleShirt =(currentItems,selectedIndex,setCurrentItems,setCurrentType,reduxData)=>{

    console.log("yes")
      // coat setting for redux
      switch(currentItems){
        case ShirtArray.step1:
          {
        setCurrentItems(ShirtArray.step2)
        return 'men_fit_shirt'
        // dispatch(setCurrentType('men_fit_shirt',selectedIndex));
          }
            break;
        case ShirtArray.step2:
          {
            setCurrentItems(ShirtArray.step3)
        return 'men_pocket_shirt'
        // dispatch(setCurrentType('men_pocket_shirt',selectedIndex));
          }
            break;
        case ShirtArray.step3:
          {
        setCurrentItems(ShirtArray.step4)
        return 'men_sleeve_shirt'
        // dispatch(setCurrentType('men_sleeve_shirt',selectedIndex));
  
          }
            break;
        case ShirtArray.step4:
          {
        setCurrentItems(ShirtArray.step5)
        return 'men_front_shirt'
        // dispatch(setCurrentType('men_front_shirt',selectedIndex));
          }
            break;
        case ShirtArray.step5:
          {
        setCurrentItems(ShirtArray.step6)
        return 'men_back_shirt'
        // dispatch(setCurrentType('men_back_shirt',selectedIndex));
          }
            break;
        case ShirtArray.step6:
          {
        setCurrentItems(ShirtArray.step7)
        return 'men_Bottom_shirt'
        // dispatch(setCurrentType('men_Bottom_shirt',selectedIndex));
  
          }
            break;
        case ShirtArray.step7:
          {
        setCurrentItems(ShirtArray.step8)
        return 'men_Collar_shirt'
        // dispatch(setCurrentType('men_Collar_shirt',selectedIndex));
          }
            break;
        case ShirtArray.step8:
          {
            if(reduxData.men.shirt[1]!=0){
              {
                setCurrentItems(ShirtArray.step9)
                return 'men_Cuff_shirt'
                // dispatch(setCurrentType('men_Cuff_shirt',selectedIndex));
                  }
            }else{
                setCurrentItems(ShirtArray.step9)
                return 'resultPasssed'
            }
          }
            break;
        case ShirtArray.step9:
          {
            return 'result'
          }
            break;
        default:
          return 'def'
          break;
      }
    

}


export const HandleShirtBack =(currentItems,selectedIndex,setCurrentItems,setCurrentType)=>{

  if(currentItems==ShirtArray.step9){
    setCurrentItems(ShirtArray.step8)
  }else if(currentItems==ShirtArray.step8){
    setCurrentItems(ShirtArray.step7)
  }else if(currentItems==ShirtArray.step7){
    setCurrentItems(ShirtArray.step6)
  }else if(currentItems==ShirtArray.step6){
    setCurrentItems(ShirtArray.step5)
  }else if(currentItems==ShirtArray.step5){
    setCurrentItems(ShirtArray.step4)
  }else if(currentItems==ShirtArray.step4){
    setCurrentItems(ShirtArray.step3)
  }else if(currentItems==ShirtArray.step3){
    setCurrentItems(ShirtArray.step2)
  }else if(currentItems==ShirtArray.step2){
    setCurrentItems(ShirtArray.step1)
  }
}