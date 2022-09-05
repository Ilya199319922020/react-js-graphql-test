import React from 'react';

const PageElement = ({elementLaunch}) => {
	
	return (
		<div>
			<div>
				<h6>name</h6>
				<button>
					-&gt;
				</button>
			</div>
			<div>
				<div>
					<span>
						Тип
					</span>
					<span>
					{
					  elementLaunch.mission_name
					}
					</span>
				</div>
				<div>
					<span>
						Порт
					</span>
					<span>
						{elementLaunch.rocket.rocket_name}
					</span>
				</div>
			</div>
			<div>
				линия
			</div>
		</div>
	);
};

export default PageElement;