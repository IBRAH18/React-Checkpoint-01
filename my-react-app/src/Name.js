import { product } from "./Product";

export default function Name() {
    return (
        <div style={{
            color: 'green',
            fontWeight: 'bold',
            fontSize: '1.5rem',
        }}>
            {product.name}
        </div>
    )
}