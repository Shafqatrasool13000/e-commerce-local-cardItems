import {Add_Todo }from "../types"
const AddAction = (data) => {
    return {
        type : Add_Todo,
        payload : {
            data : data
        }
    }
}
export default AddAction;