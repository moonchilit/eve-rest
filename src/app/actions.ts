'use server';


import { TypeFormSchema } from "@/components/shared/form-components/form-schema";
import { prisma } from "../../prisma/prisma-client";
import { sendEmail } from "@/lib/send-email-form";
import { VerificationUserTemplate } from "@/components/email-template";

export async function createUser(data: TypeFormSchema){

const NeUser =    await prisma.user.create({
data:{
    fullName: data.firstName + ' ' + data.lastName,
    email: data.email,
    phone: data.phone,
    answer: false,
},
    });
    
        await sendEmail(
            'berloga901@gmail.com',
            'Новая Регестрация:' + NeUser.id,
            VerificationUserTemplate({
                FName: NeUser.fullName,
                MPhone: NeUser.phone,
                MEmail: NeUser.email
            }),
          );
    
}
