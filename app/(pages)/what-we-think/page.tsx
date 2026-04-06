
import NavbarNew from '@/app/components/navbar/navbar'
import WhatWeThinkBody from './_component/what-we-think-body'


export default function WhatWeThink() {
  return (
    <>
      <NavbarNew />
      <main className="bg-black text-white min-h-screen pt-28">
        <WhatWeThinkBody />
      </main>
    </>
  )
}
