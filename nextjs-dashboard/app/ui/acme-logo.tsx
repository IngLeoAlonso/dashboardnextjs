import { BuildingOffice2Icon } from '@heroicons/react/24/outline'; 
import { lusitana } from '../ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingOffice2Icon className="h-12 w-12 " />
      <p className="text-[44px]">Cuerauaperi</p>
    </div>
  );
}
