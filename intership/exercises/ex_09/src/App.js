import { HeaderDiv, Link } from './components/styledCM'
import React, { useState } from 'react'
import Modal from './components/Modal'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FirstTime from './pages/FirstTime'
export default function App() {
    const [isOpen, setIsOpen] = useState(true)
    const [page, setPage] = useState(-1)
    const handleModalButton = () => {
        setIsOpen(false)
    }
    return (
        <div onClick={e => setIsOpen(false)}>
            <HeaderDiv>
                <Link
                    onClick={e => {
                        e.stopPropagation()
                        setIsOpen(true)
                        setPage(0)
                    }}
                >About us</Link>
                <Link
                    onClick={e => {
                        e.stopPropagation()
                        setIsOpen(true)
                        setPage(1)
                    }}
                >Contact us</Link>
            </HeaderDiv>
            <Modal open={isOpen} setIsOpen={handleModalButton}>
                {page === -1 ? <FirstTime/> : page === 1 ? <ContactUs /> : page === 0 ? <AboutUs setPagee={() => setPage(1)} /> : null}
            </Modal>
        </div>
    )
}
