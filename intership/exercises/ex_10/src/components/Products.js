import { Product, P, Buy, Img } from './styledCM'
export default function Products({ products }) {
    return (
        products.map((product) => {
            return (
                <Product key={product.id}>
                    <P>{product.name}</P>
                    <P>{product.status}</P>
                    <P>{product.gender}</P>
                    <Img
                        style={{ backgroundImage: `url(${product.image})` }}>
                    </Img>
                    <Buy
                        style={{ color: 'white' }}
                        href={product.url}
                        target={'_blank'}>
                        more info</Buy>
                </Product>
            )
        })

    )
}