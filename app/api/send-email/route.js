   import { NextResponse } from 'next/server';
   import emailjs from '@emailjs/browser';

   export async function POST(request) {
     try {
       const data = await request.json();

       const result = await emailjs.send(
         process.env.EMAILJS_SERVICE_ID,
         process.env.EMAILJS_TEMPLATE_ID,
         data,
         process.env.EMAILJS_PUBLIC_KEY
       );

      //  console.log(data)

       return NextResponse.json({ success: true });
     } catch (error) {
       console.error('Error sending email:', error);
       return NextResponse.json({ success: false, error: error.message });
     }
   }