import React, { FC, forwardRef, ReactElement } from 'react';
import HTMLIcon from '../../public/icons/html.svg'
import CSSIcon from '../../public/icons/css.svg'
import JSIcon from '../../public/icons/js.svg'
import TSIcon from '../../public/icons/ts.svg'
import JavaIcon from '../../public/icons/java.svg'
import PythonIcon from '../../public/icons/python.svg'
import JestIcon from '../../public/icons/jest.svg'
import DjangoIcon from '../../public/icons/django.svg'
import ReactIcon from '../../public/icons/react.svg'
import NextIcon from '../../public/icons/nextjs.svg'
import ReduxIcon from '../../public/icons/redux.svg'
import CyperssIcon from '../../public/icons/cypress.svg'
import WebpackIcon from '../../public/icons/webpack.svg'
import DockerIcon from '../../public/icons/docker.svg'
import StyledIcon from '../../public/icons/styled.svg'
import StorybookIcon from '../../public/icons/storybook.svg'
import GraphqlIcon from '../../public/icons/graphql.svg'
import PostgresIcon from '../../public/icons/postgres.svg'
import SkillArea from '../components/SkillArea/SkillArea';
import { HEADLINE1 } from '../lib/TailwindConstants';
export type Tech = {
  name: string,
  image: ReactElement
}
export type Area = {
  title: string;
  items: Tech[]
}
const a: Area = {
  title: "Languages",
  items: [
    { name: "HTML", image: <HTMLIcon /> },
    { name: "HTML", image: <CSSIcon /> },
    { name: "HTML", image: <JSIcon /> },
    { name: "HTML", image: <TSIcon /> },
    { name: "HTML", image: <JavaIcon /> },
    { name: "HTML", image: <PythonIcon /> },
  ]
}
const b: Area = {
  title: "Libraries and Frameworks",
  items: [
    { name: "React.js", image: <ReactIcon /> },
    { name: "NextJS", image: <NextIcon /> },
    { name: "Redux", image: <ReduxIcon /> },
    { name: "Styled components", image: <StyledIcon /> },
    { name: "Jest", image: <JestIcon /> },
    { name: "Cyperess", image: <CyperssIcon /> },
    { name: "Django", image: <DjangoIcon /> },
    { name: "Storybook", image: <StorybookIcon /> },

  ]
}
const c: Area = {
  title: "Other tools",
  items: [
    { name: "Webpack", image: <WebpackIcon /> },
    { name: "Postgres", image: <PostgresIcon /> },
    { name: "Docker", image: <DockerIcon /> },
    { name: "GraphQL", image: <GraphqlIcon /> },
  ]
}
const Skills = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="flex justify-center items-center flex-col lg:flex-row py-4">
    <div className="flex flex-col">

      <h1 className={HEADLINE1 + " text-center"} style={{ color: "#D4AFB9" }}>Skills</h1>
      <div className="flex flex-col gap-10">      {[a, b, c].map((skill) => <SkillArea title={skill.title} items={skill.items} />)}
      </div>

    </div>
  </section>
))

export default Skills;
