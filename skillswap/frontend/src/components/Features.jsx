import React from 'react';

const Features = () => {
  const features = [
    "Skill-based matchmaking",
    "Real-time chat",
    "Expert and learner profiles",
    "Collaborative learning"
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
