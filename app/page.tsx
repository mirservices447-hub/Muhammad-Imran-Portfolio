const skills=[
  "WordPress Bug Fix","WooCommerce","PHP / MySQL","Website Troubleshooting",
  "Next.js / React / TypeScript","Supabase / PostgreSQL / RLS","API Integration","GitHub / Production Delivery"
];

const cases=[
  {tag:"WORDPRESS RESCUE",title:"500 Error & Checkout Recovery",text:"Diagnostic case study covering PHP/server errors, plugin and theme conflicts, WooCommerce checkout failures, log analysis and verification.",meta:"WordPress · WooCommerce · PHP · Troubleshooting"},
  {tag:"DATABASE / SERVER",title:"Database & 504 Timeout Rescue",text:"Root-cause troubleshooting workflow for database connection failures, gateway timeouts, slow requests and WordPress configuration issues.",meta:"WordPress · MySQL · PHP · Performance"},
  {tag:"WOOCOMMERCE",title:"Custom Delivery & Checkout Logic",text:"WooCommerce delivery-rule case study covering dynamic charges, checkout validation, delivery restrictions and cart scenario testing.",meta:"WooCommerce · PHP · Checkout Logic"},
  {tag:"SAAS SECURITY",title:"Secure Next.js + Supabase Dashboard",text:"Full-stack security case study focused on authentication, protected routes, PostgreSQL, Row Level Security, CRUD operations and access-policy testing.",meta:"Next.js · Supabase · PostgreSQL · TypeScript"}
];

export default function Home(){
return <main>
<nav><b>MI.</b><div><a href="#services">Services</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div></nav>

<section className="hero">
<p className="eyebrow">WEB TROUBLESHOOTING • FULL-STACK DEVELOPMENT • PRODUCTION DELIVERY</p>
<h1>Fix. Build.<br/><span>Ship reliably.</span></h1>
<p className="lead">I help businesses diagnose broken WordPress & WooCommerce websites and troubleshoot production Next.js, React and Supabase applications—from root cause to tested deployment.</p>
<div className="actions"><a className="primary" href="#work">View technical work →</a><a href="mailto:imranhk76@gmail.com">Discuss a problem</a></div>
<div className="stats"><div><strong>15+</strong><small>Years IT Systems</small></div><div><strong>Production</strong><small>Debugging & Delivery</small></div><div><strong>Full-Stack</strong><small>Web & Database</small></div></div>
</section>

<section id="services">
<p className="eyebrow">01 / WHAT I SOLVE</p>
<h2>Technical problems.<br/>Structured solutions.</h2>
<p className="copy">My work combines long-standing IT systems experience with hands-on web troubleshooting and modern application delivery. I investigate the root cause, apply targeted fixes, validate the result and prepare changes for reliable production release.</p>
<div className="serviceGrid">
<article><b>WORDPRESS / WOOCOMMERCE</b><h3>Website Rescue</h3><p>500 errors, checkout failures, plugin conflicts, PHP/MySQL issues, responsive bugs and performance troubleshooting.</p></article>
<article><b>NEXT.JS / REACT</b><h3>Production Debugging</h3><p>Authentication, APIs, dependencies, builds, deployment failures, runtime issues and responsive application fixes.</p></article>
<article><b>SUPABASE / POSTGRESQL</b><h3>Secure Data Access</h3><p>RLS policies, SQL migrations, RPCs, authentication flows, CRUD operations and secure database-access patterns.</p></article>
</div>
<div className="skills">{skills.map(x=><span key={x}>{x}</span>)}</div>
</section>

<section id="work">
<p className="eyebrow">02 / TROUBLESHOOTING & DEVELOPMENT CASE STUDIES</p>
<h2>Built around real-world<br/>failure scenarios.</h2>
<p className="projectLead">Self-created technical case studies demonstrating the diagnose → fix → test → verify workflow used for common WordPress, WooCommerce and SaaS problems.</p>
<div className="grid">{cases.map(c=><article key={c.title}><b>{c.tag}</b><h3>{c.title}</h3><p>{c.text}</p><small>{c.meta}</small></article>)}</div>
</section>

<section className="featured">
<p className="eyebrow">03 / PRODUCTION PLATFORM</p>
<h2>Global Metals Intelligence</h2>
<p className="projectLead">Product & Technical Delivery Lead for a production precious-metals web platform built with Next.js, React, TypeScript, Supabase/PostgreSQL, GitHub and Hostinger.</p>
<div className="grid">
<article><b>PRODUCTION TROUBLESHOOTING</b><h3>Application Reliability</h3><p>Authentication/OAuth, APIs, databases, dependencies, build pipelines, environment configuration and deployment issues.</p></article>
<article><b>DATABASE SECURITY</b><h3>Supabase + PostgreSQL</h3><p>RLS, SQL migrations, RPC functions, secure data-access policies and authenticated application workflows.</p></article>
<article><b>RELEASE ENGINEERING</b><h3>GitHub Delivery</h3><p>Branches, pull requests, code review, merge coordination, TypeScript checks, linting, builds and post-deployment verification.</p></article>
<article><b>PRODUCT ENGINEERING</b><h3>Integrations & Features</h3><p>API integrations, multi-currency functionality, calculators, SEO, responsive UI and production monitoring.</p></article>
</div>
<a className="primary" href="https://globalmetalsintelligence.com" target="_blank" rel="noreferrer">Visit production platform ↗</a>
</section>

<section id="experience">
<p className="eyebrow">04 / EXPERIENCE</p><h2>Systems foundation.<br/>Modern web delivery.</h2>
<div className="timeline">
<article><time>2008 — PRESENT</time><h3>Network Administrator / System Engineer / WordPress Developer</h3><p>Naqvi & Siddiquie Associates · IT infrastructure, LAN/WAN, systems support, WordPress development, website maintenance and technical troubleshooting.</p></article>
<article><time>2007 — 2008</time><h3>System Engineer</h3><p>MicroAge Systems Ltd. · Hardware/software deployment, Windows/Linux systems, network troubleshooting and client technical support.</p></article>
<article><time>2004 — 2007</time><h3>Transmission Officer / IT Support</h3><p>TV2Day (Pvt.) Ltd. · VPN/remote administration, FTP workflows, LAN/WAN support, file servers, digital publishing and incident troubleshooting.</p></article>
</div>
</section>

<section><p className="eyebrow">05 / SELECTED WEB WORK</p><div className="links">
<a href="https://globalmetalsintelligence.com" target="_blank" rel="noreferrer">Global Metals Intelligence ↗</a>
<a href="https://sixsigmaconsult.com" target="_blank" rel="noreferrer">Six Sigma Consult ↗</a>
<a href="https://logixengineeringconsultants.com" target="_blank" rel="noreferrer">LOGIX Project Management ↗</a>
</div></section>

<section id="contact" className="contact"><p className="eyebrow">06 / START A CONVERSATION</p><h2>Send me the issue.<br/><span>I’ll help diagnose it.</span></h2><p className="copy centered">Need help with a WordPress/WooCommerce problem or a Next.js/Supabase production issue? Share the symptoms, errors and current stack so we can identify the right path forward.</p><a className="mail" href="mailto:imranhk76@gmail.com">imranhk76@gmail.com →</a></section>
<footer>© 2026 Muhammad Imran <span>Troubleshooting • Web Development • Production Delivery</span></footer>
</main>
}