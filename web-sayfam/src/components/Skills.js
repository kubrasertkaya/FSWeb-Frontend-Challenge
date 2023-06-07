import React from 'react'
import { SkillsData } from './SkillsData'

const Skills = () => {
  return (
    <div /*className="flex flex-col items-center pb-40 xl:w-[190rem] px-[.5rem] xl:px[0rem]  xl:h-[49rem]r "*/>
      <h1 className="text-[3rem] xl:text-[3.8rem] font-['Inter'] xl:leading-[98.09px] xl:tracking-[0.01em]">Skills</h1>
      <div className="flex justify-center w-[421px]  left-[259px] h-[280px] gap-12  mx-auto  max-w-xs lg:flex-row">
        {SkillsData.map((skill) => {
          return (
            <div className=" xl:pt-[5.6rem]  xl:pl-[1rem]">

              <img className=" rounded-md bg-contain" src={skill.imgsrc} />

              <p className="text-neutral-500  text-medium xl:text-[2rem] font-['Inter'] xl:leading-[98.09px] xl:tracking-[0.01em]">
                {skill.name}
              </p>

            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Skills
