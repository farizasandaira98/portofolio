import { products } from "../libs/products"

const Carousel = () => {
    return (
        <div className="flex lg:flex-row lg:gap-10 flex-col gap-4 items-center justify-center">
            {products.map((product, index) => (
                <div className="carousel-item" key={index}>
                    <img src={product.image} alt={product.alt} width={200} height={200} />
                </div>
            ))}
        </div>
    )
}

export default Carousel