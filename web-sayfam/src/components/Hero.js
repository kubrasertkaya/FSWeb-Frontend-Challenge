import React from "react";
import kubra from "../image1/kubra.jpeg";
import { SkillsData } from "./SkillsData";

const Hero = () => {
  return (
    <>
      <section className="container bg-slate-200 relative overflow-hidden">
        <div className=" absolute -right-5 top-32 rounded-full h-10  w-28 mt-72 bg-[#EA2678] "></div>
        <div className="content ">
          <header className="flex ms-auto w-fit gap-x-5 items-center py-12 px-8">
            <div>DARK MODE</div>
            <div className="w-px h-3 bg-black"></div>
            <button>TÜRKÇE'YE GEÇ</button>
          </header>
          <div className="flex justify-between items-center py-4 px-8">
            <div>
              <h6>Hi!👋</h6>
              <p className="text-left leading-loose font-semibold text-xl line-clamp-3 w-64">
                {" "}
                I’m Kübra. I’m a full-stack developer. I can craft solid and
                scalable frontend products. Let’s meet!
              </p>
              <div>
                <a
                  className=" mr-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/h-k%C3%BCbra-sertkaya-b68b7a1b6"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
                    alt=""
                    className="h-4 w-4 inline"
                  />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/kubrasertkaya"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                    alt=""
                    className="h-4 w-4 inline"
                  />
                </a>

                <p className="text-sm">
                  Currently <span className="">Freelancing</span> for
                  <span className=""> UX, UI, & Web Design </span> Project .
                  <br />
                  Invite me to join your team 👉{" "}
                  <a
                    className="underline text-red-500"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:haticekubrasertkaya@gmail.com"
                  >
                    haticekubrasertkaya@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className=" h-72 w-72 ">
              <img
                src={kubra}
                alt=""
                className="h-full w-full rounded-lg imageshadow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-white relative overflow-hidden">
        <div className="inline">
          <h2 className="flex font-semibold place-content-center text-6xl">
            Skills
          </h2>
        </div>
        <div className=" h-80 w-full flex justify-center py-24 bg-white">
          {SkillsData.map((skill) => {
            return (
              <div className=" flex flex-col space-x-4 mx-5 place-items-center">
                <img className="" alt="" src={skill.imgsrc} />

                <span className=" inline-block align-bottom ">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container  bg-slate-200">
        <div className="  flex flex-col justify-between   py-9">
          <h2 className="flex font-semibold place-content-center text-6xl mb-5">
            Profile
          </h2>
          <div className="flex justify-between gap-x-3 px-72">
            <table className="table-auto   w-96  bg-white rounded-lg shadow-2xl">
              <tbody>
                <tr>
                  <td className="">Birthdate</td>
                  <td className="">24.11.1998</td>
                </tr>

                <tr>
                  <td className="">Current Address</td>
                  <td className="">Istanbul</td>
                </tr>

                <tr>
                  <td className="">Education</td>
                  <td className="">
                    Ankara Yıldırım Beyazıt University Nursing Programme,2020
                    Yıldız Teknik University Business Department,Student
                  </td>
                </tr>

                <tr>
                  <td className="">Preferred Role</td>
                  <td className="">Frontend, UI</td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col  w-96 mt-2">
              <p>About me</p>
              <p>
                I am a graduate of the nursing department. After gaining some
                work experience in this field, I realized that it is not the
                career path I envision for my future. Therefore, I have decided
                to change my field. I have started to receive Full-stack
                Developer training on Workintech to pursue a new career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-white">
        <div className="content">
          <div>
            <h2 className="flex font-semibold place-content-center text-6xl mb-5">
              Projects
            </h2>
          </div>
          <div className="flex  justify-between ">
            <div className=" bg-[#DDEEFE] rounded-md  p-8">
              <h3 className="text-lg font-semibold">Pizza Project</h3>
              <p className="text-left  font-normal  text-xs line-clamp-6 w-80">
                The web page I designed for software developers who want to
                order pizza.You will create a pizza order form where the user
                can select their desired toppings,also serves as my WorkinTech
                8th-week challenge project.
              </p>
              <div className="flex gap-x-5 pt-4">
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  react
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  vercel
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  axios
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  router
                </div>
              </div>
              <div className="flex  gap-x-24 py-6">
                <p className="font-semibold">
                  <a href="https://github.com/kubrasertkaya/fsweb-s7-challenge-pizza">
                    View on Github
                  </a>
                </p>
                <p className="font-semibold">
                  <a href="pizza.vercel">Go to app 👈</a>
                </p>
              </div>
              <div className=" h-48  w-72 mt-8">
                <img
                  src={"../../image2/pizza.png"}
                  alt=" "
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className=" bg-[#D9F6F1] rounded-md  p-8">
              <h3 className="text-lg font-semibold">Reducer Calculator</h3>
              <p className="text-left  font-normal  text-xs line-clamp-6 w-80">
                I have created a simple calculator application that can add,
                multiply, subtract, and divide numbers in any order, and also
                has the ability to store in memory and include callback
                features.
              </p>
              <div className="flex gap-x-5 pt-4">
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  react
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  vercel
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  axios
                </div>
                <div className=" bg-white rounded-full font-medium  text-sm  mt-2 w-16 h-6 text-center">
                  router
                </div>
              </div>
              <div className="flex  gap-x-24 py-6">
                <p className="font-semibold">
                  <a href="https://github.com/kubrasertkaya/fsweb-s10g1-reducer-calculator">
                    View on Github
                  </a>
                </p>
                <p className="font-semibold">
                  <a href="calculator.vercel">Go to app 👈</a>
                </p>
              </div>
              <div className=" h-48  w-72 mt-8">
                <img
                  src={"../../image2/hesap.png"}
                  alt=" "
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-white">
        <footer className="content flex gap-x-6 ">
          <div className="    ml-60">
            <p className=" font-semibold  text-right  text-3xl line-clamp-2   w-96 p-14">
              Let's work together on your next product.
            </p>
          </div>
          <div className="h-56  mt-20">
            <a
              href="https://github.com/kubrasertkaya"
              className="block text-xs  font-medium text-[#1769FF] mt-1"
            >
              {" "}
              Github
            </a>
            <button className="block text-xs font-medium mt-1">
              {" "}
              Personal Blog
            </button>
            <a
              href="https://www.linkedin.com/in/h-k%C3%BCbra-sertkaya-b68b7a1b6"
              className="block text-xs text-[#0077B5] font-medium mt-1"
            >
              LinkedIn
            </a>
            <a
              href="mailto:haticekubrasertkaya@gmail.com"
              className="block text-[#AF0C48] font-medium text-xs mt-1"
            >
              Email
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Hero;
