import React, { FC } from "react";
import { Tech } from "../../sections/Skills";
type Props = {
  title: string,
  items: Tech[]
}
const SkillArea: FC<Props> = ({title, items})=>(
  <div>
  <h2 className="text-white text-center">{title}</h2>
  <div className="flex flex-wrap">
    {items.map((item)=><div className="basis-1/3 md:basis-1/4 text-center text-white">{item.image}{item.name}</div>)}
  </div>
  </div>
)

export default SkillArea;
