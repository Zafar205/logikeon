import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Interactive 3D Experiences",
      description:
        "Built with cutting-edge WebGL technology for immersive user experiences.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Performance",
      description:
        "Optimized for speed and responsiveness across all devices and platforms.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Premium quality development at competitive rates. No hidden fees, transparent pricing.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Cloud-Ready Architecture",
      description: "Scalable solutions that grow with your business needs.",
      icon: <IconCloud />,
    },
    {
      title: "Modern Tech Stack",
      description: "Built with Next.js, React, Three.js, and the latest web technologies",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support & Maintenance",
      description:
        "Dedicated support team ensuring your digital solutions run smoothly.",
      icon: <IconHelp />,
    },
    {
      title: "Custom Development",
      description:
        "Tailored solutions designed specifically for your unique business requirements.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "User-Centered Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white group-hover/feature:text-blue-300 transition duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white group-hover/feature:text-blue-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
