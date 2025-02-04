import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["5 team members", "10GB storage", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "Unlimited team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Choose Your Plan
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="rounded-lg border p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-3xl font-bold">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center justify-center"
                  >
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={index === 1 ? "default" : "outline"}
                className="w-full"
              >
                {index === 2 ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
