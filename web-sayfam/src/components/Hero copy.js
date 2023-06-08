import React from 'react'



const Hero = () => {
  return (
    <div className= "block flex-col-reverse px-[2rem] mx-auto gap-10 xl:flex-row xl:pt-[15.1rem] xl:justify-evenly xl:pl-[16.2rem] xl:pr-[17.1rem] pb-[2rem] xl:pb-[9.4rem] bg-[#F4F4F4]">
      <div>
        <h6 className='text-base'>Hi!👋</h6>
        <span>
              <div
                className="ellipse"
                
              ></div>
            </span>
        <p className="text-left text-2xl pr-[800px] xl:pt-[1rem] pt-[2rem] leading-10 xl:w-[45vw]  text-[#0A0A14]  pr-[200px] font-bold">
        I’m Kübra. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
            
        </p>
       
        <span>
              <div
                className="rectangle18"
                
              ></div>
            </span>

            
  
      </div>
      <div className={"flex  gap-[2rem] xl:mt-[0rem] mt-[2rem]"}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/h-k%C3%BCbra-sertkaya-b68b7a1b6"
              >
                <img
                  className={"xl:mt-[5.6rem]"}
                  width="30"
                  height="30"
                  src={"https://cdn-icons-png.flaticon.com/512/2111/2111532.png"}
                  alt=""
                  link={""}
                  
                />
              </a>
              
              <a target="_blank" rel="noreferrer" href="https://github.com/kubrasertkaya">
                <img
                  className={"xl:mt-[5.6rem] "}
                  width="30"
                  height="30"
                  src={"https://cdn-icons-png.flaticon.com/512/2111/2111432.png"}
                  alt=""
                />
              </a>
            </div>
      {/* <img src='../../resimler/kubra.jpeg' alt='fgjdkjg' /> */}
      <p
              className={
                " w-[570px] h-[154px] right-[404px] pr-[100px] top-[500px] text-[0.7rem]  font-['Inter']  mt-[2rem]  "
              }
            >
              Currently <span className={" text-[#AF0C48]"}>Freelancing</span> for
              <span className={" text-[#AF0C48]"}>
                {" "}
                UX, UI, & Web Design{" "}
              </span>{" "}
              Project .
              <br />
              Invite me to join your team 👉 {" "}
              <a className={" text-[#AF0C48] underline underline-offset-4"}
              target="_blank" rel="noreferrer" href="mailto:haticekubrasertkaya@gmail.com"
              >
                haticekubrasertkaya@gmail.com
              </a>
            </p>

            <div
                className="ellipse"
                
              ></div>


    

    </div>
  )
}

export default Hero
