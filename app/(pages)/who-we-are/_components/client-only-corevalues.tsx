'use client';

import { useClientTranslation } from "@/app/hooks/useTranslations";
import { coreValues, principles, visionMission, whyChooseMetasys } from "@/app/lib/culture.data";
import { motion } from "framer-motion";

// import {
//   visionMission,
//   coreValues,
//   principles,
//   whyChooseMetasys,
// } from "./whoWeAre.data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientOnlyCoreValues({ locale = 'en' }) {
  const { t, isLoading } = useClientTranslation(locale);

  if (isLoading) {
    return <div className="text-white py-20 text-center">Loading...</div>;
  }

  return (
    <div className="px-4 md:px-6 lg:px-16 py-8 md:py-16 space-y-20">

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-12">
        {visionMission.map((item :{
          title : string ,
          text : string 
        }, i:number) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-[17px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Core Values */}
      <section>
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t('corevalues.title')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coreValues.map((item:string [], i:number ) => (
            <motion.div
              key={i}
              className="border border-white/10 rounded-xl p-5"
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section>
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t('corevalues.principles')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {principles.map((item :{
            title : string,
            description : string 
          }, i:number) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section>
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t('corevalues.whychoose')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyChooseMetasys.map((item:string, i:number) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </section>

    </div>
  );
}