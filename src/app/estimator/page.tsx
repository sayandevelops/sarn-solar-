import { Metadata } from 'next';
import EstimatorForm from './estimator-form';

function RupeeIcon() {
  return <span className="h-10 w-10 font-bold text-2xl">₹</span>;
}

export const metadata: Metadata = {
  title: 'Cost Savings Estimator',
  description: 'Use our AI-powered tool to estimate your potential cost savings and environmental impact by switching to solar with SARN SOLAR.',
};

export default function EstimatorPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground rounded-full p-4 mb-4">
              <RupeeIcon />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Cost Savings Estimator</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Answer a few simple questions to get a personalized estimate of your potential savings and environmental impact.
            </p>
          </div>
          <EstimatorForm />
        </div>
      </div>
    </div>
  );
}
