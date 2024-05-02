import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:[350px] md:h-[400px] md:w-[400px] ">
          <Image src="/man.png" fill className="object-contain dark:hidden" alt="man"
          
          />
          <Image src="/man-dark.png" fill className="object-contain hidden dark:block" alt="man-dark"
          
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image src="/women.png" fill className="object-contain dark:hidden" alt="women" />
          <Image src="/women-dark.png" fill className="object-contain hidden dark:block" alt="women-dark" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
