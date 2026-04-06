export type SupportItem =
  | {
      type: "text";
      subtitle: string;
      title: string;
      hoverTitle: string;
    }
  | {
      type: "image";
      image: string;
      alt?: string;
    };

export const supportItems: SupportItem[] = [
  {
    type: "text",
    subtitle: "VISION, STRATEGY AND IMPLEMENTATION",
    title: "Design, implement and run a service function that delight customers",
    hoverTitle: "Customer standards, tech advancements and business pressure are moving support beyound the traditional cost-focused model. Build trust bwith customers while growing your share of wallet with a vison, stategy and delivery for a future-proofed service function",
  },

  {
    type: "text",
    subtitle: "PRODUCT AND SERVICE INNOVATION",
    title: "Inspire with products and services that are designed to be delightfully simple",
    hoverTitle: "95% of new products fail. With companies struggling to align their ambitions with customer needs, the ability to create lasting products and services is critical. Connect strategy, innovation and execution to create an experience customers love",
  },
  {
  type: "image",
  image: "/images/cloud1.jpg",
},
  {
    type: "text",
    subtitle: "TECHNOLOGY AND TALENT ENABLEMENT",
    title: "Accelerate personalized support interactions with the right tech and talents",
    hoverTitle: "67% of CSO/CCOs plain to invest in AI for their service area, but do they know which investements are best? The right tech and talent trainnings can improve efficiency, retain employee and provide a personalized support experience for customers",
  },
  {
    type: "text",
    subtitle: "DATA AND INSIGHTS",
    title: "Strenghten loyaltya and retention with the help of customer data and insights",
    hoverTitle: '84% of service leaders says customer data is "very or extremely important" for achieving organizational goals. Take steps to turn complex data into future insights and turn customers in long-term advocates',
  },
  {
  type: "image",
  image: "/images/cloud2.jpg",
  },
];
