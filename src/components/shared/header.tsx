'use client'

import React from 'react';
import {
  Sheet,
  
  SheetContent,
  SheetDescription,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Button } from '../ui/button';
import * as motion from "motion/react-client"
import { User, Menu, PencilRuler, Building2, Home } from 'lucide-react';

import Link from "next/link"
interface Props {
    className?: string;

}


export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className =
        {cn(
          'z-20 sticky backdrop-blur-sm top-0 py-[0.8rem]'
          
          ,className)}>
           

           
              <div className = "lg:flex items-center justify-between sm:hidden hidden">

              <div className = "flex justify-between gap-10 px-[7rem]">
                   <Link href="/" > 
                      <Button variant="hd" className="flex items-center gap-2 min-w-[8.4375rem]">
                      <Home size={16} /><h6 className="pt-[0.2rem]">Главная </h6>
                      </Button>
                    </Link>
                    <Link href="/ready-project/page">
                      <Button variant="hd" className="flex items-center gap-2 min-w-[8.4375rem]">
                      <PencilRuler size={16} /><h6 className="pt-[0.2rem]">Готовые проекты</h6>
                      </Button>
                    </Link>
              </div>

              < motion.div
              whileHover={{ scale: 1.3 }}
               className = "flex">
                <Link href="/">
                  <Image src="/logo.png" alt="Logo" width={120} height={0}/>
                </Link>
            
              </motion.div>

              <div className = "flex justify-between gap-8 px-[7rem]">
              <Link href="/about/page">
                <Button variant="hd" className="flex items-center gap-2 min-w-[8.4375rem]">
                <Building2 size={16} /><h6 className="pt-[0.2rem]">О нас</h6>
                </Button>
              </Link>
              <Link href="/complex/1">
                <Button variant="hd" className="flex items-center gap-2 min-w-[8.4375rem]">
                  <User size={16} /><h6 className="pt-[0.2rem]">Страница 4</h6>
                </Button>
              </Link>
              </div>
            </div>
            

            <div className="sm:flex lg:hidden justify-between flex ">
            <div className = "flex mx-[1.5rem]">
                <Image src="/logo.png" alt="Logo" width={120} height={0}/>
              </div>
              <div className="mx-[2.2rem] flex justify-center">
              <Sheet>
  <SheetTrigger><Menu size={36} /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle >Меню</SheetTitle>
      <SheetDescription>
               <Link href="/" >
      <Button variant="outline" className="flex justify-start items-flex gap-2 w-full my-[1rem] ">
                <Home size={16} /><h6 className="pt-[0.2rem]">Главная </h6>
                </Button></Link>
                
                <Link href="/ready-project/page"><Button variant="outline" className="flex justify-start items-center gap-2 w-full my-[1rem]">
              <PencilRuler size={16} /><h6 className="pt-[0.2rem]">Готовые проекты</h6>
              </Button></Link>
              <Link href="/about/page"><Button variant="outline" className="flex justify-start items-center gap-2 w-full my-[1rem]">
              <Building2 size={16} /><h6 className="pt-[0.2rem]">О нас</h6>
              </Button></Link>
              <Link href="/"><Button variant="outline" className="flex justify-start items-center gap-2 w-full my-[1rem]">
                <User size={16} />Страница 4
              </Button></Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
              </div>
            </div>
        </header>
    );
};