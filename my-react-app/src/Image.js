import { product } from "./Product";

export default function Image() {
    return (
        <img
            src={product.image} 
            alt="visuel du produit" 
            style={{
                width: "100%",
                borderRadius: "10px",
                border: '1px solid rgba(0, 0, 0, .1)'
            }}
        />
    )
}