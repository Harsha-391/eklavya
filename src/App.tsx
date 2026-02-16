
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Video,
  MapPin,
  TrendingUp,
  Zap,
  Play,
  Rocket
} from 'lucide-react';
import './index.css';

// Reusable Section Component
const Section = ({ children, className = '', id = '', style = {} }: { children: React.ReactNode, className?: string, id?: string, style?: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`section-padding ${className}`}
      style={style}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="feature-card"
  >
    <div className="service-icon" style={{ marginBottom: '1.5rem' }}>
      <Icon size={24} />
    </div>
    <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{title}</h3>
    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{description}</p>
  </motion.div>
);

function App() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const keywords = [
    "Best school in Jaipur",
    "Best school in Vidhyadhar Nagar",
    "Best school for Class 8 in Jaipur",
    "Top CBSE School Sikar Road"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="brand">
            SNEEZE.<span className="text-gold">MEDIA</span>
          </div>
          <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section: The Identity Shift */}
      <header className="hero-section">
        <div className="container hero-split">
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="keyword-tag" style={{ marginBottom: '1.5rem' }}>The Admission Season Proposal</div>
              <h1 className="font-heading">
                From <span className="text-muted" style={{ textDecoration: 'line-through' }}>eklavyaschool.net</span> to <br />
                <span className="text-gold">EklavyaInternationalAcademy.com</span>
              </h1>
              <p className="hero-subtitle">
                Reimagining the digital legacy of Jaipur’s finest institution. The admission season is here. Your digital presence must be inevitable.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Initiate Transformation <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="hero-visual">
            {/* Dynamic Comparison Visual */}
            <motion.div
              className="comp-card"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ top: '20px', left: '20px', zIndex: 10, background: '#1e293b', border: '1px solid #fbbf24' }}
            >
              <div className="browser-bar" style={{ background: '#0f172a' }}>
                <div className="dot" style={{ background: '#ff5f56' }}></div>
                <div className="dot" style={{ background: '#ffbd2e' }}></div>
                <div className="dot" style={{ background: '#27c93f' }}></div>
                <div className="url-bar" style={{ color: '#fbbf24', border: '1px solid #fbbf24' }}>
                  https://eklavyainternationacademy.com
                </div>
              </div>
              <div className="comp-content">
                <h3 style={{ color: '#fbbf24', fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>PREMIUM CAMPUS</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Next.js • 0.4s Load Time • Mobile-First</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                  <div style={{ height: '8px', width: '40px', background: '#fbbf24', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '40px', background: '#334155', borderRadius: '4px' }}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="comp-card"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ top: '-40px', left: '-40px', zIndex: 1, opacity: 0.4, transform: 'scale(0.95)' }}
            >
              <div className="browser-bar">
                <div className="dot"></div><div className="dot"></div><div className="dot"></div>
                <div className="url-bar">http://eklavyaschool.net</div>
              </div>
              <div className="comp-content" style={{ filter: 'grayscale(100%)' }}>
                <h3 style={{ color: '#64748b' }}>Legacy Site</h3>
                <p style={{ color: '#64748b' }}>HTML • 4.5s Load Time</p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Section 1: The Technical Core */}
      <Section id="tech">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            The Technical Core: <span className="text-gold">Next.js Revolution</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We are migrating from a basic HTML structure to a high-performance React application.
          </p>
        </div>

        <div className="grid-3">
          <FeatureCard
            icon={Zap}
            title="Zero-Wait Load Times"
            description="Built with Next.js Static Site Generation (SSG). Parents on 4G/5G in Jaipur will experience instant page loads, ensuring zero bounce rate."
          />
          <FeatureCard
            icon={Rocket}
            title="App-Like Experience"
            description="Converting 50+ cluttered pages (Labs, Sports, NCC) into smooth, interactive scrolling sections that feel like a native mobile app."
          />
          <FeatureCard
            icon={Globe}
            title="Domain Authority"
            description="Upgrading to .com signals international standards. We manage the migration to ensure trust and prestige."
          />
        </div>
      </Section>

      {/* Section 2: Hyper-Local SEO */}
      <Section id="seo" style={{ background: 'linear-gradient(to bottom, #0f172a, #151e32)' }}>
        <div className="grid-2">
          <div>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Hyper-Local <span className="text-gold">SEO Dominance</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We don't just want traffic; we want <strong>Jaipur's</strong> traffic. By targeting specific intent-driven searches, we ensure Eklavya appears exactly when parents are deciding.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TrendingUp size={20} className="text-gold" /> TARGET KEYWORDS
              </h4>
              <div>
                {keywords.map((k, i) => (
                  <span key={i} className="keyword-tag">{k}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="google-card">
            <div className="g-result">
              <div className="g-url">
                <div style={{ background: '#eee', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 'bold', color: '#333' }}>Ad</div>
                eklavyainternationacademy.com
              </div>
              <a href="#" className="g-title">Eklavya International Academy | {keywords[keywordIndex]}</a>
              <div className="g-desc">
                Admissions Open 2026-27. World-class infrastructure, Smart Classrooms, and Sports Academy on Sikar Road. Apply Now for Nursery to Class 11.
              </div>
              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <span style={{ color: '#8ab4f8', fontSize: '14px' }}>Admissions</span>
                <span style={{ color: '#8ab4f8', fontSize: '14px' }}>Fee Structure</span>
                <span style={{ color: '#8ab4f8', fontSize: '14px' }}>Campus Tour</span>
              </div>
            </div>

            <div className="g-result" style={{ paddingLeft: '20px', borderLeft: '3px solid #3c4043' }}>
              <div className="g-url">
                <MapPin size={14} style={{ color: '#bdc1c6' }} /> Google Maps
              </div>
              <div style={{ color: '#fff', fontWeight: 'bold', margin: '5px 0' }}>Eklavya International Academy</div>
              <div style={{ fontSize: '14px', color: '#eab308' }}>4.9 ★★★★★ (524)</div>
              <div style={{ fontSize: '14px', color: '#bdc1c6' }}>School in Jaipur, Rajasthan</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: Content Production */}
      <Section id="content">
        <div className="grid-2">
          <div className="order-2 md:order-1">
            <div className="service-item">
              <div className="service-icon"><Video size={24} /></div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>The Director's Note</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Regular, high-quality video shoots where the Director addresses parents directly, building trust and transparency. Scripted and produced by Sneeze Media.</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon"><Play size={24} /></div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Event Coverage</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Cinematic reels of Annual Functions, Sports Days, and Science Exhibitions that show the scale of current student life.</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon"><TrendingUp size={24} /></div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Educational Shorts</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>"Did You Know?" reels featuring teachers to highlight academic excellence and faculty expertise.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              The Sneeze Media <span className="text-gold">Difference</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We aren't just a social media agency posting graphics; we are a full-scale production house. We tell the Eklavya story through high-end video.
            </p>
            <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>Production Value Matters</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: '#ef4444', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>NO</div>
                <div style={{ color: '#94a3b8' }}>Static Canva Posters</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#22c55e', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>YES</div>
                <div style={{ color: '#fff' }}>4K Cinematic Storytelling</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: The Admission Funnel */}
      <Section id="funnel" style={{ background: '#0b1221' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            The Admission <span className="text-gold">Funnel</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Turning views into enrollments using a precise, multi-stage ad strategy.
          </p>
        </div>

        <div className="grid-3">
          <div className="funnel-card funnel-1">
            <h3 className="font-heading" style={{ color: '#4285f4', marginBottom: '1rem' }}>Google Ads: Intent</h3>
            <p className="text-muted">Bidding on "Admission Open 2026" keywords. We capture parents who are actively looking for schools right now.</p>
          </div>
          <div className="funnel-card funnel-2">
            <h3 className="font-heading" style={{ color: '#e1306c', marginBottom: '1rem' }}>Meta Ads: Desire</h3>
            <p className="text-muted">Geofencing Vidhyadhar Nagar. Pushing high-quality video tours into the feeds of parents aged 28-45.</p>
          </div>
          <div className="funnel-card funnel-3">
            <h3 className="font-heading" style={{ color: '#22c55e', marginBottom: '1rem' }}>Retargeting: Follow-up</h3>
            <p className="text-muted">The Inevitable Follow-up. If a parent visits the site but doesn't apply, our ads follow them for 7 days.</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="footer-cta">
        <div className="container" style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              The Admission Season <span className="text-gold">Won't Wait.</span>
            </h2>
            <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
              Let's build the future of Eklavya International Academy today.
            </p>
            <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
              Initiate Transformation
            </button>
            <div style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#475569' }}>
              © {new Date().getFullYear()} Sneeze Media. Confidential Pitch Deck.
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default App;
