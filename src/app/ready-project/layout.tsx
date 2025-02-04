

import type { Metadata } from "next";
import { Nunito } from "next/font/google";


import "@/app/globals.css";
import { Header } from "@/components/shared/header";
import { Container } from "@/components/shared";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});



export const metadata: Metadata = {
  title: "Eve-rest",
};

export default function ReadyProjLayout({
  children,
  test
}: Readonly<{
  children: React.ReactNode;
  test: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      
      <body
        className={`${nunito.variable} antialiased`}>
           
        <div className="py-[2vh]">
        
          <Header/>
          
            <Container>
            
             {children}
             {test}
             </Container>
         
          
         
       
          
        </div>
      </body>
    </html>
  );
}
