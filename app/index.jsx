import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import Onboarding from "./Onboarding";

export default function Page() {
  return (
    <TailwindProvider utilities={utilities}>
     <Onboarding />
   </TailwindProvider>
    
  );
}

