import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="mt-4 text-gray-400">What our clients say about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="RyCo transformed our legacy system into a modern, cloud-native application. Their expertise in Java and AWS was invaluable."
            author="Sarah Johnson"
            position="CTO, TechCorp"
          />
          <TestimonialCard
            quote="The blockchain solution developed by RyCo helped us streamline our supply chain operations significantly."
            author="Michael Chen"
            position="Operations Director, LogisticsPro"
          />
          <TestimonialCard
            quote="Their Kafka implementation handled our real-time data processing needs perfectly. Highly recommended!"
            author="David Miller"
            position="Head of Engineering, DataFlow"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, position }: { quote: string; author: string; position: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg">
      <Quote className="text-blue-400 mb-4" />
      <p className="text-gray-300 mb-6">{quote}</p>
      <div>
        <div className="font-semibold text-white">{author}</div>
        <div className="text-gray-400">{position}</div>
      </div>
    </div>
  );
}
