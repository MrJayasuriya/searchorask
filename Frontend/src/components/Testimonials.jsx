import { motion } from "framer-motion";
import Section from "./Section";

const testimonials = [
  {
    quote: "Since adding Askiton.ai, our conversion rate from blog readers to trial signups increased by 42%. It's literally printing money.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, TechFlow SaaS",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    quote: "Our support tickets dropped 30% overnight. Users just ask the AI instead of emailing us for basic 'how-to' questions.",
    author: "David Chen",
    role: "Founder, E-com Plus",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    quote: "The easiest implementation we've ever done. Dropped the script, gave it 5 minutes to crawl, and it was answering flawlessly.",
    author: "Elena Rodriguez",
    role: "Director of Product, DevTools Inc",
    avatar: "https://i.pravatar.cc/100?img=5"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-n-8">
      <div className="container">
        <div className="text-center max-w-[50rem] mx-auto mb-16">
          <h2 className="h2 mb-4">Trusted by fast-growing teams</h2>
          <p className="body-2 text-n-4">
            See how companies are transforming their website experience with AI search.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-n-7 border border-n-6 flex flex-col justify-between"
            >
              <div className="mb-8">
                {/* Custom Quote Icon */}
                <svg className="w-8 h-8 text-primary-1/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-n-1 text-lg leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full border-2 border-n-6" />
                <div>
                  <h6 className="font-semibold text-n-1">{item.author}</h6>
                  <p className="text-xs text-n-4">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
