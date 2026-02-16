
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Instagram,
  Linkedin,
  Video,
  PenTool,
  Megaphone,
  CheckCircle,
  TrendingUp,
  Layout,
  Mail
} from 'lucide-react';
import './index.css';

// Section Component for Reusability
const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => {
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
    >
      {children}
    </motion.section>
  );
};

// Card Component
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="feature-card"
  >
    <div className="feature-icon-box">
      <Icon className="feature-icon" />
    </div>
    <h3 className="feature-title font-heading">{title}</h3>
    <p className="feature-desc">{description}</p>
  </motion.div>
);

function App() {
  return (
    <div className="app-container">

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="brand-text">
            SNEEZE.<span className="brand-highlight">MEDIA</span>
          </div>
          <div className="nav-links">
            <a href="#vision" className="nav-link">Vision</a>
            <a href="#strategy" className="nav-link">Strategy</a>
            <a href="#identity" className="nav-link">Identity</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn-nav">
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-blob blob-purple" />
        <div className="hero-bg-blob blob-amber" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">
              Digital Transformation Proposal
            </span>
            <h1 className="hero-title font-heading">
              Reimagining <br />
              <span className="gradient-text">
                Eklavya International Academy
              </span>
            </h1>
            <p className="hero-subtitle">
              From <span className="mono-highlight">eklavyaschool.net</span> to a global digital powerhouse. A complete roadmap to dominate the digital education space.
            </p>
            <div className="btn-group">
              <button onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                View The Plan <ArrowRight className="icon-arrow" size={20} />
              </button>
              <button onClick={() => window.open('https://eklavyaschool.net', '_blank')} className="btn-secondary">
                Current Site <Globe size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Vision Gap */}
      <Section id="vision" className="bg-darker">
        <div className="container section-grid">
          <div>
            <h2 className="section-heading font-heading">The Digital Gap</h2>
            <p className="section-desc">
              The current digital presence at <span className="brand-highlight">eklavyaschool.net</span> represents the past. In today's competitive landscape, parents and students expect a digital experience that mirrors the academic excellence you provide.
            </p>
            <ul className="list-check">
              {[
                "Outdated User Experience & Design",
                "Limited Social Media Engagement",
                "Slow Loading Speeds & Poor Mobile Optimization",
                "Generic Content Strategy"
              ].map((item, i) => (
                <li key={i} className="list-item">
                  <div className="icon-box-red">✕</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="section-visual">
            <div className="simulator-card">
              <div className="sim-header">
                <div className="skeleton-circle animate-pulse" />
                <div className="space-y-2" style={{ flex: 1 }}>
                  <div className="skeleton-bar w-3-4 animate-pulse" />
                  <div className="skeleton-bar w-1-2 animate-pulse" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="sim-content animate-pulse" />
                <div className="skeleton-bar animate-pulse" />
                <div className="skeleton-bar w-3-4 animate-pulse" />
              </div>
              <div className="text-center" style={{ marginTop: '1.5rem', color: '#6b7280', fontSize: '0.875rem', fontFamily: 'monospace' }}>
                Simulator: Current Legacy Infrastructure
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Strategy Grid */}
      <Section id="strategy">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-heading font-heading">The Sneeze Media Blueprint</h2>
            <p className="section-desc" style={{ maxWidth: '42rem', margin: '0 auto' }}>
              We don't just build websites. We build comprehensive digital ecosystems. Here is how we will transform Eklavya.
            </p>
          </div>

          <div className="features-grid">
            <FeatureCard
              icon={Layout}
              title="Next.js Architecture"
              description="Migrating to Next.js ensures lightning-fast load times, superior SEO (ranking #1 on Google), and a security-first infrastructure."
              delay={0.1}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Social Dominance"
              description="A calibrated social media strategy across Instagram & Facebook. Not just posts, but stories, reels, and community engagement."
              delay={0.2}
            />
            <FeatureCard
              icon={PenTool}
              title="Director's Note"
              description="Regular, high-impact communication from leadership. We script, film, and publish regular updates to build trust and authority."
              delay={0.3}
            />
            <FeatureCard
              icon={Video}
              title="Content Studio"
              description="Professional script writing and video production. We turn school events and achievements into cinematic stories."
              delay={0.4}
            />
            <FeatureCard
              icon={Megaphone}
              title="Performance Ads"
              description="Targeted ad campaigns to drive admissions. We use data-driven insights to reach the right parents at the right time."
              delay={0.5}
            />
            <FeatureCard
              icon={Globe}
              title="Premium Domain"
              description="Securing 'eklavyainternationacademy.com' (or similar) to establish immediate authority and brand prestige."
              delay={0.6}
            />
          </div>
        </div>
      </Section>

      {/* Domain & Identity */}
      <Section id="identity" className="bg-gradient-dark">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading font-heading" style={{ marginBottom: '3rem' }}>Naming & Identity</h2>

            <div className="domain-card">
              <div className="domain-flex">
                <div className="text-left md:text-left">
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Current Domain</div>
                  <div className="domain-old">eklavyaschool.net</div>
                </div>

                <ArrowRight className="domain-arrow rotate-90" />

                <div className="text-right md:text-left">
                  <div style={{ color: '#f59e0b', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>PROPOSED UPGRADE</div>
                  <div className="domain-new">
                    eklavyainternationacademy.com
                  </div>
                  <div className="text-success justify-end justify-start-md">
                    <CheckCircle size={16} /> Available for acquisition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <section id="contact" className="cta-section">
        <div className="container" style={{ maxWidth: '56rem' }}>
          <h2 className="cta-title font-heading">Ready to Lead?</h2>
          <p className="cta-desc">
            Let's turn Eklavya International Academy into the benchmark for digital education. The future is waiting.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="btn-cta-primary">
              Approve Proposal
            </button>
            <button className="btn-cta-secondary">
              Schedule Discussion
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="brand-text" style={{ color: '#6b7280' }}>
            SNEEZE.<span style={{ color: '#d1d5db' }}>MEDIA</span>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Sneeze Media. All rights reserved. Confidential Proposal.
          </div>
          <div className="footer-socials">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
            <a href="#" className="social-icon"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
