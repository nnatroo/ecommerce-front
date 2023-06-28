import React, {useEffect, useState} from 'react';
import classes from "../modules/Categories.module.scss";

const Categories = (props) =>  {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then(res=>res.json())
			.then(json=>setCategories(json))
	}, []);


	return <>
		<section className={classes['categories-wrapper']}>
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