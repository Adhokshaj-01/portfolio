import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { BoxReveal } from './magicui/box-reveal';
import { TextReveal } from './magicui/text-reveal';
import { BorderBeam } from './magicui/border-beam';


interface Props {
  description: string;
  icon: React.ReactNode; 

}

export function WorkFlowCard({  description, icon  }: Props) {
  return (
    <li className="relative ml-0 py-0">
      <div className="absolute top-0  -left-5 flex items-center justify-center  rounded-full w-12 h-12">
      <Avatar className="border-2 w-12 h-12 bg-transparent">
          <AvatarFallback
          className={`flex items-center justify-center w-full h-full text-lg `}
          >{icon}</AvatarFallback>
        </Avatar>

      </div>
      <div className="flex flex-1 flex-col justify-start">
        <TextReveal text={description} className={'text-red'} />
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </li>
  );
}
