
export const incNumber = (x) => {
    return {
      type :"INCREMENT",
       ind : x
    }
  }
  
  export const decNumber = (x) => {
      return {
          type :"DECREMENT",
          ind : x
          
        }
    }