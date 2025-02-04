'use client';

import { checkoutFormSchema, TypeFormSchema } from "@/components/shared/form-components/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { createUser } from "../../app/actions";
import toast from "react-hot-toast";
import { Header } from "@/components/shared/header";
import { FormaBlock } from "@/components/shared";
import { Footer } from "@/components/shared/footer";
import { Carousel, projects, Button } from "@/components/ui";
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { variants, variants1, variants2, variants3 } from "@/utils/animation";
import { ArrowRight } from "lucide-react";

import * as motion from "motion/react-client"

import "@/app/globals.css";
import { Container } from "../../components/shared/container";
import Image from "next/image";

import { FormInput } from "@/components/shared";

export default function Home() { 
  
  const [submitting, setSubmitting]= React.useState(false);
  
  const form = useForm<TypeFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues:{
      firstName:'',
      lastName:'',
      phone:'',
      email:'',
    },
  });

  const onSubmit = async (data: TypeFormSchema) => {
    try{
      toast.error('В скором мы с вами свяжемся!', {
  icon:'✅',
});
      console.log('1');
      setSubmitting(true);
      createUser(data);
      

    } catch (err) {
      setSubmitting(false);
       toast.error('Не удалось отправить контактные данные', {
        icon:'❌',
       });
    }
  };
  return ( 
  <>
  

  <div className="w-full 
  xl:h-[calc(100vh-8vh)]  xl:bg-repeat-round xl:bg-auto  xl:bg-fixed xl:bg-left-top
 md:bg-[100%] md:bg-no-repeat md:bg-top md:h-[calc(100vh-50vh)] 
 lg:h-[calc(100vh-30vh)] 
 bg-[url(/mainPageIMG/MainImg.jpg)]">

  </div>
  
  <Header />
  <Container className="md:mt-10 sm:mt-0 mt-0">
    
   
    <section className="flex gap-[3%] xl:flex-nowrap lg:flex-wrap  flex-wrap md:flex-wrap md:justify-center">
    
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      viewport={{once:false,amount:0.2}}
       className=" hidden lg:block  md:w-[80%]  lg:w-[80%]  xl:w-[85%] pt-[1rem]">
        <Image className="w-full h-full md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] lg:object-cover" src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}/>
      </motion.div>
      
        {/* <Image className=" sm:hidden lg:block lg:object-cover md:w-[80%] md:rounded-[25px] lg:w-[80%] lg:rounded-[30px] xl:w-[60%] xl:rounded-[35px]" src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}/> */}
      
   
    <div className="xl:basis-[50%] lg:basis-[95%] flex xl:items-start lg:pl-[20%] xl:pl-[0%]">
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants1}
      
      viewport={{once:false,amount:0.2}}
      className="md:flex md:flex-wrap md:justify-center xl:justify-start">
        <h1 className="xl:text-[3rem] xl:pl-[1rem] xl:pt-[3rem]
       lg:text-[3rem] lg:p-[1rem] lg:pt-[0.5rem]
       md:text-[2rem] md:text-center
       sm:text-[2rem]
       sm:px-[1.5rem]
       lg:text-left
      lg:tracking-tight
      xl:text-left
      xl:tracking-normal
      text-[1.5rem]
      pl-[2.5rem]
      ">Эверест</h1>
        <p className="xl:text-[1.2rem]
        lg:text-[1.2rem]
        md:text-[1.2rem]
        md:w-[90%]
        md:text-center
        sm:text-[1.2rem]
        sm:px-[1rem]
        xl:px-[0rem]
        lg:text-center
      lg:tracking-normal
      xl:text-left
      xl:tracking-normal
      text-[1rem]
      px-[1.5rem]
      ">Название нашей компании Эверест символизирует высоту и достигнутые вершины в строительстве. Как самая высокая гора на Земле, Эверест олицетворяет стремление к совершенству и амбициозным целям. </p>
        
      </motion.div>
    </div>
    <div className="sm:flex sm:w-full sm:justify-center sm:block lg:hidden sm:py-[1rem] py-[1rem]  flex">
    <Image className="
    sm:w-[80%]
    pl-[3rem]
     lg:object-cover md:w-[80%] md:rounded-[25px] sm:rounded-[25px] lg:w-[80%] lg:rounded-[30px] xl:w-[60%] xl:rounded-[35px]" src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}/>
    </div>
    </section>

    <section className="flex gap-[3%] xl:flex-nowrap lg:flex-wrap xl:pt-[3.5rem] lg:pt-[2rem]  sm:flex-wrap md:justify-end flex-wrap ">
      <div className="xl:basis-[50%] lg:basis-[85%] flex xl:items-center ">
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      
      viewport={{once:false,amount:0.2}}
      className="sm:flex md:flex-wrap sm:justify-center sm:flex-wrap lg:justify-start  flex flex-wrap justify-center">
      <h1 className="
      xl:text-[3rem] xl:p-[1rem]  
      lg:text-[3rem] lg:p-[1rem]
      md:text-[2rem] md:pl-[1rem]
      sm:text-[2rem]
      lg:text-left
      lg:tracking-tight
      text-[2rem]
      
      ">Наши ценности</h1>
      <p className="xl:text-[1.1rem] xl:pl-[0.5rem]  lg:text-[1.1rem] lg:pl-[0.5rem]
      md:text-[1.2rem]
      md:w-[80%]
      md:pl-[0.5rem]
      sm:text-[1.1rem]
      sm:px-[1rem]
      sm:text-center
      sm:tracking-tighter
      lg:text-left
      lg:tracking-tight
      xl:w-[100%]
      px-[2rem]
      pb-[1rem]
      ">Мы стремимся не просто строить жилые комплексы, но и создавать комфортные и безопасные пространства для жизни. Как и восхождение на Эверест, каждый проект требует тщательной подготовки, упорства и мастерства. Наша команда с радостью преодолевает все трудности, чтобы вы могли наслаждаться качественным жильем, которое будет служить вам долгие годы. </p>
      </motion.div>
    </div>
    {/* <Image className="lg:block sm:hidden object-cover xl:w-[60%] lg:w-[100%] xl:rounded-[35px] lg:rounded-[30px] lg:pl-[30%]  xl:pl-[0%] lg:mt-[1.5rem]  md:pl-[0%] md:pt-[1rem] md:w-[80%]
    sm:w-[80%]
    sm:rounded-[25px]
    lg:pr-[1.5rem]
    " src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}>
    </Image> */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={variants1}
    whileHover={{ scale: 1.1 }}
    viewport={{once:false,amount:0.2}}
    className="hidden sm:hidden lg:block  md:w-[80%]  lg:w-[80%]  xl:w-[85%] ]">
        <Image className="w-full h-full md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] lg:object-cover" src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}/>
      </motion.div>
    <div className="sm:flex sm:w-full sm:justify-center sm:block lg:hidden sm:py-[1rem] ">
    <Image className="object-cover xl:w-[60%] lg:w-[100%] xl:rounded-[35px] lg:rounded-[30px] lg:pl-[30%]  xl:pl-[0%] lg:mt-[1.5rem]  md:pl-[0%] md:pt-[1rem] md:w-[80%]
    sm:w-[80%]
    sm:rounded-[25px]
    pl-[3rem]
    " src="/mainPageIMG/firstIMG.jpg" alt="IMAGE" width={111110} height={0}>
     
    </Image>
    </div>
    </section>

    <motion.section
    initial="hidden"
    whileInView="visible"
    variants={variants2}
    
    viewport={{once:false,amount:0.2}}
    className="flex items-center justify-center pt-[3rem] ">
      <div className="w-[80%] relative overflow-hidden">
