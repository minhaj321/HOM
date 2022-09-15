const initialState = {
    currentType:'',
    men:{
        coat:[-1,-1,-1,-1,-1],
        pant:[-1],
        shirt:[-1,-1,-1,-1,-1,-1,-1,-1],
        waistCoat:[-1],
        princeCoat:[-1],
        sherwani:[-1],
    },
    women:{
        coat:[-1,-1,-1,-1],
        pant:[-1],
        shiry:[-1],
        waistCoat:[-1],
    },
    result:[]
}



 const setData = (state=initialState,action)=>{


    switch (action.type) {
        // coat code start        
        case 'men_Breasted_coat':
            return{
            ...state,
                men:{
                    ...state.men,
                    coat:[action.val,state.men.coat[1],state.men.coat[2],state.men.coat[3],
                    state.men.coat[4]]
                }
        };
        break;
        case 'men_Lapels_coat':
            return{
            ...state,
                men:{
                    ...state.men,
                    coat:[state.men.coat[0],action.val,state.men.coat[2],state.men.coat[3],
                    state.men.coat[4]]
                }
        };
        break;
        case 'men_Pocket_Types_coat':
            return{
            ...state,
                men:{
                    ...state.men,
                    coat:[state.men.coat[0],state.men.coat[1],action.val,state.men.coat[3],
                    state.men.coat[4]]
                }
        };
        break;
        case 'men_Jacket_Vents_coat':
            return{
            ...state,
                men:{
                    ...state.men,
                    coat:[state.men.coat[0],state.men.coat[1],state.men.coat[2],action.val,
                    state.men.coat[4]]
                }
        };
        break;
        case 'men_Sleeve_Buttons_coat':
            return{
            ...state,
                men:{
                    ...state.men,
                    coat:[state.men.coat[0],state.men.coat[1],state.men.coat[2],state.men.coat[3],
                    action.val]
                }
        };
        break;
        // case 'men_Sleeve_Button_Placement_coat':
        //     return{
        //     ...state,
        //         men:{
        //             ...state.men,
        //             coat:[state.men.coat[0],state.men.coat[1],state.men.coat[2],state.men.coat[3],
        //             state.men.coat[4],action.val]
        //         }
        // };
        // break;
        // shirt code start
        case 'men_fit_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[action.val,state.men.shirt[1],state.men.shirt[2],state.men.shirt[3],
                    state.men.shirt[4],state.men.shirt[5],state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_pocket_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],action.val,state.men.shirt[2],state.men.shirt[3],
                    state.men.shirt[4],state.men.shirt[5],state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_sleeve_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],action.val,state.men.shirt[3],
                    state.men.shirt[4],state.men.shirt[5],state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_front_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],state.men.shirt[2],action.val,
                    state.men.shirt[4],state.men.shirt[5],state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_back_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],state.men.shirt[2],
                    state.men.shirt[3],action.val,state.men.shirt[5],state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_Bottom_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],state.men.shirt[2],
                    state.men.shirt[3],state.men.shirt[4],action.val,state.men.shirt[6],state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_Collar_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],state.men.shirt[2],
                    state.men.shirt[3],state.men.shirt[4],state.men.shirt[5],action.val,state.men.shirt[7]
                    ]
                }
        };
        break;
        case 'men_Cuff_shirt':
            return{
            ...state,
                men:{
                    ...state.men,
                    shirt:[state.men.shirt[0],state.men.shirt[1],state.men.shirt[2],
                    state.men.shirt[3],state.men.shirt[4],state.men.shirt[5],state.men.shirt[6],action.val
                    ]
                }
        };
        break;
        case 'reset':
            return{
                ...state,
                men:{
                    coat:[-1,-1,-1,-1,-1],
                    pant:[-1],
                    shirt:[-1,-1,-1,-1,-1,-1,-1,-1],
                    waistCoat:[-1],
                    princeCoat:[-1],
                    sherwani:[-1],
                },
                women:{
                    coat:[-1,-1,-1,-1],
                    pant:[-1],
                    shiry:[-1],
                    waistCoat:[-1],
                },
        };
        break;
        // removing item
        case 'remove_item':
        {
            if(action.val==state.result.length-1){
                state.result.pop();
                return{
                    ...state,
                    result:[...state.result.slice(0,action.val)]
                }

            }else if(action.val==0){
                return{
                    ...state,
                    result:[...state.result.slice(1)]
                }
            }else{
                return{
                    ...state,
                    result:[...state.result.slice(0,action.val),...state.result.slice(action.val+1)]
                }
            }
        }
        break;

        // saving result
        case 'result':
            {
            return{
            ...state,
                result:[...state.result,action.entry]
        }
    }
    ;
        break;

        default:
            return{
                ...state
            }
            break;
    }
}

export default setData;