import React, { memo, useState } from 'react';
import {
    Box,
    ButtonGroup,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    Modal,
    Typography
} from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField, Button } from "@mui/material";
import { Delete, Save } from "@mui/icons-material";
import * as yup from "yup";
// с yup импортируем всё!

const initialValues = {
    firstName: '',
    surName: '',
    age: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    checkboxAgree: false,

}
const FormikPage = () => {
    const [ open, setOpen ] = useState(false);

    // т.к. initialState у нас объект, применяем метод object() и передадим в него его форму с помощью метода .shape()
    // прокинем эту схему в Formik
    const validationSchema = yup.object().shape({
        //    здесь будут все поля, которые были в initialState, все которые нам надо провалидировать
        // name - мы ожидаем строку значит указываем string(), typeError() - ошибка если не строка, в данном случае невозможно,
        // required() - говорит нам о том, что поле обязательно иначе выкенет ошибку - ('required field')
        firstName: yup.string().typeError('should be string').required('required field'),
        surName: yup.string().typeError('should be string').required('required field'),

        // test - проверяет условие переданное в функцию
        age: yup.number().test('', 'age >= 18 && age <= 100', value => value >= 18 && value <= 100).required('required field'),

        password: yup.string().typeError('should be string').required('required field'),

        // confirmPassword должен ссылаться на пароль - должен быть такой-же, для этого в yup есть метод oneOf([],'')
        // Первый параметр - массив, и в нем мы указывает сылку на поле, с которым мы должны сравнивать.
        // Второй - сообщение, которое мы будем передавать, если пароли не будут совпадатью
        // required - указывает на то, что полу обязательно
        confirmPassword: yup.string().typeError().oneOf([ yup.ref('password') ], 'password does not match').required('required field'),

        // email - может содержать сообщение, а также функцию yup в которую мы передадим RegExp, таким образом
        // установить собственные правила валидации формы.
        email: yup.string().email('enter your acting email').required('required field'),

        // также как и в случае с password
        confirmEmail: yup.string().email('enter your acting email').oneOf([ yup.ref('email') ], 'Email does not match').required('required field'),
        checkboxAgree: yup.boolean().required().isTrue()
    })

    // эмуляция Submit с задержкой
    const onSubmit = (values) => {
        console.log(values)
        return new Promise(resolve => setTimeout(resolve, 2000))
            .then(resolve => setOpen(prevState => !prevState))
    }

    return (
        <>
            <Box sx={ { padding: 10 } }>
                <Typography variant={ 'h4' }
                            component={ 'h4' }
                > Formik</Typography>

                <Formik
                    validationSchema={ validationSchema }
                    initialValues={ initialValues }
                    onSubmit={ onSubmit }
                    // validateOnChange={ false }
                    // validateOnChange - валидирует форму при изменении поля, default - true
                    // validateOnBlur={ true }
                    // validateOnBlur - валидирует форму при потери фокуса, default - true
                    // validateOnMount={ false }
                    // validateOnMount - валидирует форму сразу при монтировании, default - false
                >
                    { ({ values, errors, touched, isValid, dirty, isSubmitting }) => (
                        // values - значение данного поля
                        // errors - ошибки
                        // touched - показывает взаимодействовали мы с полем или нет
                        // isValid - говорит нам, валидна ли наша форма в данный момент
                        // dirty - (грязный) чистая форма или нет true/false
                        // isSubmitting - этот показатель показывает, что кнопка Сабмитится (мы повесим его на кнопку)
                        <Form>
                            <CreateField errors={ errors } touched={ touched } type={ 'text' } name={ 'firstName' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'text' } name={ 'surName' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'password' }
                                         name={ 'password' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'password' }
                                         name={ 'confirmPassword' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'number' } name={ 'age' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'email' } name={ 'email' } />
                            <CreateField errors={ errors } touched={ touched } type={ 'email' }
                                         name={ 'confirmEmail' } />

                            <Box sx={ { mt: 3 } }>
                                <FormControlLabel control={ <Field
                                    name={ 'checkboxAgree' }
                                    type={ 'checkbox' }
                                    as={ Checkbox }
                                /> }
                                                  label={ 'I Agree' } />

                            </Box>

                            <ButtonGroup sx={ { width: 400, mt: 2, } }>
                                <Button sx={ { flexGrow: 1 } }
                                    // CircularProgress - preloader нвутри кнопки
                                        startIcon={ isSubmitting ? <CircularProgress size={ '1rem' } /> : <Save /> }
                                        color={ 'secondary' }
                                        variant={ 'contained' }
                                        type={ 'submit' }
                                    // пока isSubmitting === true кнопка будет в isable
                                        disabled={ isSubmitting }
                                >{ isSubmitting ? 'Submitting' : 'Submit' }
                                </Button>
                                <Button sx={ { flexGrow: 1 } }
                                        endIcon={ <Delete /> }
                                        variant={ 'contained' }
                                        color={ 'warning' }
                                        type={ 'reset' }
                                >Reset
                                </Button>
                            </ButtonGroup>
                            <div>
                            </div>
                            <pre>
                            { JSON.stringify({
                                values,
                                errors,
                                touched,
                                isValid,
                                dirty
                            }, null, 5) }
                        </pre>
                        </Form>
                    ) }

                </Formik>

            </Box>
            <AbsoluteComponent open={ open } setOpen={ setOpen } />
        </>
    );

};

export default FormikPage;

// Validation Component
const CreateField = memo(({ errors, touched, type = 'text', name }) => {
    // console.log(name)
    return (
        <div>
            <FormControl sx={ { mt: 5, position: 'relative' } }>
                <Field
                    sx={ { width: 400 } }
                    as={ TextField }
                    name={ name }
                    type={ type }
                    error={ errors[name] && touched[name] && true }
                    helperText={ errors[name] && touched[name] &&
                        <Box component={ "span" }
                             sx={ {
                                 fontSize: '20px',
                                 position: 'absolute',
                                 left: 0,
                                 top: '50px'
                             } }>{ errors[name] }</Box> }
                    label={ errors[name] && touched[name] && 'error' }
                    placeholder={ name }
                />
            </FormControl>
        </div>
    )
})

// todo validation Component does not MUI
// const CustomField = ({ label = 'label', name, type = 'text' }) => {
//     return (
//         <>
//             <label htmlFor={ name }>{ label }</label>
//             <br />
//             <Field name={ name } type={ type } />
//             <ErrorMessage name={ name }>{ message => <div style={ { color: 'red' } }>{ message }</div> }</ErrorMessage>
//         </>
//     )
// }

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
}

const AbsoluteComponent = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={ open }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ style }>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    MODAL WINDOW
                </Typography>
                <Typography id="modal-modal-description" sx={ { mt: 2 } }>
                    GOOD SUBMIT
                </Typography>
            </Box>
        </Modal>
    )
}


// =============================================================================================


