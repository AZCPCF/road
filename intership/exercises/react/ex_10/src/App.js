import Products from './components/Products'
import { useState, useEffect } from 'react'
import { create } from 'apisauce'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsCM } from './components/styledCM'
import Pageination from './components/Pageination'
const App = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(4)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const api = create({ baseURL: 'https://rickandmortyapi.com' })
    const getData = async () => {
        const response = await api.get('/api/character/')
        setLoading(false)
        setProducts(response.data.results)
        response.ok ? toast.success('Promise resolved ✅') : toast.error('Promise rejected ❌')
    }
    useEffect(() => {getData()}, [])

    return (
        <>
            {loading ? <h1>loading...</h1> :
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

                    <ProductsCM>
                        <Products products={products.slice(currentPage * productsPerPage - productsPerPage, currentPage * productsPerPage)} />
                        <Pageination productsPerPage={productsPerPage} totalProducts={products.length} paginate={(pageNumber) => setCurrentPage(pageNumber)} />
                    </ProductsCM>
                </>
            }
        </>
    )
}

export default App