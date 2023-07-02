const intitalState = {
    comp1:"",
    comp2:"",
};
const data = (state = intitalState,action) =>{
    switch (action.type) {
        case "comp1":
          state = {
            ...state,
            comp1: action.info,
          };
          break;
      }
      return state;
}
export default data;