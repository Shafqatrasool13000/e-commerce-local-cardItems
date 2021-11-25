import React , {useRef} from 'react';
import { Formik,Form,Field,FieldArray } from 'formik';
import InputField from "../formik/InputField";
import * as Yup from 'yup';
function FormikValidation() {
   const fileRef = useRef(null)
   const uploadImge = () =>{
       fileRef.current.click()
   }
    return (
        <>
        <h1>FormikValidation</h1>
        <Formik initialValues={{
            name : "",
            phone : "",
            password : "",
            gender : "",
            social : {
                Facebook : "",
                Instagram : "",
            },
            hobbies : [],
            file: "",
        }} onSubmit={(values)=>{console.log("values",values);}}>
            {({values , setFieldValue})=>(
                <Form>
                <input hidden type="file" ref={fileRef} onChange={(e)=>{
                      setFieldValue ("file" , e.target.files[0])
                }}/> <br/> <br/>
               { values.file && <InputField file={values.file}/>}
                <button onClick={uploadImge}>Upload Image</button><br/> <br/>
                <label>Name:</label>
                <Field name = "name" type="text"/> <br/> <br/>
                <label>phone:</label>
                <Field name = "phone" type="number"/> <br/> <br/>
                <label>password:</label>
                <Field name = "password" type="password"/> <br/> <br/>
                <label>Gender:</label><br/> <br/>
                <label>Male:</label>
                <Field name = "gender" value="male" type="radio"/> 
                <label>Female:</label>
                <Field name = "gender" value="female" type="radio"/> <br/> <br/>
                <label>Income:</label>
                <Field name = "income" as="select">
                    <option value="0">Rs/-100</option>
                    <option value="1000">Rs/-1000</option>
                    <option value="10000">Rs/-10000</option>
                </Field> <br/> <br/>
                <label>social:</label><br/> <br/>
                <label>Facebook:</label>
                <Field name = "social.Facebook" type="text"/> <br/> <br/>
                <label>Instagram:</label>
                <Field name = "social.Instagram" type="text"/> <br/> <br/>
                {/* FIELD ARRAY */}
                <FieldArray
             name="hobbies"
             render={arrayHelpers => (
               <div>
                 {values.hobbies && values.hobbies.length > 0 ? (
                   values.hobbies.map((hobby, index) => (
                     <div key={index}>
                       <Field name={`friends.${index}`} />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                    Add Hobbies
                   </button>
                 )}
               </div>
             )}
           /> <br/>
                <button type="submit">Submit</button>
            </Form>
            )}
            
        </Formik>
        </>
    )
}
export default FormikValidation;