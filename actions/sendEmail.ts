"use server";

import React from "react";
import { getErrorMessage } from "@/lib/error";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

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

    let data;

    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "chandranpsharath@gmail.com",
            subject: "Message from contact",
            reply_to: senderEmail as string,
            // text: message as string,
            // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
