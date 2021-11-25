import React , {useState} from 'react'

const InputField = ( {file}) => {
    const [imagePreview , setimagePreview] = useState();
    const reader =  new FileReader();
    reader.readAsDataURL(file);
    reader.onload =() => {
        setimagePreview(reader.result);
    }
    return (
        <div>
           {imagePreview ? <img src={imagePreview} alt="preview" width="100px" height="100px"/> : "Loading..."}
        </div>
    )
}

export default InputField;
