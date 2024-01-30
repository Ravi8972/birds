export const addBird =(bird)=>{
    return {
        type:'ADD_BIRD',
        payload :{
            name:bird,
            likes:0
        }
    };
};

export const increaseLike = (index)=>{
    return{
        type:"Increase_Like",
        payload:index
    };
};