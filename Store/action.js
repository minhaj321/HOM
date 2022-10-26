

    export const setCurrentType = (type,val)=>{
        return{
            type:type,
            val:val
        }
        }

        export const setReset = ()=>{
            return{
                type:'reset',
            }
            }
    

    export const setResult = (type,entry)=>{
        return{
            type:type,
            entry:entry
        }
        }


        export const delItem = (type,val)=>{
            return{
                type:type,
                val:val
            }
            }
    