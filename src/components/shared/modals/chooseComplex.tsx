'use client';

import { projects } from "@/components/ui";
import { Dialog, DialogContent } from '../../ui/dialog';
import Image from "next/image";
import React from 'react';
import { useRouter } from 'next/navigation';
import { ComplexDB } from '@prisma/client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { variants40, variants41, variants42, variants43 } from '@/utils/animation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Props {
  complexK:ComplexDB;
  className?: string;
}

export const ChooseComplex: React.FC<Props> = ({complexK, className }) => {
  const router = useRouter();
    return (
        <Dialog  open={Boolean(complexK)} onOpenChange={() => router.back()}>
          <DialogContent className={cn('p-0 max-w-[125vh] min-h-[70vh] sm:min-h-[85vh] md:min-h-[80vh] overflow-hidden',className,)}>
            <div
            
            className="w-[100%] h-[100%] flex flex-wrap justify-between ">
              
              <div className="w-[100%] h-[50%] ">

                  <div className="pt-10 pl-10 text-[2rem] sm:flex sm:justify-center sm:pr-[1rem] xl:block">
                 <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 variants={variants40}
                 
                 viewport={{once:true,amount:0.2}}
                 >{complexK.NameComplex}</motion.h2>
                  </div>
              <div className="pl-10 pt-3 text-[1rem] max-w-[80%] sm:max-w-[90%]">
                 <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 variants={variants41}
                 
                 viewport={{once:true,amount:0.2}}
                 >{complexK.description}</motion.h2>
              </div>
              <div className="pl-10 pt-3 text-[1.25rem] max-w-[90%] flex justify-end">
                 <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 variants={variants42}
                 
                 viewport={{once:true,amount:0.2}}
                 >{complexK.Adress}</motion.h2>
              </div>

                </div>








                <div className="w-[100%] h-[50%] ">
<motion.div
initial="hidden"
whileInView="visible"
variants={variants43}

viewport={{once:true,amount:0.2}}
className="flex justify-center">
<Carousel
      opts={{
        align: "start",
      }}
      className=" xl:w-[80%] sm:w-[80%] md:w-[55%] lg:w-[80%]"
    >
      <CarouselContent>
        {projects.map((project) => (
          
          <CarouselItem  key={project} className="md:basis-1/1 lg:basis-1/2">
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
</motion.div>
                </div>
            </div>
       
      </DialogContent>
        </Dialog>
        

        
      );
    };