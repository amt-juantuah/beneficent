'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import sendEmail from '../lib/sendEmail'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('type', 'enquiry');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', `Client Inquiry from ${data.name}`);
    formData.append('text', `${data.message}\n\nFrom: ${data.email}`);
    formData.append('to', 'info@beneficent.uk');
  
    const success = await sendEmail(formData, true); // make sure sendEmail handles FormData
    if (success) {
      toast.success('Message sent successfully!');
      reset();
    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-16" encType="multipart/form-data">
      <input {...register('name')} placeholder="Name" className="w-full p-2 border" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" className="w-full p-2 border" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <textarea {...register('message')} placeholder="Your message..." className="w-full p-2 border h-32" />
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

      <button type="submit" className="bg-indigo-600 text-white px-4 py-2" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}


