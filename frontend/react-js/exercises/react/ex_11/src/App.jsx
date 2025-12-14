import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddUsers from './components/AddUsers';
import Users from './components/Users';
import NotFound from './components/NotFound';
import EditUsers from './components/EditUsers';
import EditPage from './components/EditPage';
const App = () => {
    // const [users, setUsers] = useState([])
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                    </>
                } />
                <Route path="/users" element={
                    <>
                        <Header />
                        <Users/>
                    </>
                } />
                <Route path="/addUser" element={
                    <>
                        <Header />
                        <AddUsers/>
                    </>
                } />
                <Route path="/editUsers" element={
                    <>
                        <Header />
                        <EditUsers/>
                    </>
                } />
                <Route path="/editPage/:id" element={
                    <>
                        {/* <Header /> */}
                        <EditPage/>
                    </>
                } />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    )
};
export default App