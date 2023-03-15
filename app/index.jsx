import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import Onboarding from "./Onboarding";
import SignIn from './SignIn';

export default function Page() {
  return (
    <TailwindProvider utilities={utilities}>
     {/* <Onboarding /> */}
     <SignIn />
   </TailwindProvider>
    
  );
}

