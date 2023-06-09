import React from "react";
import kubra from "../image1/kubra.jpeg";
import { SkillsData } from "./SkillsData";

const Hero = () => {
  return (
    <>
      <section className="container bg-slate-200">
        <div className="content">
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
            <div className="h-96 w-96 ">
              <img
                src={kubra}
                alt=""
                className="h-full w-full rounded-lg imageshadow"
              />
            </div>
          </div>
          <div className="rounded-full h-5 w-16 bg-red-500 justify-end"></div>
        </div>
      </section>
      <section className="container bg-white">
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
      <div className="flex flex-col justify-between  py-8">
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
              I am a graduate of the nursing department. After gaining some work
              experience in this field, I realized that it is not the career
              path I envision for my future. Therefore, I have decided to change
              my field. I have started to receive Full-stack Developer training
              on Workintech to pursue a new career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
