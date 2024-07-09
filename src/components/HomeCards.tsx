import React from "react";
import { PinContainer } from "./ui/3d-pin";
import MaxWidthWrapper from "./MaxWidthWrapper";

const HomeCards = ({
  title,
  description,
  project_link,
}: {
  title: string;
  project_link: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-center m-5">
      <PinContainer title={title} href={project_link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
};

export default HomeCards;
