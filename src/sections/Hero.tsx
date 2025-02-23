import React, { forwardRef } from 'react';
import DownIcon from '../../public/down.svg'
import Portrait from '../../public/portrait.jpg'
import { HEADLINE1, HEADLINE3, PARAGRAPH } from '../lib/TailwindConstants';
const Hero = forwardRef<HTMLButtonElement>((_, ref) => (
  <section ref={ref} className="flex justify-center items-center flex-col h-full lg:flex-row lg:justify-between">
    <div className="flex justify-center items-center lg:items-start flex-col h-full basis-1/2 lg:max-w-xl">
      <div className="flex justify-center items-center lg:items-start flex-col max-w-lg">
        <h3 className={HEADLINE3} style={{ color: "#D4AFB9" }}>Thach Linh Phan</h3>
        <h1 className={HEADLINE1}>Software
          Engineer</h1>
        <p className={PARAGRAPH + " text-center lg:text-left"}>Passionate software engineer building usable, scalable solutions. Experienced in Java, TypeScript, Next.js, and Python, with a focus on reliability, testability,</p>
      </div>
    </div>
    <div className="hidden lg:flex basis-1/2 justify-center items-center lg:justify-end">
      <img className="w-3/4 object-cover aspect-square" src={Portrait} />
    </div>
    <div className="absolute bottom-4 w-8 inset-x-1/2 -translate-x-1/2"><DownIcon />
    </div>

  </section>
))

export default Hero;
