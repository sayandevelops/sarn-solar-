'use server';

import {
  costSavingsEstimate,
  type CostSavingsEstimateInput,
  type CostSavingsEstimateOutput,
} from '@/ai/flows/cost-savings-estimate';

type ActionResult = 
  | { success: true; data: CostSavingsEstimateOutput }
  | { success: false; error: string };

export async function getCostSavingsEstimate(input: CostSavingsEstimateInput): Promise<ActionResult> {
  try {
    const result = await costSavingsEstimate(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in costSavingsEstimate flow:', error);
    return { success: false, error: 'Failed to generate estimate. The AI model may be temporarily unavailable. Please try again later.' };
  }
}
