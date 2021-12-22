import React from 'react';
import { Box, Typography } from "@mui/material";
import { Form, Formik, Field, ErrorMessage, useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import * as yup from "yup";
// с yup импортируем всё!


// const initialState = {
//     name: '',
// }
// window.__init = initialState
//
// const submit = (value) => {
//     console.log(value)
//     return value.name = '';
// }
//
//
// const FormikPage = () => {
//     // т.к. initialState у нас объект, применяем метод object() и передадим в него его форму с помощью метода .shape()
//     // прокинем эту схему в Formik
//     const validationSchema = yup.object().shape({
//         //    здесь будут все поля, которые были в initialState, все которые нам надо провалидировать
//         // name - мы ожидаем строку значит указываем string(), typeError() - ошибка если не строка, в данном случае невозможно,
//         // required() - говорит нам о том, что поле обязательно иначе выкенет ошибку - ('required field')
//         name: yup.string().typeError('should be string').required('required field')
//     })
//
//     return (
//         <Box sx={ { padding: 10 } }>
//             <Typography variant={ 'h4' }
//                         component={ 'h4' }
//             > Formik</Typography>
//
//             {/*создаём Formik and Form*/ }
//             <Formik
//                 // наша валидационная yup схема
//                 validationSchema={ validationSchema }
//                 initialValues={ initialState }
//                 onSubmit={ submit }>
//                 <Form>
//                     {/*<label htmlFor={ 'name' }>Name</label><br />*/}
//                     {/*<Field name={ 'name' } type={ 'text' } />*/}
//                     {/*<ErrorMessage name={ 'name' }>*/}
//                     {/*    { errorMessage => <div>*/}
//                     {/*        { errorMessage }*/}
//                     {/*    </div> }*/}
//                     {/*</ErrorMessage>*/}
//
//
//                     <button type={ 'submit' }>press</button>
//                 </Form>
//             </Formik>
//
//         </Box>
//     );
// };

// export default FormikPage;

// ==============================================================================================================


// const FormikPage = () => {
//     // т.к. initialState у нас объект, применяем метод object() и передадим в него его форму с помощью метода .shape()
//     // прокинем эту схему в Formik
//     const validationSchema = yup.object().shape({
//         //    здесь будут все поля, которые были в initialState, все которые нам надо провалидировать
//         // name - мы ожидаем строку значит указываем string(), typeError() - ошибка если не строка, в данном случае невозможно,
//         // required() - говорит нам о том, что поле обязательно иначе выкенет ошибку - ('required field')
//         name: yup.string().typeError('should be string').required('required field')
//     })
//
//     const formik = useFormik({
//         initialValues: {
//             name: ''
//         },
//         onSubmit: values => {
//             console.log(JSON.stringify(values))
//             return values.name = ''
//         },
//         validationSchema: validationSchema,
//         validateOnBlur: true
//
//     })
//
//     return (
//         <Box sx={ { padding: 10 } }>
//             <Typography variant={ 'h4' }
//                         component={ 'h4' }
//             > Formik</Typography>
//
//             <form onSubmit={ formik.handleSubmit }>
//                 <TextField
//                     margin={ 'normal' }
//                     name={ 'name' }
//                     label={ 'name' }
//                     type={ 'text' }
//                     value={ formik.values.name }
//                     onChange={ formik.handleChange }
//                     error={ formik.touched.name && Boolean(formik.errors.name) }
//                     helperText={ formik.touched.name && formik.errors.name }
//                 />
//                 <div>
//                     <Button
//                         variant={ 'outlined' }
//                         type={ 'submit' }>Submit
//                     </Button>
//                 </div>
//             </form>
//
//         </Box>
//     );
//
// };

// export default FormikPage;

// ==============================================================================================================


const FormikPage = () => {
    // т.к. initialState у нас объект, применяем метод object() и передадим в него его форму с помощью метода .shape()
    // прокинем эту схему в Formik
    const validationSchema = yup.object().shape({
        //    здесь будут все поля, которые были в initialState, все которые нам надо провалидировать
        // name - мы ожидаем строку значит указываем string(), typeError() - ошибка если не строка, в данном случае невозможно,
        // required() - говорит нам о том, что поле обязательно иначе выкенет ошибку - ('required field')
        name: yup.number().typeError('should be number').required('required field')
    })

    const initialValues = {
        name: ''
    }

    const onSubmit = (value => {
        console.log(value)
        return value.name = ''
    })

    return (

        <Box sx={ { padding: 10 } }>
            <Typography variant={ 'h4' }
                        component={ 'h4' }
            > Formik</Typography>

            <Formik
                validationSchema={ validationSchema }
                initialValues={ initialValues }
                onSubmit={ onSubmit }
                // validateOnChange={ false }
                // validateOnBlur={ false }
                validateOnMount={ false }
            >
                { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form onBlur={ () => false }>
                        <Field
                            as={ TextField }
                            name={ 'name' }
                            type={ 'text' }
                            error={ errors.name && true }
                            helperText={ errors && <span style={ { fontSize: '30px' } }>{ errors.name }</span> }
                            label={ errors.name && 'error' }
                        />

                        <br />
                        <Button color={ 'secondary' }
                                variant={ 'contained' }
                                type={ 'submit' }>Submit
                        </Button>
                        <pre>
                            { JSON.stringify({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                isValid,
                                handleSubmit,
                                dirty
                            }, null, 5) }
                </pre>
                    </Form>
                ) }

            </Formik>

        </Box>
    );

};

export default FormikPage;