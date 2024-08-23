import { product } from "./Product";

export default function Price() {
    return (
        <div style={{
            color: '#ffb300',
            fontWeight: 'bold',
            fontSize: '1.9rem',
        }}>
            {product.price}
        </div>
    )
}