<div className="flex justify-center xl:rounded-[40px] lg:rounded-[35px] xl:basis-[100%] lg:basis-[80%] items-center xl:h-[35rem] bg-no-repeat bg-[url(/mainPageIMG/firstIMG.jpg)]
sm:rounded-[30px]
sm:h-[35vh]
lg:h-[50vh]


">
<div className=" w-[80%] h-[80%] blur-[300px] bg-black 
">

</div>
</div>
<div className="text-center absolute xl:top-[10rem] lg:top-[3rem] sm:top-[4rem] md:top-[3rem]">
 <h1 className="xl:text-[3.5rem] xl:py-[1rem] lg:text-[3rem] lg:py-[1rem]
 md:text-[2.75rem] md:pt-[1rem]
 sm:text-[2rem]
 
 ">Стремление к совершенству</h1>
 <p className="xl:text-[1.25rem] xl:px-[5.3rem] lg:text-[1.35rem] lg:px-[3.8rem]
 md:text-[1.1rem] md:px-[3.8rem]
 sm:text-[1.1rem] sm:tracking-tighter
 sm:px-[1rem]
 sm:pt-[0.5rem]
 md:pt-[0rem]
 sm:text-[1.1rem]
 lg:tracking-tight">Мы выбираем название Эверест, чтобы вдохновлять нашу команду и клиентов на новые достижения. Как каждый альпинист, который мечтает покорить вершину, так и мы стремимся к созданию жилых комплексов, которые станут символом качества и инноваций в строительной отрасли. </p>
 </div>
</div>
    </motion.section>

    <motion.section
    initial="hidden"
    whileInView="visible"
    variants={variants3}
    
    viewport={{once:false,amount:0.2}}
     className="w-full flex justify-center items-center xl:mb-[4rem] lg:mb-[1.5rem] xl:mt-[1.5rem] lg:mt-[2rem] flex-wrap ">
    <h1 className="xl:text-[3rem] xl:pb-[1.5rem] lg:text-[2rem] lg:pb-[1.5rem]
    sm:text-[2rem] md:pb-[1.5rem] sm:pt-[1.3rem] sm:pb-[1rem]">Готовые проекты</h1>
    <Carousel
      opts={{
        align: "start",
      }}
      className="md:w-[90%] w-[80%] "
    >
      <CarouselContent>
        {projects.map((project) => (
          
          <CarouselItem  key={project} className="md:basis-1/2 lg:basis-1/3">
            <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1 }}
            
            className="">
              <Image className=" lg:rounded-[15px] w-full" src={`/project/${project}.webp`} width={500000} height={0} alt={project} />
              </motion.div>
          </CarouselItem>
          
        ))}
         
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </motion.section>
  <motion.section
  initial="hidden"
  whileInView="visible"
  variants={variants2}
  
  viewport={{once:false,amount:0.2}}
  className="flex w-full items-center justify-center">
    <div className="w-[60%]">
  <FormProvider  {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      
      <FormaBlock title='Остались вопросы?' className="text-[#f8fafc] ">
        <div className="grid grid-cols-1 gap-5">
        <FormInput name="firstName" className="text-base md:mt-[1.5rem] sm:mt-[1.2rem]" placeholder="Имя" />
        <FormInput name="lastName" className="text-base" placeholder="Фамилия" />
        <FormInput name="email" className="text-base" placeholder="Почта" />
        <FormInput name="phone" className="text-base md:mb-[1.5rem]" placeholder="Телефон" />
        </div>
        <Button  
               
                type="submit"
               
                className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
                  Отправить
                  <ArrowRight className="w-5 ml-2" />
        </Button>
      </FormaBlock>
    </form>
    </FormProvider>
    </div>
    </motion.section>
    {/* <Categories /> */}
  </Container>
  
 <Footer/>
  </>
  );
}
