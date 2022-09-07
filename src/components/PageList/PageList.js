import React, { useEffect } from 'react';
import PageCard from './PageCard/PageCard';
import PageElement from './PageElement/PageElement';
import styles from './PageList.module.css';

const PageList = ({
	elements, page, setPage, pageElement,
	dispatch, setIdCurrent, idCurrent
}) => {

	const listLaunch = elements && elements
		.map(el => <PageElement
			key={el.id}
			elementLaunch={el}
			setIdCurrent={setIdCurrent}
		/>
		);

	const pageElementItem = pageElement.length && pageElement
		.map(e => <PageCard
			key={e.id}
			element={e}
			setIdCurrent={setIdCurrent}
			idCurrent={idCurrent}
		/>
		);

	useEffect(() => {
		if (idCurrent) {
			dispatch({
				type: 'currentId', value: {
					id: idCurrent,
					elements: elements,
				}
			});
		}

	}, [idCurrent]);

	return (
		<div
			className={styles.container}
		>
			{
				idCurrent
					? pageElementItem
					: <div>
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
			}
		</div>
	);
};

export default PageList;