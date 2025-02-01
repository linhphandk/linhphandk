import React, {FC} from 'react';
import DownIcon from '../../public/down.svg'
import Portrait from '../../public/portrait.jpeg'
const Hero: FC = ()=>(
  <main className="flex justify-center items-center flex-col h-full lg:flex-row">
    <div className="flex justify-center items-center lg:items-start flex-col h-full basis-1/2">
     <h1 className="text-white text-5xl lg:text-xl" style={{color: "#D4AFB9"}}>Thach Linh Phan</h1>
     <h4 className="text-white text-center text-8xl lg:text-2xl mb-24 lg:mb-6">Software
Engineer</h4>
     <p className="text-white text-5xl lg:text-xl text-center lg:text-left leading-normal">Passionate software engineer building usable, scalable solutions. Experienced in Java, TypeScript, Next.js, and Python, with a focus on reliability, testability,</p>
</div>
<div className="hidden lg:flex basis-1/2 justify-center items-center">
<img className="w-3/4" src={Portrait}/>
</div>
<div className="absolute bottom-12 w-24 lg:w-8"><DownIcon />
</div>

  </main>
)

export default Hero;
