import React, { useState } from 'react';
export default function Form2(props) {
    const styles = {
        form: {
            background: props.bg, color: props.color, fontSize: props.fSize,
            width: props.width, margin: props.formMargin, display: props.display,
            flexDirection: props.flexDirection, justifyContent: props.justifyContent,
            borderRadius: props.formBorderRadius, boxShadow: props.boxShadow
        },
        p: { margin: props.margin, paddingTop: props.paddingTop },
        input: {
            borderRadius: props.borderRadius, margin: props.margin,
            border: props.border, height: props.height
        }
    }
    // styles
    const [inputValues, setInputValues] = useState({ email: '', password: '', isDisabled: true })
    const validate = () => !(inputValues.password.length >= 7 && inputValues.email.includes('@'))
    return (
        <form style={styles.form} onSubmit={e => e.preventDefault() + console.log(`email : ${inputValues.email} \npassword : ${inputValues.password}`)}>
            <p style={styles.p}>email : </p>
            <input style={styles.input}
                placeholder='email'
                type="email"
                value={inputValues.email}
                onChange={e => setInputValues({ ...inputValues, email: e.target.value, isDisabled: validate() })} />
            <p style={styles.p}>password : </p>
            <input style={styles.input}
                placeholder='password'
                type="password"
                value={inputValues.password}
                onChange={e => setInputValues({ ...inputValues, password: e.target.value, isDisabled: validate() })} />
            <br />
            <button style={styles.input} type="submit" disabled={inputValues.isDisabled}>
                Submit
            </button>
        </form>
    )
}
