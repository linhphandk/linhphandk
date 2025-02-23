import React, { forwardRef } from 'react';
import Portrait from '../../public/about.jpg'
import { HEADLINE1, PARAGRAPH } from '../lib/TailwindConstants';
const About = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="flex justify-center items-center flex-col h-full lg:flex-row lg:justify-between">
    <div className="flex justify-center items-center lg:items-start flex-col h-full basis-1/2 max-w-xl">
      <div className="flex justify-center lg:items-start flex-col max-w-lg">
        <h1 className={HEADLINE1 + " text-center"} style={{ color: "#D4AFB9" }}>About me</h1>
        <p className={PARAGRAPH + " align-center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div className="hidden lg:flex basis-1/2 justify-center items-center lg:justify-end">
      <img className="w-3/4 object-cover aspect-square" src={Portrait} />
    </div>
  </section>
))

export default About;
