import React from 'react';
import { PageElementInfo } from '../PageElement/PageElement';
import style from '../PageElement/PageElement.module.css';

const PageCard = ({ element, setIdCurrent, idCurrent }) => {

	return (
		<div
			className={style.pageCard}
		>
			<div
				className={style.pageCard__block}
			>
				<button
					className={style.pageCard__block_btn}
					onClick={() => setIdCurrent(0)}
				>
					<svg className={style.pageCard__block_btnArrow} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.66667 4.41665L2.5675 4.41665L5.82834 1.15581L5 0.333313L0.333336 4.99998L5 9.66665L5.8225 8.84415L2.5675 5.58331L9.66667 5.58331V4.41665Z" fill="#2962FF" />
					</svg>
					Вернуться
				</button>
			</div>
			<div
				className={style.pageCard__name}
			>
				{
					element.mission_name
				}
			</div>
			<PageElementInfo
				elementLaunch={element}
				idCurrent={idCurrent}
			/>
			<div
				className={style.pageCard__block_info}
			>
				<div
					className={style.pageCard__block_heft}
				>
					<span
						className={style.pageCard__block_heftItem}
					>
						Вес
					</span>
					<span>
						{element.id} кг
					</span>
				</div>
				<div
					className={style.pageCard__block_year}
				>
					<span
						className={style.pageCard__block_yearItem}
					>
						Год
					</span>
					<span>
						{element.launch_year}
					</span>
				</div>
			</div>
			<div
				className={style.pageCard__block_mission}
			>
				<h6
					className={style.pageCard__block_missionHeader}
				>
					Миссиии
				</h6>
				<div
					className={style.pageCard__block_missionText}
				>
					{
						element.links.article_link
					}
				</div>
			</div>
		</div>
	);
};

export default PageCard;