import React from 'react'
import { PageElementInfo } from '../PageElement/PageElement'

const PageCard = ({ element, setIdCurrent }) => {
	return (
		<div>
			<div>
				<button
					onClick={() => setIdCurrent(0)}
				>
					Вернуться
				</button>
			</div>
			<div>
				header
			</div>
			<PageElementInfo
				elementLaunch={element}
			/>
			<div>
				<div>
					<span>
						Вес
					</span>
					<span>
						...
					</span>
				</div>
				<div>
					<span>
						Год
					</span>
					<span>
						....
					</span>
				</div>
			</div>
			<div>
				<h6>
					Миссиии
				</h6>
				<p>
					.....
				</p>
			</div>
		</div>
	)
}

export default PageCard