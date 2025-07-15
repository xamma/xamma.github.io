import React from 'react';

import awsArchitect from '../assets/aws-certified-solutions-architect-associate.png';
import awsDeveloper from '../assets/aws-certified-developer-associate.png';
import awsDevOps from '../assets/aws-certified-devops-engineer-professional.png';
import azureAdmin from '../assets/azure-administrator-associate.png';
import azureArchitect from '../assets/azure-solutions-architect-expert.png';
import ckad from '../assets/ckad.png';
import itil4 from '../assets/itil4.png';
import finops from '../assets/finops-certified-engineer.png';

export default function About() {
  const certificationIcons = [
    awsArchitect,
    awsDeveloper,
    awsDevOps,
    azureAdmin,
    azureArchitect,
    ckad,
    itil4,
    finops
  ];

  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          I'm passionate about everything with Computers, programming and building modern applications. I once was an engineer in the automotive sector and transitioned into cloudnative software engineering. I can build on every cloud and hold several professional and expert level certifications for them. 
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 items-center">
          {certificationIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Certification ${index + 1}`}
              className="h-24 mx-auto object-contain"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
