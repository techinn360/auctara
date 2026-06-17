import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const industries = [
  {
    title: 'Vehicles',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEX8leSH21KvuQuB3pilNojog7U5jgyyayXXfxlS5J3NK3p4gqO69GD71cPWqDeb2npmFHsp-Q7wsGsU1kI_qE1BP7a2jJD5y_Cl5WGgdzvhTsG7S8uIf5A9OuOA_gnHFrQ0ZmY9gELNYqfgXElnO4jLP4AkfzTPZtZZbyHjTXgkDVEA9ZthtsE2YMIEV6a21T5WrRvSBsaVzg5V5bArCQhejBtI89hNKcOK93WcQfde5bE6Uyvd-L34qZTt1T47-bqtZGHvQKJng',
  },
  {
    title: 'Salvage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7zuPHLNz5MYVs2GoyZbSV1PhTwTL8P2czmBgJaPUnDhJkUy_osN4zkgJafSguysR0-L92RiCKDIlxsRe_FY49rVfHlgnM8xTa8DLBTEUSZgNRPK7PyqzlO3cvJIfz_9lWe93RuhTvpuxOydf95Wwx4zon3HFebQtHyNEGoyB4rF6O7u_287Nty5J8viVhVHZzUOshMB72R_Xje90yVg7X1Igj8b3YLP_7UH285eFkpHKdVrtkyn1B-xh0ZNu34mib6HMmXrzpRM',
  },
  {
    title: 'Equipment',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJaBWPZGBQWh7jHBj2WhEh2fbFttdtQL93EQWhd8Vop5I04-ua82RSawUQFs-LUJ6na2xyicJclHQqqGOWyvQmEPkYBmUFDjPif1KMLe6x5qp9Vi_-KEjj1cefCJ_3LQ_Nza-SX-DZJ8_-fyZ7XqzfgEX0eHPKbN_lEF6Z-VGhDDfUTBGtZ0cWsNtuMHDcixDxYb6_JeaCvCyP2qjDKZhRx404AFEzCMiWiVqnTQQZkF7bvXwx_z0xlwbuBjr6hMcCQ4P7FfWfOyc',
  },
  {
    title: 'Government',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNtaWo07jKjFctsYrVKImUliiZrWqLViKVhhDjdbRnkm_E4SoaNGtKcHCsi-1V2WS7-cVbyLF-eXywpFWVAC8R2Dt343YH-0IsStJ01aYFJVqLzGP9wAYRG3o9nkXjho22s0-IOZe8Ki-w0xqdk_lYBnpGLzTixY6erzzOug_n9SWojWOh57krHA5SaOj6iw4WviIai_UVzxtHuBKW1G9DuqFWxRSNmdaUYkRCI3S5GP0y_eErLA4s50P9-6sCZK0KIafmre28Y44',
  },
]

export default function IndustryRouting() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 md:py-24 bg-[#08100c]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, i) => (
            <motion.a
              key={industry.title}
              href="#"
              className="group relative overflow-hidden h-[220px] md:h-[300px] rounded-2xl border border-[#3b4a41] flex flex-col justify-end p-6 md:p-8"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(to top, #0d1511 0%, rgba(13,21,17,0.4) 50%, transparent 100%)',
                }}
              />

              {/* Background image with zoom on hover */}
              <motion.img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />

              <div className="relative z-20">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.4] mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#bacbbf] group-hover:text-[#6effc0] transition-colors duration-200">
                  Explore Solution →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
