import { useFormik } from 'formik'
import '../App.css'
import * as Yup from 'yup'
import { Form, Input } from './styledCM'
import { create } from 'apisauce'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const AddUsers = () => {
    const navigate = useNavigate()
    const api = create({ baseURL: "https://655e05a59f1e1093c59a5eef.mockapi.io/api/mmdapi/" })
    const YupValidation = () => {
        return Yup.object({
            username: Yup.string().min(6, "username length can't under 6 character").required('Required'),
            password: Yup.string().min(12, "password length can't under 12 character").required('Required')
        })
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async values => {
            // console.log(a)
            const [username, password] = [JSON.stringify(values.username).replaceAll('"', ''), JSON.stringify(values.password).replaceAll('"', '')]
            const response = await api.post('users', { username: username, password: password }, { timeout: 3000 })
            response.ok ? toast.success('user added ✅') : toast.error(`user didn't add ❌`)
            console.log(response)
        },
        validationSchema: YupValidation()
    })
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'>Username</label><br />
                <Input type='text' placeholder='username' id='username' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} /><br />
                {formik.touched.username && formik.errors.username ? <p style={{ paddingBottom: '20px', color: '#00eaff' }}>{formik.errors.username}</p> : null}
                <label htmlFor='password'>Password</label><br />
                <Input type='password' placeholder='password' id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} /><br />
                {formik.touched.password && formik.errors.password ? <p style={{ color: '#00eaff' }}>{formik.errors.password}</p> : null}
                <Input type="submit" value='Add' style={{ height: '30px' }} />
            </Form>
        </>
    )
}
export default AddUsers