import {Updated_Todo} from "../types"
const EditAction = ({id , data}) => {
    return {
        type : Updated_Todo,
        data : data,
        id:id,
    }
}
export default EditAction;