import React, { FC } from "react";
import { Tech } from "../../sections/Skills";
import { HEADLINE3, PARAGRAPH_SMALL } from "../../lib/TailwindConstants";
type Props = {
  title: string,
  items: Tech[]
}
const SkillArea: FC<Props> = ({ title, items }) => (
  <div>
    <h3 className={HEADLINE3 + " text-center mb-5"}>{title}</h3>
    <div className="flex flex-wrap justify-start ">
      {items.map((item) => <div className="basis-1/3 lg:basis-1/6 text-center text-white p-3">{item.image}<p className={PARAGRAPH_SMALL}> {item.name}</p></div>)}
    </div>
  </div>
)

export default SkillArea;
