import Header from "../components/Header.jsx";
import Categories from "../components/Categories.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";
import classes from "../modules/Products.module.scss";
import layout from "../modules/Layout.module.scss";
import {Link} from "react-router-dom";

const Products = () =>  {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, []);

    const clickHandler = (product) => {
        console.log(product)
    }

    return <>
        <Header />
        <Categories />
        <div className={`${classes['products-list']} ${layout['container']}`}>
            {products.map((product, index) => (
                <Link to={`/product/${product.id}`} onClick={() => clickHandler(product)} key={index} className={`${classes['product-wrapper']} ${layout['container']}`}>
                    <img src={product.image} alt="" />
                    <span>{product.category}</span>
                    <h2>{product.title.slice(0, 30)}...</h2>
                    <h3>{product.price} $</h3>
                </Link>
            ))}
        </div>
        <Footer />
    </>
}

export default Products;