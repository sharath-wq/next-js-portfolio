import Image from "next/image";
import React from "react";

const Intro = () => {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <Image
                        src={
                            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt="X portriat"
                        width={198}
                        height={198}
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                    <span className="absolute bottom-0 right-0  text-4xl">👋</span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
