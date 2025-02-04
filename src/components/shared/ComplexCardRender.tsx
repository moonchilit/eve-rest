

import React from 'react';

import { prisma } from '../../../prisma/prisma-client';
import { ComplexCard } from './complexCard';




export default async function CardRender() { 
  const complexK = await prisma.complexDB.findMany({

  });
 
  return ( 
    
       complexK.map((as) => (
      
      <ComplexCard key={1}
      CompName={as.NameComplex}
      CompAdress={as.Adress}
      CompDescSmall={as.descriptionSmall}
      CompImageUrl={as.url}  
      CompSiteUrl={as.SiteUrl}
      CompID={as.id}
      />
       ))
    
    // <div className=" lg:pb-[3.5rem]">
    //   <h1 className="xl:text-[1.75rem] xl:pl-[1.1rem] sm:text-[2rem] sm:pl-[2rem] ">{CompName}</h1>
    //   <Link  href={{
    //     // '/ready-project/product/'+`${CompSiteUrl}`
    //   pathname: '/ready-project/complex/'+`${complexN.}`
    //   // query: { name: CompSiteUrl },
    // }}>
    //   <div className="flex justify-center ">
    //   <img className="rounded-[20px] sm:rounded-[30px] xl:max-h-[19.125rem] xl:object-cover xl:min-w-[25.5rem]  sm:min-w-[85%] sm:pt-[1rem] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[40vh] lg:max-w-[40vh] lg:min-w-[95%] lg:min-h-[40vh]" src={ CompImageUrl}/>
    //   </div></Link>

    //   <div className="h-[10vh] sm:flex sm:justify-center sm:flex-wrap pt-[1rem]">
    //   <h2 className="text-left tracking-tighter sm:w-[80%] xl:w-[90%]">{CompDescSmall}</h2>
    //   <div className="sm:w-full ">
    //       <h3 className="xl:pt-[0.5rem] sm:text-right sm:pr-[3rem] md:pr-[4rem]">{CompAdress}</h3>
    //   </div>
    
    //   </div>
    //  </div>
     
  );
};