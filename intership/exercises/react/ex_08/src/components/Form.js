import { useFormik } from 'formik'
import '../App.css'
import { YupValidation } from '../validations'
const Form = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values).replace('{', '').replace('}', '').replaceAll(',', '\n'))
        },
        validationSchema: YupValidation()
    })
    return (
        <form onSubmit={formik.handleSubmit} className={'formik'}>
            <label htmlFor='email'>Email</label><br />
            <input type='email' placeholder='simpleEmail@email.simple' id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} /><br />
            {formik.touched.email && formik.errors.email ? <p style={{ color: 'rgb(0, 234, 255)' }}>{formik.errors.email}</p> : null}
            <label htmlFor='password'>Password</label><br />
            <input type='password' placeholder='password' id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} /><br />
            {formik.touched.password && formik.errors.password ? <p style={{ color: 'rgb(0, 234, 255)' }}>{formik.errors.password}</p> : null}
            <button type="submit">Login</button>
        </form>
    )
}
export default Form