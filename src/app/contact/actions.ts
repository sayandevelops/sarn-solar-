'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

type ActionResult = 
  | { success: true }
  | { success: false; error: string };

export async function handleContactFormSubmission(input: ContactFormInput): Promise<ActionResult> {
  try {
    const validatedInput = contactFormSchema.parse(input);
    
    // In a real application, you would process this data:
    // - Send an email notification
    // - Save to a database or CRM
    console.log('New contact form submission:', validatedInput);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, error: 'There was a problem submitting your message. Please try again.' };
  }
}
