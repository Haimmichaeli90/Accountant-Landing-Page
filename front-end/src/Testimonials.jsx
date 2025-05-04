import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; 
import './assets/Testimonials.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const API_URL = import.meta.env.VITE_API_URL;
console.log('✅ Using API URL:', API_URL);
function Testimonials() {

  // const [testimonials, setTestimonials] = useState([
  //   { name: 'יוסי כהן', text: 'שירות מעולה, מאוד מקצועיים!' },
  //   { name: 'שרה לוי', text: 'הדה דאגה לי להחזרים בלי כאב ראש. ממליצה בחום!' }
  // ]);
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', text: '' });
 

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${API_URL}/testimonials`);
      setTestimonials(res.data);
      console.log('✅ Data from server:', res.data);
    } catch (err) {
      console.error('Error fetching testimonials', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!form.name || !form.text) return;
  //   setTestimonials([...testimonials, { name: form.name, text: form.text }]);
  //   setForm({ name: '', text: '' });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;

    try {
      console.log('Sending testimonial:', form);
      const res = await axios.post(`${API_URL}/testimonials`,form);
      setTestimonials([res.data, ...testimonials]); 
      setForm({ name: '', text: '' });
      toast.success('תודה על ההמלצה!')
    } catch (err) {
      console.error('Error submitting testimonial', err);
    }
  };


  return (
    <section className="testimonials">
      <h2>{t('testimonialsTitle')}</h2>
      <div className="testimonials-list">
        {testimonials.map((tItem, index) => (
          <motion.div
            key={index}
            className="testimonial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p>"{tItem.text}"</p>
            <h4>- {tItem.name}</h4>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          name="name"
          placeholder={t('testimonialForm.namePlaceholder')}
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder={t('testimonialForm.textPlaceholder')}
          value={form.text}
          onChange={handleChange}
          required
        />
        <button type="submit">{t('testimonialForm.submitButton')}</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
    
  );
}

export default Testimonials;
