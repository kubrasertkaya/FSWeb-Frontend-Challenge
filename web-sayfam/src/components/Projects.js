import React from "react";

const  Projects=()=> {


    return (
        <div

            className={
                "flex pt-[2rem] xl:pt-[9.3rem] px-[1rem] xl:pl-[19.3rem] pb-[2rem] xl:pb-[18.4rem] xl:pr-[18.3rem] flex-col"
            }
        >
            <h2
                className={
                    "text-[3.6rem] text-center font-['Inter'] leading-[4.357rem] font-[500]"
                }
            >
                Projects
            </h2>
            <div
                className={
                    "xl:flex xl:flex-row flex-col gap-[6.4rem] pt-[1.5rem] xl:pt-[3.6rem] "
                }
            >
                <div

                    className={
                        " w-[95vw] xl:mb-[15rem] ml-[15rem] mb-[2rem] xl:w-[30vw] rounded-[1.2rem] bg-[#DDEEFE]"
                    }
                >
                    <p
                        className={
                            "font-['Playfair_Display'] pl-[2rem] xl:pl-[4rem] pt-[4.6rem] text-left leading-[3.86rem] tracking-wider font-[700] text-[2.9rem]"
                        }
                    >
                        Pizza Project
                    </p>
                    <p className=" pl-[2rem] xl:pl-[4rem] pt-[1.9rem] xl:w-[29vw] leading-[2.4rem] font-['Inter'] font-[400] text-[1.6rem] text-left">
                        The web page I designed for software developers who want to order pizza.You will create a pizza order form where the user can select their desired toppings,also serves as my WorkinTech 8th-week challenge project.
                    </p>
                    <div
                        className={"flex pl-[2rem] xl:pl-[4rem] gap-[.9rem] pt-[2.7rem]"}
                    >
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            react
                        </p>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            vercel
                        </p>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            axios
                        </p>
                    </div>
                    <div className={"pt-[1rem] pl-[2rem] xl:pl-[4rem]"}>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] w-[22vw] xl:w-[6.5vw] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            router
                        </p>
                    </div>
                    <div
                        className={
                            "flex  pl-[2rem] justify-between xl:pr-[4.9rem] xl:gap-[15rem] pt-[3.5rem] xl:pl-[4rem]"
                        }
                    >
                        <a
                            href="https://github.com/kubrasertkaya/fsweb-s7-challenge-pizza"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={
                                "font-[600] font-['Inter'] text-[2rem] leading-[3rem] "
                            }>
                                View on Github
                            </p>
                        </a>
                        <a

                            href="pizza.vercel./"
                            target="_blank"

                        ><p className={
                            "font-[600] font-['Inter'] text-[2rem] pr-[2.5rem] xl:pr-[0rem] leading-[3rem] "
                        } >
                                Go to app 👈
                            </p>
                        </a>
                    </div>
                    <div className={"pb-[0rem] pt-[3.5rem] xl:pt-[0rem]"}>
                        <div className="laptop1">
                            <img src={"../../image2/pizza.png"} alt=" " />
                        </div>
                    </div>
                </div>{" "}
                <div className={"w-[95vw] xl:mb-[15rem] mb-[2rem] xl:w-[30vw] rounded-[1.2rem] bg-[#D9F6F1]"}>
                    <p
                        className={
                            "font-['Playfair_Display'] pl-[2rem] xl:pl-[4rem] pt-[4.6rem] text-left leading-[3.86rem] tracking-wider font-[700] text-[2.9rem]"
                        }
                    >
                        Reducer Calculator
                    </p>
                    <p
                        className={
                            "pl-[2rem] xl:pl-[4rem] pt-[1.9rem] xl:w-[29vw] leading-[2.4rem] font-['Inter'] font-[400] text-[1.6rem] text-left"
                        }
                    >
                        I have created a simple calculator application that can add, multiply, subtract, and divide numbers in any order, and also has the ability to store in memory and include callback features.
                    </p>
                    <div
                        className={
                            "flex pl-[2rem] xl:pl-[4rem] gap-[.9rem] xl:pt-[1.8rem] pt-[2.7rem]"
                        }
                    >
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            react
                        </p>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            redux
                        </p>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            axios
                        </p>
                    </div>
                    <div className={" flex pt-[1rem] gap-[.9rem] pl-[2rem] xl:pl-[4rem]"}>

                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] xl:w-[6.5vw] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            router
                        </p>
                        <p
                            className={
                                " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] xl:w-[6.5vw] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                            }
                        >
                            vercel
                        </p>
                    </div>
                    <div
                        className={
                            "flex  pl-[2rem] justify-between xl:pr-[4.9rem] xl:gap-[15rem] pt-[3.5rem] xl:pl-[4rem]"
                        }
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/kubrasertkaya/fsweb-s10g1-reducer-calculator"
                        >
                            <p className={"font-[600] font-['Inter'] text-[2rem] leading-[3rem] "
                            } >
                                View on Github
                            </p>
                        </a>
                        <a
                            href="calculator.vercel."
                            target="_blank"
                            rel="noreferrer"
                        ><p className={
                            "font-[600] font-['Inter'] text-[2rem] pr-[2.5rem] xl:pr-[0rem] leading-[3rem] "} >
                                Go to app 👈
                            </p>
                        </a>
                    </div>
                    <div className="pb-[0rem] pt-[3.5rem] xl:pt-[0rem]">
                        <div className="laptop2">
                            <img src={"../../image2/hesap.png"}  alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    "flex justify-center xl:w-[78.3vw] gap-[2rem] xl:gap-[5.8rem] xl:px-[14.8rem] pt-[3rem] xl:pt-[10.9rem]  "
                }
            >
                <div>
                    <p
                        className={
                            "xl:text-[4.2rem] font-['Inter'] font-[500] pt-[1rem] xl-[0rem] xl:leading-[6.3rem] tracking-[0.01em] text-right"
                        }
                    >
                        Let's work together on
                        <span>
                            <div
                                className={
                                    "xl:w-[27rem] w-[6.5rem] mt-[-.6rem] ml-[3.1rem] mb-[-1.5rem] h-[.4rem] xl:h-[1.8rem] bg-[#82BBFF] rounded-[.4rem] xl:ml-[13rem] xl:mb-[-6.1rem] xl:mt-[-2.2rem]"
                                }
                            ></div>
                        </span>{" "}
                        <br /> your next product.
                    </p>
                </div>
                <div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/kubrasertkaya"
                    >
                        <p
                            className={
                                "xl:text-[2.4rem] text-[#1769FF] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                            }

                        >
                            Github
                        </p>
                    </a>
                    <p

                        className={
                            "xl:text-[2.4rem] text-[#0A0A14] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                        }
                    >
                        Personal Blog
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/h-k%C3%BCbra-sertkaya-b68b7a1b6"
                    >
                        <p
                            className={
                                "xl:text-[2.4rem] text-[#0077B5] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                            }
                        >
                            LinkedIn
                        </p>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:haticekubrasertkaya@gmail.com"
                    >
                        <p
                            className={
                                "xl:text-[2.4rem] text-[#AF0C48] text-left xl:leading-[2.9rem] font-['Inter'] font-[500]"
                            }
                        >
                            Email
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Projects