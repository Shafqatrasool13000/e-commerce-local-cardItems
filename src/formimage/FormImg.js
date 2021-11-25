import React,{useState} from 'react'

function FormImg({file}) {
    const [preview, setPreview] = useState(null)
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreview(reader.result)
    }
    return (
        <>
            {
                preview &&
                <img src={preview} alt='notshow' width='150px' height='150px' />
            }
        </>
    )
}

export default FormImg
