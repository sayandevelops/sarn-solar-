'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getCostSavingsEstimate } from './actions';
import type { CostSavingsEstimateOutput } from '@/ai/flows/cost-savings-estimate';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, Leaf, BarChart, Zap, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  averageElectricityBill: z.coerce.number().min(1, 'Please enter a valid bill amount.'),
  roofSize: z.coerce.number().min(100, 'Please enter a roof size of at least 100 sq ft.'),
  location: z.string().min(2, 'Please enter a valid location (e.g., "City, State").'),
});

type FormValues = z.infer<typeof formSchema>;

export default function EstimatorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CostSavingsEstimateOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      averageElectricityBill: '' as any,
      roofSize: '' as any,
      location: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const response = await getCostSavingsEstimate(values);

    if (response.success) {
      setResult(response.data);
    } else {
      setError(response.error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error,
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Your Information</CardTitle>
          <CardDescription>All fields are required to generate an accurate estimate.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="averageElectricityBill"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Monthly Electricity Bill ($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 150" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roofSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate Roof Size (sq ft)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 2000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City & State</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., San Francisco, CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Estimate...
                  </>
                ) : (
                  'Calculate Savings'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="mt-8">
            <Card className="shadow-lg animate-in fade-in-50 duration-500">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-center">Your Estimated Solar Impact</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                        <DollarSign className="h-10 w-10 text-accent mb-2"/>
                        <h3 className="text-muted-foreground text-sm font-bold uppercase">Annual Savings</h3>
                        <p className="text-3xl font-bold font-headline text-primary">
                            ${result.estimatedSavingsPerYear.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                        <Zap className="h-10 w-10 text-accent mb-2"/>
                        <h3 className="text-muted-foreground text-sm font-bold uppercase">System Size</h3>
                        <p className="text-3xl font-bold font-headline text-primary">
                            {result.systemSize} kW
                        </p>
                    </div>
                     <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                        <BarChart className="h-10 w-10 text-accent mb-2"/>
                        <h3 className="text-muted-foreground text-sm font-bold uppercase">Payback Period</h3>
                        <p className="text-3xl font-bold font-headline text-primary">
                            ~{result.paybackPeriod} years
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start p-6">
                    <div className="flex items-center gap-2">
                        <Leaf className="h-6 w-6 text-accent"/>
                        <h3 className="text-xl font-bold font-headline">Environmental Impact</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">{result.environmentalImpact}</p>
                </CardFooter>
            </Card>
        </div>
      )}
    </>
  );
}
