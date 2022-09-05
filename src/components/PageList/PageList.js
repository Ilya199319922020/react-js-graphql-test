import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ELEMENT } from '../../graphql/query';
import PageElement from './PageElement/PageElement';
import styles from './PageList.module.css';

const PageList = () => {
	const [page, setPage] = useState(0);
	const [elements, setElements] = useState([])
	const PAGE_SIZE = 5;

	const { data, loading, error } = useQuery(GET_ELEMENT, {
		variables: {
			limit: PAGE_SIZE,
			offset: page * PAGE_SIZE
		}
	});

	useEffect(() => {
		if (!loading) {
			setElements(data)
		}
	}, [data])

	const listLaunch = elements.launchesPast?.map(el => <PageElement
		key={el.id}
		elementLaunch={el}
	/>
	);

	return (
		<div
			className={styles.container}
		>
			<h4
				className={styles.container__header}
			>
				SpaceX Ships
			</h4>
			<div
				className={styles.container__list}
			>
				{
					elements
						? listLaunch
						: <span>Loading...</span>
				}
			</div>
			<div
				className={styles.container__btn}
			>
				<button
					className={styles.container__btn_prev}
					disabled={!page}
					onClick={() => setPage(prev => prev - 1)}
				>
					<div>
						&lt;
					</div>
				</button>
				<span
					className={styles.container__btn_page}
				>
					{page + 1}
				</span>
				<button
					className={styles.container__btn_next}
					onClick={() => setPage(prev => prev + 1)}
				>
					<div>
						&gt;
					</div>
				</button>
			</div>
		</div>
	);
};

export default PageList;