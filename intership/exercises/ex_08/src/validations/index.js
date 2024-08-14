import * as Yup from 'yup'

export const YupValidation = () => {
    return Yup.object({
        email: Yup.string().email('email is invalid').required('Required'),
        password: Yup.string().min(12, "password length can't under 12 character").required('Required')
    })
}