import { product } from "./Product";

export default function Description() {
    return (
        <div style={{
            color: 'rgba(0, 0, 0, .5)'
        }}>
            {product.description}
        </div>
    )
}