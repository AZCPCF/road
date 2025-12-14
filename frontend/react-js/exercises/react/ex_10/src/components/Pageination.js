import { UL, LI, ULParent } from './styledCM'
export default function Pageination({ productsPerPage, totalProducts, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ULParent>

            <UL>
                {pageNumbers.map((number) => {
                    return (
                        <LI  key={number} href={`#page_${number}`} onClick={e => {
                            paginate(number)
                        }}>
                            {number}
                        </LI>
                    )
                })}
            </UL>
        </ULParent>
    )
}
