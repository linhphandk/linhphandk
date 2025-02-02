import React, {FC} from 'react';
import DownIcon from '../../public/down.svg'
import Portrait from '../../public/portrait.jpg'
const Hero: FC = ()=>(
  <main className="flex justify-center items-center flex-col h-full lg:flex-row">
    <div className="flex justify-center items-center lg:items-start flex-col h-full basis-1/2">
     <div className="flex justify-center items-center lg:items-start flex-col max-w-lg">
     <h1 className="text-white text-base md:text-4xl" style={{color: "#D4AFB9"}}>Thach Linh Phan</h1>
     <h4 className="text-white text-center text-4xl md:text-6xl mb-4 lg:mb-6">Software
Engineer</h4>
     <p className="text-white text-xl lg:text-xl text-center lg:text-left leading-normal">Passionate software engineer building usable, scalable solutions. Experienced in Java, TypeScript, Next.js, and Python, with a focus on reliability, testability,</p>
     </div>
</div>
<div className="hidden lg:flex basis-1/2 justify-center items-center">
<img className="w-3/4 object-cover aspect-square" src={Portrait}/>
</div>
<div className="absolute bottom-4 w-8"><DownIcon />
</div>

  </main>
)

export default Hero;
