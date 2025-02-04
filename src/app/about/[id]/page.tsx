


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";



export default async function Home() { 
  
  return ( 
  <>
  <div className="xl:pt-[2vh] xl:w-[80%] xl:m-auto pl-[1.50rem]">
    <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/about/page">О нас</BreadcrumbLink>
      </BreadcrumbItem>
     
    </BreadcrumbList>
  </Breadcrumb>
    </div>
<div className=" xl:container ">
<section>
<div className="flex justify-center xl:text-[2.5rem] text-[2rem]">
  <h1>О компании</h1>

  </div>
<div className="xl:text-[1rem] xl:pt-[1rem] xl:w-[70%] xl:m-auto xl:tracking-tight px-[1.5rem] text-flex">
  <h3>Группа компаний «///» — одна из крупнейших девелоперских компаний республики Башкортостан, проекты которой представлены жилой недвижимостью комфорт- и бизнес-класса, а также коммерческой недвижимостью.
    

<p>sК «///» — это:</p>

<p>— // объектов, построенных в историческом и географическом центрах города; </p>
<p>— более /// /// кв. м введённых в эксплуатацию объектов;</p>
<p>— самые масштабные проекты в регионе; </p>
<p>— награды от независимых экспертов федерального и регионального уровня.</p>

<p>При проектировании дворового пространства мы придерживаемся принципов безбарьерной среды и комплексного развития территории: внутренняя инфраструктура комплексов включает в себя детские, спортивные площадки, колясочные и велосипедные, помещения под социальные, коммерческие организации. А закрытая территория и круглосуточное видеонаблюдение обеспечивают высокий уровень безопасности.</p></h3>



</div>
</section>

<section className="flex justify-center xl:pt-[1.5rem] pt-[1rem]">
<div className="bg-white xl:w-[65%] xl:m-auto xl:h-[50vh] h-[30vh] w-[90%] md:w-[65%] xl:rounded-[35px] rounded-[20px] flex justify-center items-center">
<h1 className="text-stone-950 text-[5rem]">VIDEO</h1>
</div>
</section>

<section>
<div className="container flex lg:justify-start justify-center">
  <h1 className="lg:text-[2rem] lg:pt-[1.5rem] xl:w-[70%] xl:m-auto text-[1.5rem] py-[1rem]">Нас можно найти:</h1>
</div>

<div className="xl:w-full flex justify-center xl:h-[40vh] xl:pt-[1.5rem] container">
<iframe src="https://yandex.ru/map-widget/v1/?ll=56.073731%2C54.765371&mode=whatshere&whatshere%5Bpoint%5D=56.073001%2C54.765311&whatshere%5Bzoom%5D=15&z=15" width="65%" height="100%"   className="position:relative; rounded-[20px] xl:rounded-[35px] xl:block hidden"></iframe>
<iframe src="https://yandex.ru/map-widget/v1/?ll=56.073731%2C54.765371&mode=whatshere&whatshere%5Bpoint%5D=56.073001%2C54.765311&whatshere%5Bzoom%5D=15&z=15" width="90%" height="200vh"   className="position:relative; rounded-[20px] xl:rounded-[35px] xl:hidden"></iframe>
</div>
</section>


</div>



  
  </>
  );
}
