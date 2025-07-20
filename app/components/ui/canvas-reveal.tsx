"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      {/* Services Section Header */}
      <div className="text-center mb-12 px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We provide comprehensive digital solutions to help your business grow and succeed in the modern world
        </p>
      </div>
      
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-transparent w-full gap-4 mx-auto px-8">
        <Card title="Web Development" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Mobile Apps" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="UI/UX Design" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-blue-500/[0.3] group/canvas-card flex items-center justify-center bg-blue-950/[0.1] backdrop-blur-sm max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-blue-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-blue-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-blue-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-blue-400" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-blue-200 text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
            {title}
          </h2>
          <div className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-6 transition duration-300 delay-100 w-full flex justify-center">
            <TechLogos title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-blue-400 group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const TechLogos = ({ title }: { title: string }) => {
  const getTechLogos = (serviceTitle: string) => {
    switch (serviceTitle) {
      case "Web Development":
        return [
          { name: "Next.js", logo: <NextJSIcon /> },
          { name: "React", logo: <ReactIcon /> },
          { name: "Express.js", logo: <ExpressIcon /> },
          { name: "Node.js", logo: <NodeIcon /> },
        ];
      case "Mobile Apps":
        return [
          { name: "React Native", logo: <ReactNativeIcon /> },
          { name: "Flutter", logo: <FlutterIcon /> },
          { name: "Swift", logo: <SwiftIcon /> },
          { name: "Kotlin", logo: <KotlinIcon /> },
        ];
      case "UI/UX Design":
        return [
          { name: "Figma", logo: <FigmaIcon /> },
          { name: "Adobe XD", logo: <AdobeXDIcon /> },
          { name: "Sketch", logo: <SketchIcon /> },
          { name: "Framer", logo: <FramerIcon /> },
        ];
      default:
        return [];
    }
  };

  const logos = getTechLogos(title);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {logos.map((tech, index) => (
        <div
          key={tech.name}
          className="flex flex-col items-center transform hover:scale-110 transition-transform duration-200"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fadeInUp 0.5s ease-out forwards"
          }}
        >
          <div className="w-8 h-8 mb-1 text-white/80 hover:text-white transition-colors">
            {tech.logo}
          </div>
          <span className="text-xs text-white/60 hover:text-white/80 transition-colors text-center">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

// Technology Icons
const NextJSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.25 16.06 1.734 11.572 0z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.36-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.01 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577v-.001zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264l.007.014z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.324,6.825,2.324,6.921v10.15c0,0.097,0.053,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M1.5 6.25A4.75 4.75 0 0 1 6.25 1.5h11.5A4.75 4.75 0 0 1 22.5 6.25v11.5a4.75 4.75 0 0 1-4.75 4.75H6.25A4.75 4.75 0 0 1 1.5 17.75V6.25zM6.25 3A2.25 2.25 0 0 0 4 5.25v12.5A2.25 2.25 0 0 0 6.25 20h11.5A2.25 2.25 0 0 0 20 17.75V5.25A2.25 2.25 0 0 0 17.75 3H6.25z"/>
    <path d="M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/>
    <path d="M8.27 12.804c1.15.65 2.32 1.196 3.73 1.196s2.58-.546 3.73-1.196c.82-.465 1.519-.965 2.02-1.558.247-.293.453-.613.453-1.246 0-.633-.206-.953-.453-1.246-.501-.593-1.2-1.093-2.02-1.558C14.58 6.546 13.41 6 12 6s-2.58.546-3.73 1.196c-.82.465-1.519.965-2.02 1.558-.247.293-.453.613-.453 1.246 0 .633.206.953.453 1.246.501.593 1.2 1.093 2.02 1.558z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
  </svg>
);

const SwiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M7.508 0c-.287 0-.573 0-.86.002C2.053.285-1.143 5.57.18 10.427 1.503 15.284 6.395 18.656 11.386 18.656c5.71 0 10.29-4.805 10.29-10.948C21.677 3.56 18.99 0 15.168 0H7.508zm7.218 9.655c-1.21 1.21-3.924 3.482-6.78 3.482-1.852 0-3.482-.644-4.127-1.652 1.21.77 3.06 1.21 4.772 1.21 2.418 0 4.615-.902 6.135-2.04z"/>
  </svg>
);

const KotlinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M1.3 24l11.3-11.5L24 24H1.3zm0-11.5L12.8.5H24L12.8 11.5H1.3zM1.3.5h11.5L1.3 12V.5z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.355 3.019 3.019 3.019 1.665 0 3.019-1.355 3.019-3.019v-3.019H8.148z"/>
  </svg>
);

const AdobeXDIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.967 17.739H7.548L6.44 14.607 5.292 17.74H1.868l2.898-6.436L1.983 5.261h3.335l1.018 3.138.938-3.138h3.281l-2.78 6.043 2.991 6.436zm9.764-12.478v1.843h-1.098v7.514c0 .479-.039 1.042-.16 1.367-.121.326-.363.65-.763.934-.4.285-1.043.445-1.927.445-.639 0-1.125-.08-1.686-.238l.361-1.724c.32.079.639.12 1.045.12.32 0 .601-.08.764-.239.161-.16.242-.399.242-.717V7.104h-.965V5.261h4.187z"/>
  </svg>
);

const SketchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M6.5 6h11l5.5 8.5L12 22 .5 14.5 6 6z M12 22l5-7.5h-10L12 22z M7 14.5L1.5 9 6.5 6l.5 8.5z M17 14.5L22.5 9 17.5 6l-.5 8.5z"/>
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"/>
  </svg>
);
