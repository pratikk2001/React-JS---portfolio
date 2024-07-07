import React from 'react';
import './service.css';

function Service() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and high-quality web applications.',
      icon: '🌐',
    },
    {
      title: 'Graphic Design',
      description: 'Creating visual content to communicate messages.',
      icon: '🎨',
    },
    {
      title: 'SEO Optimization',
      description: 'Improving the visibility of a website in search engines.',
      icon: '🔍',
    },
    {
      title: 'Digital Marketing',
      description: 'Promoting brands and products through digital channels.',
      icon: '📈',
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
