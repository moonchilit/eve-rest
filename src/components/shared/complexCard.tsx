'use client'
import Link from 'next/link';
import React from 'react';



interface Props {
    CompName: string;
    CompAdress: string;
    CompDescSmall: string;
    CompImageUrl: string;
    CompSiteUrl : string;
    CompID:number;
  }

export const ComplexCard: React.FC<Props> = ({
    CompName,
    CompAdress,
    CompDescSmall,
    CompImageUrl,
    CompSiteUrl,
    CompID
}) => {
  return (
    
    <div className=" lg:pb-[3.5rem] pb-[5.5rem]">
      <h1 className="xl:text-[1.75rem] xl:pl-[1.1rem] sm:text-[2rem] sm:pl-[2rem] text-[1.75rem] pl-[1.5rem] pb-[1rem]">{CompName}</h1>
      <Link  href={{
        // '/ready-project/product/'+`${CompSiteUrl}`
      pathname: '/ready-project/complex/'+`${CompID}`
      // query: { name: CompSiteUrl },
    }}>
      <div className="flex justify-center ">
      <img className="rounded-[20px] sm:rounded-[30px] max-w-[80%] min-w-[80%] max-h-[30vh] min-h-[30vh] xl:max-h-[19.125rem] xl:object-cover xl:min-w-[25.5rem]  sm:min-w-[85%] sm:pt-[1rem] sm:max-h-[40vh] md:max-h-[50vh] lg:max-h-[40vh] lg:max-w-[40vh] lg:min-w-[95%] lg:min-h-[40vh]" src={ CompImageUrl}/>
      </div></Link>

      <div className="h-[10vh] sm:flex sm:justify-center sm:flex-wrap pt-[1rem]">
      <h2 className="text-left tracking-tighter w-[80%] xl:w-[90%] pl-[3rem] sm:pl-[0rem]">{CompDescSmall}</h2>
      <div className="sm:w-full ">
          <h3 className="xl:pt-[0.5rem] sm:text-right sm:pr-[3rem] md:pr-[4rem] text-right pr-[4rem] pt-[1rem] ">{CompAdress}</h3>
      </div>
    
      </div>
     </div>
     
  );
};