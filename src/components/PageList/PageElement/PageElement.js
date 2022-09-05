import React from 'react';
import style from './PageElement.module.css';

const PageElement = ({ elementLaunch }) => {
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
					className={style.page__header_btn}
				>
					-&gt;
				</button>
			</div>
			<div
				className={style.page__info}
			>
				<div
					className={style.page__info_type}
				>
					<span

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
					<span>
						Порт
					</span>
					<span>
						{elementLaunch.rocket.rocket_name}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PageElement;