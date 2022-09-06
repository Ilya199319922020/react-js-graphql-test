import React from 'react';
import style from './FilterPage.module.css';

const FilterPage = () => {
	return (
		<div
			className={style.container}
		>
			<div
				className={style.sidebar}
			>
				<h5
					className={style.sidebar__header}
				>
					Фильтры
				</h5>
				<div
					className={style.sidebar__inputName}
				>
					<input
						className={style.sidebar__inputName_item}
						placeholder={'Название'}
						type={'input'}
					/>
				</div>
				<div
					className={style.sidebar__inputCheckbox}
				>
					<input
						className={style.sidebar__inputCheckbox_item}
						placeholder={'Порт'}
						type={'input'}
					/>
					<div
						className={style.sidebar__inputActive}
					>
						<Input
							type={'checkbox'}
						>
							Port Canavel
						</Input>
						<Input
							type={'checkbox'}
						>
							Port of Los Angeles
						</Input>
						<Input
							type={'checkbox'}
						>
							Fort Lauderdale
						</Input>
					</div>
				</div>
				<div
					className={style.sidebar__inputRadio}
				>
					<span
						className={style.sidebar__inputRadio_text}
					>
						Тип
					</span>
					<div
						className={style.sidebar__inputRadio_element}
					>
						<Input
							type={'radio'}
						>
							Barge
						</Input>
						<Input
							type={'radio'}
						>
							Cargo
						</Input>
						<Input
							type={'radio'}
						>
							High Speed Craft
						</Input>
						<Input
							type={'radio'}
						>
							TugInput
						</Input>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterPage;

const Input = ({ children, active, value, id, onChange, type }) => {
	return (
		<div
			className={style.input}
		>
			<input
				className={style.input__item}
				type={type}
				checked={value}
				id={id}
				onChange={onChange}
			/>
			<div
				className={style.input__text}
			>
				{
					children
				}
			</div>
		</div>
	);
};




