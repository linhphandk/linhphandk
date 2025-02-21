import React, { forwardRef } from 'react';
import Job from '../components/Job/Job';
const work = [{}, {}, {}, {}]
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const Experience = forwardRef<HTMLElement>((_, ref) => (
	<section ref={ref} className="w-full flex justify-center">
		<div className="max-w-lg lg:max-w-screen-lg">
			<div className="h-15 mb-4 lg:mb-6">
				<h1 className="text-white text-4xl lg:text-6xl lg:text-center" style={{ color: "#D4AFB9" }}>Experience</h1>
			</div>

			<div className="flex flex-col lg:grid gap-2 grid-flow-row auto-cols-auto">
				{work.map((index, _) => (<Job companyName="The org" row={_ + 2} role="Software Engineer" startDate="August 2022" endDate="Current" img="" description={lorem} />))}
			</div>
		</div>
	</section>

))
export default Experience;
