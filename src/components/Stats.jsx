import React from 'react';
import { FaCode, FaCertificate, FaGlobe } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaCode size={28} />,
      title: 'Total Projects',
      description: 'Innovative web & mobile solutions crafted',
      value: 4,
    },
    {
      icon: <FaCertificate size={28} />,
      title: 'Certificates',
      description: 'Professional skills validated',
      value: 3,
    },
    {
      icon: <FaGlobe size={28} />,
      title: 'Years of Experience',
      description: 'Continuous learning journey',
      value: 2,
    },
  ];

  return (
   
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mt-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1b1c2e] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#2b2c45] p-3 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </div>
            <div className="uppercase text-sm tracking-wide text-gray-300 font-semibold">
              {stat.title}
            </div>
            <div className="text-gray-400 text-sm mt-1">{stat.description}</div>
          </div>
        ))}
      </div>

  );
};

export default Stats;