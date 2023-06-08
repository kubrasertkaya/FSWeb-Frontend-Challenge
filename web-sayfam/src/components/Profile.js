import React from 'react'

const Profile = () => {
    return (
        <div className={
            "bg-[#F4F4F4] py-[2rem] xl:py-[7rem] xl:pl-[21rem] px-[2rem] xl:pr-[18rem]"
        }>
            <div className={"flex  inline-block w-[50%] flex-col"}>
                <p className={
                    "font-['Inter']  font-[500] xl:pl-[1.7rem] text-[3.6rem] pb-[1rem] xl:pb-[0rem] tracking-[0.1rem] leading-[4.357rem]"
                }>Profile
                </p>
                <div className={"flex xl:pt-[3.6rem]  xl:flex-row  flex-col "}>
                    
                    <div className={
                        "flex xl:w-[34.5vw] w-[90vw] flex-col pt-[3.6rem] pl-[1rem] xl:pl-[4.3rem] xl:bg-white bg-[#8bd2d892] rounded-[1.2rem] xl:shadow-[9px_9px_0px_rgba(82,82,82,0.5)]  xl:pr-[9.1rem]"
                    }
                    >
                        <p className={
                            "font-['Playfair_Display']  text-left  font-[400] text-[#d9333b] xl:text-[#EA2678] leading-[3.2rem] text-[2.4rem]"
                        }> Basic Information
                        </p>
                        <div className={"flex flex-col text-left  pt-[3.7rem]"}>
                            <div className={"flex "}>
                                <p className={
                                    "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                                }>Birthdate
                                </p>
                                <p className={
                                    "text-[1.8rem] font-['Inter'] w-[52%]  font-[400] leading-[2.178rem] tracking-[0.01rem]"
                                }>24.11.1998
                                </p>
                            </div>
                            <div>
                                <div className={"flex pt-[2.1rem]"}>
                                    <p
                                        className={
                                            "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                                        }
                                    >
                                        Current Address
                                    </p>
                                    <p
                                        className={
                                            "text-[1.8rem] font-['Inter'] w-[52%] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                                        }
                                    >
                                        Istanbul
                                    </p>
                                </div>
                                <div className={"flex pt-[2.1rem]"}>
                                    {" "}
                                    <p className={
                                        "text-[1.8rem] font['Inter'] w-[43vw] xl:w-[10.3vw] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                                    }>Education
                                    </p>
                                    <p className={
                                        "text-[1.8rem] font-['Inter'] w-[55vw] xl:w-[15vw]  xl:pl-[3.3rem] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                                    }>Ankara Yıldırım Beyazıt University Nursing Programme,2020   Yıldız Teknik University Business Department,Student
                                    </p>
                                </div>
                                <div className={"flex pt-[2.1rem] pb-[3.6rem]"}>
                                    {" "}
                                    <p className={
                                        "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                                    }>Preferred Role
                                    </p>
                                    <p className={
                                        "text-[1.8rem] font-['Inter'] w-[52%] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                                    }>Frontend, UI
                                    </p>
                                </div>
                                <div className={"xl:w-[36vw] w-[54vw] "}>
                                </div>

                                   {/* ---------------About------------------ */}


                                    {/* <div className={"xl:pl-[7rem] pl-[6rem] text-left pt-[3.7rem] "}>
                                        <p className={
                                            "text-[2.4rem]  font-[400] leading-[3.2rem] tracking-[0.01em] font-['Playfair_Display']"
                                        }>About me
                                            <span>
                                                <div
                                                    className={
                                                        "bg-[#82BBFF] w-[9rem] h-[1.8rem] rounded-[.4rem] mx-[-1.2rem] my-[-1.5rem]"
                                                    }
                                                ></div>
                                            </span>
                                            <p className={
                                                "pt-[3.4rem] font-['Inter'] font-[400] text-[1.8rem]"
                                            }>"I am a graduate of the nursing department. After gaining some work experience in this field, I realized that it is not the career path I envision for my future. Therefore, I have decided to change my field. I have started to receive Full-stack Developer training on Workintech to pursue a new career."

                                            </p>

                                        </p>

                                    </div> */}

                                

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className={"xl:pl-[50rem]  mt-[-600px] flex  pr-[80rem] pt-[3rem] "}>
                                        <p className={
                                            "text-[2.4rem]  font-[400] leading-[3.2rem] tracking-[0.01em] font-['Playfair_Display']"
                                        }>About me
                                            <span>
                                                <div
                                                    className={
                                                        "bg-[#82BBFF] w-[9rem] h-[1.8rem] rounded-[.4rem] mx-[-1.2rem] my-[-1.5rem]"
                                                    }
                                                ></div>
                                            </span>
                                            <p className={
                                                "pt-[3.0rem] font-['Inter'] font-[400]  text-[1.8rem]"
                                            }>"I am a graduate of the nursing department. After gaining some work experience in this field, I realized that it is not the career path I envision for my future. Therefore, I have decided to change my field. I have started to receive Full-stack Developer training on Workintech to pursue a new career."

                                            </p>

                                        </p>

                                    </div>
        </div>
    )
}

export default Profile
