import { ChooseComplex } from "@/components/shared/modals/chooseComplex";
import { prisma } from "../../../../../../prisma/prisma-client";


export default async function ModalPage({params : { id }}: {params: { id: string}}) {
  const complexDB = await prisma.complexDB.findFirst({
where:{
  id:Number(id),
}
  });

  return <ChooseComplex complexK={complexDB}/>;
}