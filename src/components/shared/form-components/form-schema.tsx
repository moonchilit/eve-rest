import {z} from 'zod';

export const checkoutFormSchema = z.object({
    firstName: z.string().min(2,{message: 'Имя должно содержать не менее 2-х симолов'}),
    lastName: z.string().min(2,{message: 'Фамилия должна содержать не менее 2-х симолов'}),
    email: z.string().email({message:'Введите корректную почту'}),
    phone: z.string().min(10,{message:'Введите корректный номер телефона'}),
});

export type TypeFormSchema = z.infer<typeof checkoutFormSchema>;