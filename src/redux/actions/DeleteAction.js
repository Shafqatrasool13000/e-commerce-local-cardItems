import {Delete_Todo} from "../types"
const DeleteAction = (id)=> {
    return  {
        type : Delete_Todo,
        id:id,
    }
}
export default DeleteAction;