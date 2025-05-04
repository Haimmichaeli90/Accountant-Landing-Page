import { use } from 'react';
import './assets/FAQ.css';
import { useTranslation } from 'react-i18next';

function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1')
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2')
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3')
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4')
    }
  ];

  return (
    <section id="faq" className="faq">
      <h2>{t('faqTitle')}</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={idx}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;