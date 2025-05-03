import './assets/Services.css';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = t('services', { returnObjects: true });

  return (
    <section id="services" className="services">
      <h2>{t('servicesTitle')}</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
