import { Cloudy, Cpu, DollarSign, LucideIcon, Ratio, UsersRound, Zap } from "lucide-react";

type TranslationKey = `${string}.${string}`;

type Solution = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    id: "ai-sol",
    titleKey: "solutions.ai.title",
    descriptionKey: "solutions.ai.description",
    icon: Ratio,
  },
  {
    id: "cloud-sol",
    titleKey: "solutions.cloud.title",
    descriptionKey: "solutions.cloud.description",
    icon: UsersRound,
  },
  {
    id: "data-sol",
    titleKey: "solutions.data.title",
    descriptionKey: "solutions.data.description",
    icon: Cloudy,
  },
  {
    id: "tech-sol",
    titleKey: "solutions.tech.title",
    descriptionKey: "solutions.tech.description",
    icon: Cpu,
  },
  {
    id: "finance-sol",
    titleKey: "solutions.finance.title",
    descriptionKey: "solutions.finance.description",
    icon: DollarSign,
  },
  {
    id: "emerging-sol",
    titleKey: "solutions.emerging.title",
    descriptionKey: "solutions.emerging.description",
    icon: Zap,
  },
];
