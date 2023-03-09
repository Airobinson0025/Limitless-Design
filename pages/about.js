import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-evenly h-full bg-fixed bg-center bg-cover custom-img'>

        <div className='mt-48 mb-16 mx-6'>
            <Image src='/AboutPage.jpeg' alt='about page img' width={350} height={650}
            className='rounded-lg mx-6s shadow-lg shadow-neutral-400 w-auto'/>
        </div>

        <div className='mx-8 font-dark text-lg sm:text-[1.4rem] tracking-wider max-w-[750px] bg-stone-100 p-6 mb-12 rounded-xl shadow-lg shadow-neutral-400'>
            <h1 className='font-playfair font-bold text-[1.2rem] sm:text-[1.9rem] text-center text-[#800020] underline underline-offset-8 decoration-2 decoration-stone-900  mb-20 pt-10'>~ About Limitless Design ~</h1>

            <div className='text-stone-900 space-y-6 sm:border-l-4 sm:border-[#800020] p-6'>
            
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

                <div>
                    <p>Bri-Anna Johnson</p>
                    <p>Limitless Design</p>
                </div>

            </div>



            
        </div>

    </div>
  )
}

export default About