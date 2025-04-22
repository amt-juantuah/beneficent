'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import sendEmail from '../lib/sendEmail';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
  cv: z.any().refine(files => files && files.length > 0, 'CV is required'),
});

export default function CareerApplicationForm() {
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
    formData.append('type', 'career');
    formData.append('to', 'info@beneficent.uk');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', `Job Application from ${data.name}`);
    formData.append('text', `${data.message || 'No cover letter'}\n\nEmail: ${data.email}`);
    formData.append('cv', data.cv[0]);

    const success = await sendEmail(formData, true);
    if (success) {
      toast.success('Application sent successfully!');
      reset();
    } else {
      toast.error('Failed to send application. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-16" encType="multipart/form-data">
      <input {...register('name')} placeholder="Full Name" className="w-full p-2 border" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" className="w-full p-2 border" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <textarea {...register('message')} placeholder="Optional cover letter..." className="w-full p-2 border h-24" />

      <input type="file" {...register('cv')} accept=".pdf,.doc,.docx" className="w-full" />
      {errors.cv && <p className="text-red-500 text-sm">{errors.cv.message}</p>}

      <button type="submit" className="bg-indigo-600 text-white px-4 py-2" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}