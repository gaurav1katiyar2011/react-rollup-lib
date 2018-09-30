const tripInformation=(state={},action) =>{
    switch(action.type){
        case 'SET_TRIP_DATA':
        return {
            ...state,
            tripData : action.tripData
        }
        default:
            return state;
      }
    }
export default tripInformation
    