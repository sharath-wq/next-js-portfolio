"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading text="contact me" />
            <p className="text-gray-700 -mt-6">
                Please contact me directly at{" "}
                <a href="mailto:chandranpsharath@gmail.com" className="underline">
                    chandranpsharath@gmail.com
                </a>{" "}
                or through this form
            </p>

            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!");
                }}
                className="mt-10 flex flex-col"
            >
                <input
                    type="email"
                    name="senderEmail"
                    required
                    maxLength={500}
                    placeholder="Your email"
                    className="h-14 rounded-lg borderBlack px-4"
                />
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="h-52 my-3 rounded-lg borderBlack p-4"
                    required
                    maxLength={500}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
};

export default Contact;
