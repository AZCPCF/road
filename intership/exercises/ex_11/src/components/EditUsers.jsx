import React, { useEffect, useState } from 'react'
import { Table } from './styledCM'
import { create } from 'apisauce'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [first, setFirst] = useState(true)
    const api = create({ baseURL: "https://655e05a59f1e1093c59a5eef.mockapi.io/api/mmdapi/" })
    const getUsers = async (id, type) => {
        if (type === 'get') {
            const response = await api.get('users')
            setUsers(response.data)
            if (first === true) {
                response.ok ? toast.success('users got ✅') : toast.error(`users didn't get ❌`)
                setFirst(false)
            }
        } else if (type === 'delete') {
            const response = await api.delete(`users/${id}`)
            response.ok ? toast.success('user deleted ✅') : toast.error(`user didn't delete ❌`)
            getUsers(null, 'get')
        }
    }
    useEffect(() => { getUsers(null, 'get') }, [])
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
            <Table style={{ marginLeft: '500px' }}>
                <thead style={{ background: 'rgb(0, 234, 255)' }}>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr style={{ position: "relative", bottom: "1px" }} key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td><button style={{ borderRadius: '4px', border: 'unset' }} onClick={() => navigate(`/editPage/${user.id}`)}>edit</button></td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </>
    )
}
