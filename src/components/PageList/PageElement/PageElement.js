import React from 'react';
import style from './PageElement.module.css';

const PageElement = ({ elementLaunch, handlerPage, setIdCurrent }) => {

	return (
		<div
			className={style.page}
		>
			<div
				className={style.page__header}
			>
				<h6
					className={style.page__header_item}
				>

					{
						elementLaunch.mission_name
					}
				</h6>
				<button
					id={elementLaunch.id}
					className={style.page__header_btn}
					onClick={() => setIdCurrent(elementLaunch.id)}
				>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={style.page__header_arrow} xmlns="http://www.w3.org/2000/svg">
						<path d="M0 9L12.17 9L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7L0 7L0 9Z" fill="#2962FF" />
					</svg>
				</button>
			</div>
			<PageElementInfo
				elementLaunch={elementLaunch}
			/>
		</div>
	);
};

export default PageElement;

export const PageElementInfo = ({ elementLaunch, idCurrent }) => {
	return (
		<div
			className={idCurrent ? style.page__info_active : style.page__info}
		>
			<div
				className={style.page__info_type}
			>
				<span
					className={style.page__info_typeHeader}
				>
					Тип
				</span>
				<span>
					{
						elementLaunch.mission_name
					}
				</span>
			</div>
			<div
				className={style.page__info_location}
			>
				<span
					className={style.page__info_locationPort}
				>
					Порт
				</span>
				<span>
					{
						elementLaunch.rocket.rocket_name
					}
				</span>
			</div>
		</div>
	);
};



