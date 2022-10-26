import React from 'react';
import {Image} from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';

// eighth
export const CoatArray={
    step1:{
        title:'Single Breasted Five Buttons',
        tags:['Notch Lapel','Notch Lapel','Notch Lapel','Notch Lapel','Notch Lapel','Notch Lapel',
        'Notch Lapel','Notch Lapel','Notch Lapel','Notch Lapel'],
        images:[ 
            <Image source={require('./../assets/mencoatvectorpng/coat1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat5.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat9.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/mencoatvectorpng/coat10.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
    ]
    },    
    step2:{
        title:'',
        tags:['Notch Lapels','Peak Lapels','Shawl Lapels'],
        images:[
        <Image source={require('./../assets/Group81.png')}
        style={{resizeMode:'contain',height:'135%',width:'135%'}}
        />,
        <Image source={require('./../assets/Group82.png')}
        style={{resizeMode:'contain',height:'135%',width:'135%'}}
        />,
     <Image source={require('./../assets/Group83.png')}
     style={{resizeMode:'contain',height:'135%',width:'135%'}}
     />,    ]
    },
    step3:{
        title:'Suite Jacket Pocket Types',
        tags:['Patch Pocket','Ticket Pocket','Angled Pocket','Flap Pocket','Jetted Pocket'],
        images:[
            <Image source={require('./../assets/1.png')}
            style={{resizeMode:'contain',height:'120%',width:'120%'}}
            />,
            <Image source={require('./../assets/2_1.png')}
            style={{resizeMode:'contain',height:'120%',width:'120%'}}
            />,
            <Image source={require('./../assets/3_1.png')}
            style={{resizeMode:'contain',height:'120%',width:'120%'}}
            />,
            <Image source={require('./../assets/4_1.png')}
            style={{resizeMode:'contain',height:'120%',width:'120%'}}
            />,
            <Image source={require('./../assets/5_1.png')}
            style={{resizeMode:'contain',height:'120%',width:'120%'}}
            />,
    ]
},
    step4:{
        title:'Suit Jacket Vents',
        tags:['No Vent','Single Vent','Double Vent'],
        images:[
            <Image source={require('./../assets/ventsection4/300ppi/vent1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/ventsection4/300ppi/vent2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/ventsection4/300ppi/vent3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
    ]
},
    step5:{
        title:'Suit Jacket Sleeve Buttons',
        tags:['One Button','Two Button','Three Button','Four Button','Five Button'],
        images:[
            <Image source={require('./../assets/Group77.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/Group45.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/Group49.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/Group52.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/Group54.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            ],
    },
    step6:{
        title:'Sleeve Button Placement Styles',
        tags:['Spaced','Kissing','Stacked'],
        images:[
        <Image source={require('./../assets/Group56.png')}
        // style={{transform:[{scale:0.5}]}}
        style={{resizeMode:'contain',height:'100%',width:'100%'}}
         />,
         <Image source={require('./../assets/Group62.png')}
         style={{resizeMode:'contain',height:'100%',width:'100%'}}
         />,
        <Image source={require('./../assets/Group64.png')}
        style={{resizeMode:'contain',height:'100%',width:'100%'}}
         />,
    ]
}
};

// ninth
export const ShirtArray={
    step1:{
        title:'Fit Style',
        tags:['Classic fit','Modern fit','Slim fit'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtfitsection1/1.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtfitsection1/2.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtfitsection1/3.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />]
    },
    step2:{
        title:'Pocket Style',
        tags:['None fit','Both','Left'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtpocketsection2/1.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketsection2/2.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketsection2/3.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />]

    },
    step3:{
        title:'Shirt Sleeve Style',
        tags:['Full Sleeve','Half Sleeve'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtsleevestylesection3/1.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtsleevestylesection3/2.png')}
            style={{resizeMode:'contain',height:'115%',width:'115%'}}
            />]
    },
    step4:{
        title:'Front',
        tags:['Box Placket','French Placket','Covered Placket','Slip Over'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtfrontsection4/1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtfrontsection4/2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtfrontsection4/3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtfrontsection4/4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />
        ]
    },
    step5:{
        title:'Back',
        tags:['Plain','Back Darts','Centre Folds','Side Folds'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtbacksection5/1.png')}
            style={{resizeMode:'contain',height:'110%',width:'110%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtbacksection5/2.png')}
            style={{resizeMode:'contain',height:'110%',width:'110%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtbacksection5/3.png')}
            style={{resizeMode:'contain',height:'110%',width:'110%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtbacksection5/4.png')}
            style={{resizeMode:'contain',height:'110%',width:'110%'}}
            />
        ]
    },
    step6:{
        title:'Bottom',
        tags:['Round','Straight','Straight Side Cut'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtbottomsection6/1.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtbottomsection6/2.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtbottomsection6/3.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />
        ]
    },
    step7:{
        title:'Collar Style',
        tags:['Classic','Button Down','Classic','Classic','Classic','Classic','2 Button Collar',
              'Wing Tip','Club Collar','Traditional Band','Chisel Collar','Camp Collar'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/1_9.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/2_8.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/3_7.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/4_5.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/5_3.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/6.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/7.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/8_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/9.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/10_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/11_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcollarsection7/12_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />
        ]
    },
    step8:{
        title:'Cuff Style',
        tags:['1 Button','1 Button Rounded','1 Button Notched','2 Button','2 Button Rounded',
              '2 Button Notched','French','French Rounded','French Contoured'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/1_10.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/2_9.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/3_8.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/4_6.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/5_4.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/6_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/7_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/8_2.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtcuffsection8/9_1.png')}
            style={{resizeMode:'contain',height:'130%',width:'130%'}}
            />
        ]
    },
    step9:{
        title:'unknown',
        tags:['one','tow','three','four','five','six','seven','eight'],
        images:[
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/1_11.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/2_10.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/3_9.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/4_7.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/5_5.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/6_2.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/7_2.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />,
            <Image source={require('./../assets/shirtcategory/shirtpocketstylesection9/8_3.png')}
            style={{resizeMode:'contain',height:'140%',width:'140%'}}
            />
        ]
    },

}

// seventh
export const womenCoatArray={
    step1:{
        title:['Single Breasted Two Buttons','Single Breasted One Button',
        'Single Breasted Three Buttons','Single Breasted Five Buttons',
        'Double Breasted Four Buttons','Single Breasted Four Buttons',
        'Double Breasted Six Buttons','Single Breasted One Button',
    ],
    // title:'Single Breasted Two Buttons',
        tags:['Notch Lapel','Notch Lapel','Notch Lapel','Notch Lapel','2 to Close',
            'Bal Collar','3 to Close','Shawl Lapel'],
        images:[
            <Image source={require('./../assets/womencoat/1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/3.1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/4.1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/5.1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womencoat/8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,

        ]
    },
}

// sixth
export const menprincecoat = {
    step1:{
        title:'',
        tags:['One','Two','Three','Four','Five','Six'],
        images:[
            <Image source={require('./../assets/menprincecoat/princecoat1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menprincecoat/princecoat2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menprincecoat/princecoat3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menprincecoat/princecoat4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menprincecoat/princecoat5.png')}
            style={{resizeMode:'contain',height:'110%',width:'110%'}}
            />,
            <Image source={require('./../assets/menprincecoat/princecoat6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
    
        ]        
    }

}
// fourth
export const mensherwani={
    step1:{
        title:'',
        tags:['One','Two','Three','Four','Five','Six','Seven','Eight'],
        images:[
            <Image source={require('./../assets/mensherwani/sherwani1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani5.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
            <Image source={require('./../assets/mensherwani/sherwani8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,   
        ]
    }
}

// fifth
export const menWaistCoat={
    step1:{
        title:['SB,5 Button',
        'SB,6 Button',
        'SB,5 Button',
        'SB,4 Button,horseshoe',
        'SB,5 Button',
        'SB,4 Buttons,horseshoe',
        'DB 6 x 3 shawl lapel',
        'DB 8x4 peak lapel',
    ],
        
        tags:['with points',
        'with points',
        'lapel with points',
        'with points',
        'straight bottom',
        'straight bottom',
        'straight bottom',
        'straight bottom ',
    ],
        images:[
            <Image source={require('./../assets/menWaistCoat/1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/5.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/menWaistCoat/8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
        ]
}
}

// third
export const womenShirt = {
    step1:{
        tags:['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen'],
        title:'',
        images:[
            <Image source={require('./../assets/womenShirt/womenshirt1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt5.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt9.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt10.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt11.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt12.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  
            <Image source={require('./../assets/womenShirt/womenshirt13.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,  

        ]
    }
}

// second
export const womenWaist = {
    step1:{
        title:'',
        tags:['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'],
        images:[
            <Image source={require('./../assets/womenWaist/1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/2_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/3_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/4_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/5_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/6_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/7_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/8_1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/9.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/10.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/11.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenWaist/12.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,

        ]
    }
}

// first
export const menPant = {
    step1:{
        title:'',
        tags:['One','Two','Three','Four'],
        images:[
            <Image source={require('./../assets/menPant/pant1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menPant/pant2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menPant/pant3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/menPant/pant4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,

        ]
    }
}

// tenth
export const womenPant = {
    step1:{
        title:'',
        tags:['Straight','Skinny','Boot-cut','flare','wide leg',"pegged",'Stirrup','5-pocket jeans','bush pants','cargo pants','sailor pants','jodhpurs','sweat pants','harem','palazzo','carpenter/overall','jumpsuit','hot pants','skart'],
        images:[
            <Image source={require('./../assets/womenPant/pant1.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant2.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant3.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant4.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant5.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant6.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant7.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant8.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant9.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant10.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant11.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant12.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant13.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant14.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant15.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant16.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant17.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant18.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
            <Image source={require('./../assets/womenPant/pant19.png')}
            style={{resizeMode:'contain',height:'100%',width:'100%'}}
            />,
        ]
    }
}