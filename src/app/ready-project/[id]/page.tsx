

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import React from "react";
import { Footer } from "@/components/shared/footer";

import CardRender from '@/components/shared/ComplexCardRender';


export default function Home1() { 
  
 
  return ( 
  <>
  
      
  

 
  <div className="py-[2vh] sm:pl-[2rem] pl-[2rem]">
  <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Главная</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/ready-project/page">Готовые проекты</BreadcrumbLink>
    </BreadcrumbItem>
   
  </BreadcrumbList>
</Breadcrumb>
  </div>

<div className="grid sm:grid-cols-1 sm:grid-rows-1 grid-cols-1 grid-rows-1 lg:gap-1 mt-[1.5vh] mb-[5vh] lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">


<CardRender/>


  

 

 </div>
 <Footer/>
  </>
  );
}
