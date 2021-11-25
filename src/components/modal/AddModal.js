import * as React from 'react';
import Modal from '@mui/material/Modal';
import * as Yup from 'yup'
import { Typography, Button, Box} from '@mui/material';
import { Formik } from 'formik';
import TextFields from '../textfields/TextFields';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DescriptionIcon from '@mui/icons-material/Description';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FormImg from '../../formimage/FormImg';
import {useDispatch } from 'react-redux';
import AddAction from '../../redux/actions/AddAction';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues = {
    name: '',
    description: '',
    price: '',
    file: null
  }
  const validate = Yup.object({
    name: Yup.string().required('Required'), description: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    file: Yup.mixed().required('Required ')
  })
  return (
    <div>
      <Button onClick={handleOpen} color='inherit'>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={values => {
            const reader = new FileReader();
            reader.readAsDataURL(values.file)
            let data = null
            reader.onload = () => {
              data = reader.result
              if (data) {
                values = { ...values, file: data }
                dispatch(AddAction(values))
                } else {
                console.log("Nothing to show")
              }
            }
            //  const reader = new FileReader();
            //  reader.readAsDataURL(values.file)
            //  reader.onload = () => {
            //    setTimeout(() => {
            //      setPreview(reader.result)
            //      console.log('Preview')   
            //    }, 10);  
          }
            //  if(preview){
            //   values={...values,file:preview}
            //   dispatch(AddAction(values))
            //   console.log(values)    
            //  }else{
            //    console.log("Nothing to show")
            //  }
            // }
          }
            validationSchema={validate}>
            {formik => <Box component='form' onSubmit={formik.handleSubmit}>
              <Typography variant='h4' fontWeight='bold'>
                Add Product
              </Typography>
              <Box mt={2}>
                <TextFields label="Name"
                  placeholder='Enter Product Name'
                  name='name'
                  value={formik.values.name}
                  type='text'
                  onblur={formik.handleBlur}
                  icon={ProductionQuantityLimitsIcon}
                  onchange={formik.handleChange} />
                <Box my={2}>{formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}</Box>
                <TextFields label="Description"
                  name='description'
                  placeholder='Enter description'
                  type='text'
                  value={formik.values.description}
                  onchange={formik.handleChange}
                  onblur={formik.handleBlur}
                  icon={DescriptionIcon}
                />
                <Box my={2}>{formik.touched.description && formik.errors.description && <span style={{ color: 'red' }}>{formik.errors.description}</span>}</Box>
                <TextFields label="Price"
                  name='price'
                  placeholder='Price'
                  type='number'
                  value={formik.values.price}
                  onblur={formik.handleBlur}
                  icon={MonetizationOnIcon}
                  onchange={formik.handleChange} />
                <Box my={2}>{formik.touched.price && formik.errors.price && <span style={{ color: 'red' }}>{formik.errors.price}</span>}</Box>
                {/* Image Upload logic */}
                <div>
                  <input id="file" name="file" type="file" onChange={event => formik.setFieldValue('file', event.target.files[0])
                  } />
                </div>
                <Box my={2}>
                  {
                    formik.values.file &&
                    <FormImg file={formik.values.file} />
                  }
                </Box>
                <Box mt={3}>
                  <Box mr={3} component='span' >
                    <Button disabled={!formik.isValid} variant='contained' type='submit'>
                      Save
                    </Button>
                  </Box>
                  <Box mr={3} component='span'>
                    <Button variant="contained" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            }
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}











































