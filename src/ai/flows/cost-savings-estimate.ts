'use server';

/**
 * @fileOverview AI-powered tool to estimate the cost savings and environmental impact of installing Sarn Solar's solutions.
 *
 * - costSavingsEstimate - A function that handles the cost savings estimation process.
 * - CostSavingsEstimateInput - The input type for the costSavingsEstimate function.
 * - CostSavingsEstimateOutput - The return type for the costSavingsEstimate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CostSavingsEstimateInputSchema = z.object({
  averageElectricityBill: z
    .number()
    .describe('Your average monthly electricity bill in USD.'),
  roofSize: z.number().describe('The approximate size of your roof in square feet.'),
  location: z.string().describe('Your city and state.'),
});
export type CostSavingsEstimateInput = z.infer<typeof CostSavingsEstimateInputSchema>;

const CostSavingsEstimateOutputSchema = z.object({
  estimatedSavingsPerYear: z
    .number()
    .describe('Estimated cost savings per year in USD.'),
  environmentalImpact: z
    .string()
    .describe('Description of the positive environmental impact.'),
  systemSize: z.number().describe('Recommended solar system size in kW.'),
  paybackPeriod: z.number().describe('Estimated payback period in years.'),
});
export type CostSavingsEstimateOutput = z.infer<typeof CostSavingsEstimateOutputSchema>;

export async function costSavingsEstimate(input: CostSavingsEstimateInput): Promise<CostSavingsEstimateOutput> {
  return costSavingsEstimateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'costSavingsEstimatePrompt',
  input: {schema: CostSavingsEstimateInputSchema},
  output: {schema: CostSavingsEstimateOutputSchema},
  prompt: `You are a solar energy consultant. A user will provide their average monthly electricity bill, roof size, and location. 
You will estimate the cost savings and environmental impact of installing Sarn Solar's solutions.

Consider factors such as solar irradiance based on location, typical energy consumption, and current solar panel efficiencies.

Calculate the estimated cost savings per year, describe the positive environmental impact, recommend a solar system size, and estimate the payback period.

Average Monthly Electricity Bill: ${'{{averageElectricityBill}}'} USD
Roof Size: ${'{{roofSize}}'} square feet
Location: ${'{{location}}'}

Ensure the output is accurate and tailored to the user's specific circumstances.

Here's the estimate:
${'{{output.estimatedSavingsPerYear}}'} USD saved per year.
${'{{output.environmentalImpact}}'}
Recommended system size: ${'{{output.systemSize}}'} kW.
Payback period: ${'{{output.paybackPeriod}}'} years.
`,
});

const costSavingsEstimateFlow = ai.defineFlow(
  {
    name: 'costSavingsEstimateFlow',
    inputSchema: CostSavingsEstimateInputSchema,
    outputSchema: CostSavingsEstimateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
