import {useEffect, useState} from 'react';
import classes from "../modules/Categories.module.scss";
import layout from '../modules/Layout.module.scss'

const Categories = () =>  {
	const [categories, setCategories] = useState([
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing"
	]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then(res=>res.json())
			.then(json=>setCategories(json))
	}, []);


	return <>
		<section className={`${classes['categories-wrapper']} ${layout['container']}`}>
			<nav>
				<ul>
					{categories.map((category, index) => (
						<li key={index}>{category}</li>
					))}
				</ul>
			</nav>
		</section>
	</>
};

export default Categories;