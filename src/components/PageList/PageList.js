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
								{
									page !== 0 && <svg className={styles.container__btn_prevImage} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#3C474C" />
									</svg>
								}
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
								<svg className={styles.container__btn_nextImage} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.59 10.59L2 12L8 6L2 0L0.59 1.41L5.17 6L0.59 10.59Z" fill="#3C474C" />
								</svg>
							</button>
						</div>
					</div>
			}
		</div>
	);
};

export default PageList;