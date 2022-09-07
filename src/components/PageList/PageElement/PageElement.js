import React from 'react';
import style from './PageElement.module.css';
import arrow from '../../../assets/icon/icon.png';

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
					onClick={()=> setIdCurrent(elementLaunch.id)}
				>
					<img
						className={style.page__header_arrow}
						src={arrow}
					/>
				</button>
			</div>
			<PageElementInfo
				elementLaunch={elementLaunch}
			/>
		</div>
	);
};

export default PageElement;

export const PageElementInfo = ({ elementLaunch }) => {
	return (
		<div
			className={style.page__info}
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



