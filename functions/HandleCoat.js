import { CoatArray,ShirtArray } from "../components/DataArrays"
import { useDispatch } from "react-redux";
import {setCurrentType} from '../Store/action';

export const HandleCoat = (currentItems,selectedIndex,setCurrentItems,setCurrentType)=>{

      // coat setting for redux
      switch(currentItems){
        case CoatArray.step1:
          {
            setCurrentItems(CoatArray.step2)
            return 'men_Breasted_coat'
            // dispatch(setCurrentType('men_Breasted_coat',selectedIndex));
          }
            break;
        case CoatArray.step2:
          {
            setCurrentItems(CoatArray.step3)
            return 'men_Lapels_coat'
            // dispatch(setCurrentType('men_Lapels_coat',selectedIndex));
          }
            break;
        case CoatArray.step3:
          {
            setCurrentItems(CoatArray.step4)
            return 'men_Pocket_Types_coat'
            // dispatch(setCurrentType('men_Pocket_Types_coat',selectedIndex));
          }
            break;
        case CoatArray.step4:
          {
            setCurrentItems(CoatArray.step5)
            return 'men_Jacket_Vents_coat'
            // dispatch(setCurrentType('men_Jacket_Vents_coat',selectedIndex));
          }
            break;
        case CoatArray.step5:
          {
            setCurrentItems(CoatArray.step6)
            return 'men_Sleeve_Buttons_coat'
            // dispatch(setCurrentType('men_Sleeve_Buttons_coat',selectedIndex));
          }
            break;
        case CoatArray.step6:
          {
            return 'result';
      
          }
            break;
        default:
          return 'def'
          break;
      }
  

}


export const HandleCoatBack =(currentItems,selectedIndex,setCurrentItems,setCurrentType)=>{
  if(currentItems==CoatArray.step2){
    setCurrentItems(CoatArray.step1)
  }else if(currentItems==CoatArray.step3){
    setCurrentItems(CoatArray.step2)
  }else if(currentItems==CoatArray.step4){
    setCurrentItems(CoatArray.step3)
  }else if(currentItems==CoatArray.step5){
    setCurrentItems(CoatArray.step4)
  }else if(currentItems==CoatArray.step6){
    setCurrentItems(CoatArray.step5)
  }
}