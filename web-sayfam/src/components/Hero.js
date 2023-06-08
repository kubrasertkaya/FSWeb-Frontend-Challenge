import React from 'react'
import kubra from "../image1/kubra.jpeg"
import { SkillsData } from './SkillsData'



const Hero = () => {
  return (
    <section className='container bg-slate-200'>
      <header className='flex ms-auto w-fit gap-x-5 items-center py-12'>
        
        <div>
          DARK MODE
        </div>
        <div className='w-px h-3 bg-black'></div>
        <button>
          TÜRKÇE'YE GEÇ
        </button>
      </header>
      <div className='flex justify-between items-center py-8'>
        <div>
           <h6>Hi!</h6>
           <p> I’m Kübra. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</p>
           <div>
            <button>
              linkdin
            </button>
            <button>
               github
            </button>
            
           </div>
        </div>
        <div className='h-96 w-96'>
          <img src={kubra}  alt='' className='h-full w-full'/>
        </div>
      </div> 
      <div  className='inline'>
          <h2 className='flex font-semibold place-content-center text-6xl'> 
          Skills
        </h2></div>
      <div className='h-64 w-full  flex px-48  py-24'>
       
      
      {SkillsData.map((skill) => {
          return (
            <div className=" flex space-x-4 mx-5 place-items-center">

              <img className=""  alt='' src={skill.imgsrc} />
              
              <p className=" inline-block align-bottom mt-36 mx-36 gap-2 ">
                {skill.name}
              </p>

              
            </div>
          );
        })}
         {/* <div className=''>
        <table className='flex border-collapse border rounded-lg border-slate-100  place-items-center mt-72'>
            <tbody>
              <tr>
                <td className='border border-slate-300'>Birthdate</td>
                <td className='border border-slate-300'>24.11.1998</td>
              </tr>

              <tr>
                <td className='border border-slate-300'>Current Address</td>
                <td className='border border-slate-300'>Istanbul</td>
              </tr>

              <tr>
                <td className='border border-slate-300'>Education</td>
                <td className='border border-slate-300'>Ankara Yıldırım Beyazıt University Nursing Programme,2020   Yıldız Teknik University Business Department,Student</td>
              </tr>

              <tr>
                <td className='border border-slate-300'>Preferred Role</td>
                <td className='border border-slate-300'>Frontend, UI</td>
              </tr>

            </tbody>
        </table>
        </div> */}


        

      </div>
    </section>
    
  )
}

export default Hero
