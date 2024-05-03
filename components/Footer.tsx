import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs'>
            &copy; 2030 Himal. All right reserved.
        </small>
        <p className='text-xs'>
            <small className='font-semibold'> 
                About this website:
            </small>
            built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}
