import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const About = () => {

    const router = useRouter()
    
    return (
    <>
    <NextSeo 
    title='About Us'
    description='Limitless Design about page' />
    <div className='flex flex-col items-center justify-evenly h-full bg-fixed bg-center bg-cover custom-img'>

        <motion.div 
        initial='hidden' animate='visible' variants={{
            hidden: {
                scale: .9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.0
                }
            }
        }}  className='mt-36 mb-16 mx-6'>
            <Image src='/headshot.jpg' alt='about page img' width={350} height={650}
            className='rounded-lg mx-6s shadow-2xl shadow-neutral-500 w-auto h-auto'/>
        </motion.div>

        <motion.div 
        initial='hidden' animate='visible' variants={{
            hidden: {
                scale: .9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.0
                }
            }
        }}  className='mx-6 font-dark sm:text-[1.4rem] tracking-wider max-w-[750px] bg-stone-100 p-6 mb-12 rounded-xl shadow-2xl shadow-neutral-500'>
            <h1 className='font-vibes font-bold text-[3.7rem] sm:text-[4.5rem] text-center text-[#A24857] pt-4 mb-8 '>About Us</h1>

            <div className='text-stone-900 text-[1.3rem] sm:text-[1.4rem] text-center sm:text-left space-y-5  sm:border-neutral-600 p-2'>
            
                <p>Welcome to Limitless Design&apos;s About Page!</p>
            
                <p>At Limitless Design, we believe that a great logo is an essential aspect of any business or brand. A logo is a visual representation of your company&apos;s values, mission, and personality. It is the first impression that potential customers have of your brand, and it should be memorable and visually appealing.</p>
            
                <p>Our team of talented designers has years of experience in creating unique and effective logos for businesses of all sizes. We are passionate about our work and take pride in delivering high-quality designs that exceed our clients expectations.</p>

                <p>Our design process begins with a thorough consultation with each client to understand their business, their target audience, and their vision for their logo. From there, we conduct extensive research to ensure that our designs are not only visually stunning but also strategically effective.</p>

                <p>We understand that every business is unique, and we work closely with our clients to create logos that capture the essence of their brand. We believe in open communication throughout the design process, and we welcome feedback and collaboration to ensure that our clients are completely satisfied with the final product.</p>

                <p>In addition to logo design, we offer a range of branding services, including brand identity design and marketing collateral design. Our goal is to help our clients establish a strong and cohesive visual brand that stands out in their market.</p>

                <div>

                <p>At Limitless Design, we are committed to delivering exceptional service and creating logos that are both beautiful and functional. We look forward to working with you to create a logo that will help your business reach its full potential. Contact us today to get started!</p>
            
                <p className='mt-6'>Thank you,</p>

                </div>

                <div className=''>
                    <p>Bri-Anna Johnson</p>

                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 mt-12'>
                       <p className='font-vibes font-bold text-[2.4rem] sm:text-[2.8rem] text-[#A24857] text-center '>Limitless Design</p>
                       <motion.button
                        onClick={() => {
                            router.push('/contact')
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.8}} 
                        className='font-redhat text-[#A24857] text-md sm:text-lg border-[3px] border-[#A24857] rounded-md py-2 px-4 tracking-wider hover:border-transparent hover:text-white hover:bg-[#A24857] transition duration-300'>Contact Us</motion.button>
        
                    </div>   
                </div>

            </div>



            
        </motion.div>

    </div>
    </>
  )
}

export default About