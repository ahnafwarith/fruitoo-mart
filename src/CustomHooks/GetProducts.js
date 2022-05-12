import { useEffect, useState } from "react";

const GetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://warm-island-53330.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
}

export default GetProducts;