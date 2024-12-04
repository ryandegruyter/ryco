import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
              About RyCo
            </h2>
            <p className="text-gray-300 mb-6">
              We are a forward-thinking IT consulting firm specializing in enterprise-grade solutions.
              Our team of expert consultants brings years of experience in Java, Angular, AWS, Kafka,
              JavaScript, React, and blockchain technologies.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're looking to modernize your legacy systems, build scalable cloud solutions,
              or venture into Web3, we have the expertise to guide you through your digital transformation journey.
            </p>
            <a
              href="mailto:info@ryco.site"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
