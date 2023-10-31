"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid Email",
        };
    }

    if (!validateString(message)) {
        return {
            error: "Invalid Message",
        };
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "chandranpsharath@gmail.com",
            subject: "Message from contact",
            reply_to: senderEmail as string,
            text: message as string,
        });
    } catch (error) {
        console.log(error);
    }
};
