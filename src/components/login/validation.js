import * as Yup from 'yup';

const schema = Yup.object({
  email: Yup.string()
    .email('Enter email valid')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

export default schema;
