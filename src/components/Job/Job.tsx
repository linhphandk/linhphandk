import React, {FC} from 'react';
interface IProps {
  row:number,
  companyName: string,
  role: string,
  startDate: string,
  endDate: string,
  img: string,
  description: string
}
const Job:FC<IProps> = ({row,companyName, role, startDate, endDate, img, description})=>(
	<>
    <div className={"lg:text-right whitespace-nowrap col-start-1 row-start-"+row}>
    <div className="whitespace-nowrap text-white">{companyName}</div>
    <div className="whitespace-nowrap text-white">{role}</div>
    <div className="whitespace-nowrap text-white">{startDate} - {endDate}</div>
    <img src={img}/>
    </div>
    <div className={"hidden mx-4 lg:block border-l-solid border-white border-l-1 col-start-2 row-start-"+row}/>
    <div  className={"col-start-3 row-start-"+row}>
    <p className="text-white">{description}</p>
    </div>
    </>
)

export default Job;
