


// import { useState } from 'react';
// import './Services.css';

// const programList = [
//   { id: 'p1', badge: 'State & CBSE', tag: 'Class 11 & 12', title: 'Plus One & Two Science', desc: 'Core boards preparation with rigorous text analytics and daily evaluations.' },
//   { id: 'p2', badge: 'Medical', tag: 'Competitive', title: 'NEET Coaching', desc: 'NCERT-centric daily practice sheets with performance analytics.' },
//   { id: 'p3', badge: 'Engineering', tag: 'Competitive', title: 'JEE Coaching', desc: 'Advanced math drills, conceptual physics modules, and rank boosters.' },
//   { id: 'p4', badge: 'Mentorship', tag: 'Counselling', title: 'Career Guidance', desc: 'One-on-one professional tracking mapping stream strengths.' }
// ];

// const methodologySteps = [
//   { num: '01', title: 'Concept Clarity', desc: 'Topics broken into modular digestible chunks.' },
//   { num: '02', title: 'Micro Testing', desc: 'Weekly metrics flag learning vulnerabilities.' },
//   { num: '03', title: 'Refinement', desc: 'Small-batch structural loop support channels.' },
//   { num: '04', title: 'Exam Strategy', desc: 'Simulated trial rounds for structural timing.' }
// ];

// const faqs = [
//   { 
//     q: 'What is the maximum student capacity per batch?', 
//     a: 'To guarantee individual attention and optimal tracking metrics, we strictly limit our batches to a maximum of 15–20 students per session.' 
//   },
//  { q: 'Do you offer hybrid models?', a: 'Yes, offline interactive classroom frameworks are supplemented with digital online portals.' }
// ];

// export default function UnifiedDashboard() {
//   const [activeTab, setActiveTab] = useState('programs');

//   // Hardcoded target phone number & pre-configured message text URL parameters
//   const whatsappNumber = "919447109598"; 
//   const whatsappMessage = encodeURIComponent("Hello Aadarsh Academics, I would like to enquire about your admissions and courses.");
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <div className="ud-wrapper" id='services'>
//       {/* LEFT STATIC PANEL: Header Core & Direct WhatsApp Call-to-Action */}
//       <aside className="ud-aside">
//         <div className="ud-aside__header">
//           <span className="ud-tag">Aadarsh Academics</span>
//           <h1 className="ud-title">Academic Excellence <span>Structured.</span></h1>
//           <p className="ud-lead">Scientific guidance models maximizing board grades and competitive entrances within compact, metrics-driven environments.</p>
//         </div>

//         {/* Dynamic WhatsApp Clickable Block Module */}
//         <div className="ud-whatsapp-container">
//           <div className="ud-whatsapp-card">
//             <div className="ud-whatsapp-card__header">
//               <span className="ud-pulse-dot"></span>
//               <h4>Admissions Desk Active</h4>
//             </div>
//             <p>Connect immediately with our structural academic counsellors for quick program details or slot bookings.</p>
            
//             <a 
//               href={whatsappUrl} 
//               target="_blank" 
//               rel="noreferrer" 
//               className="ud-btn-whatsapp"
//             >
//               {/* Native Inline SVG Vector Icon */}
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.142 1.233 8.379 3.473 2.238 2.24 3.466 5.22 3.465 8.385-.003 6.583-5.339 11.931-11.873 11.931-2.006-.001-3.975-.51-5.732-1.482L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.743 1.451 5.4 0 9.794-4.41 9.797-9.83.002-2.628-1.016-5.097-2.868-6.95C16.41 1.97 13.938 1.953 11.93 1.953c-5.403 0-9.8 4.409-9.802 9.83-.001 1.637.49 3.23 1.42 4.633L2.53 21.417l5.117-1.34zM17.486 14.39c-.3-.149-1.776-.875-2.05-.974-.275-.1-.475-.149-.674.15-.2.299-.775.974-.95 1.174-.175.2-.35.224-.65.075-.3-.149-1.265-.466-2.41-1.484-.892-.795-1.493-1.777-1.668-2.076-.175-.3-.019-.461.13-.61l.448-.523c.152-.174.2-.3.3-.498.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.51-.674-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 374-.275.299-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.521.714.31 1.272.496 1.707.635.717.228 1.369.196 1.884.119.574-.085 1.776-.726 2.025-1.426.25-.7.25-1.299.175-1.424-.075-.125-.275-.199-.575-.349z"/>
//               </svg>
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* Quick Footer Links */}
//         <div className="ud-aside__footer">
//           <a href="tel:+919447109598">📞 +91 94471 09598</a>
//           <a href="https://maps.google.com" target="_blank" rel="noreferrer">📍 West Kochi, Kerala</a>
//         </div>
//       </aside>

//       {/* RIGHT FLEXIBLE SCREEN: Responsive Program Tabs, Methods, FAQs */}
//       <main className="ud-main">
//         {/* Navigation Matrix Tabs */}
//         <nav className="ud-nav">
//           <button className={activeTab === 'programs' ? 'active' : ''} onClick={() => setActiveTab('programs')}>
//             Academic Programs
//           </button>
//           <button className={activeTab === 'methodology' ? 'active' : ''} onClick={() => setActiveTab('methodology')}>
//             Our Methodology
//           </button>
//           <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>
//             Campus Info & FAQs
//           </button>
//         </nav>

//         {/* Display Container Matrix */}
//         <div className="ud-content-viewport">
          
//           {/* TAB 1: PROGRAMS MATRIX */}
//           {activeTab === 'programs' && (
//             <div className="ud-view-grid animate-fade">
//               {programList.map(p => (
//                 <div className="ud-card-program" key={p.id}>
//                   <div className="ud-card-program__meta">
//                     <span className="ud-mini-badge">{p.badge}</span>
//                     <span className="ud-card-tag">{p.tag}</span>
//                   </div>
//                   <h3>{p.title}</h3>
//                   <p>{p.desc}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TAB 2: METHODOLOGY MODULE */}
//           {activeTab === 'methodology' && (
//             <div className="ud-view-list animate-fade">
//               <div className="ud-method-grid">
//                 {methodologySteps.map(m => (
//                   <div className="ud-card-method" key={m.num}>
//                     <div className="ud-card-method__num">{m.num}</div>
//                     <div>
//                       <h3>{m.title}</h3>
//                       <p>{m.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 3: EXTENDED ADMISSIONS INFO & FAQS */}
//           {activeTab === 'info' && (
//             <div className="ud-view-split animate-fade">
//               <div className="ud-info-pane">
//                 <div className="ud-map-box">
//                   <iframe
//                     title="Campus Location Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31497.085506786604!2d76.25810745!3d9.9672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6d3bfaabab%3A0xe8a2ddddb3bc9a6e!2sVytilla%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716000000000"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="ud-hours">
//                   <strong>Office Hours:</strong> Mon–Sat: 8:00 AM – 7:00 PM | Sunday: Closed
//                 </div>
//               </div>
              
//               <div className="ud-faq-pane">
//                 <h3>Admissions Desk FAQ</h3>
//                 {faqs.map((f, i) => (
//                   <div className="ud-faq-item" key={i}>
//                     <strong>Q: {f.q}</strong>
//                     <p>{f.a}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         </div>
//       </main>
//     </div>
//   );
// }





import { useState } from 'react';
import './Services.css';

const programList = [
  { id: 'p1', badge: 'State & CBSE', tag: 'Class 11', title: 'Plus One Tuition', desc: 'Comprehensive tuition for Plus One covering all science subjects with daily practice and concept reinforcement.' },
  { id: 'p2', badge: 'State & CBSE', tag: 'Class 12', title: 'Plus Two Tuition', desc: 'Board-focused Plus Two tuition with rigorous text analytics, model exams, and daily evaluations.' },
  { id: 'p3', badge: 'CBSE', tag: 'Physics', title: 'CBSE Physics', desc: 'In-depth CBSE Physics tuition with conceptual clarity modules, numerical drills, and board pattern practice.' },
  { id: 'p4', badge: 'CBSE', tag: 'Chemistry', title: 'CBSE Chemistry', desc: 'Structured CBSE Chemistry sessions covering organic, inorganic, and physical chemistry with NCERT focus.' },
  { id: 'p5', badge: 'CBSE', tag: 'Mathematics', title: 'CBSE Mathematics', desc: 'Advanced CBSE Maths tuition with step-by-step problem solving, shortcuts, and board exam strategy.' },
  { id: 'p6', badge: 'State Board', tag: 'Class 12', title: 'State Plus Two Tuition', desc: 'Kerala State Board Plus Two tuition aligned with state syllabus, textbook analysis, and public exam preparation.' },
  { id: 'p7', badge: 'Medical', tag: 'Competitive', title: 'NEET Coaching', desc: 'NCERT-centric daily practice sheets with performance analytics and full-length mock test series for NEET.' },
  { id: 'p8', badge: 'Central Universities', tag: 'Competitive', title: 'CUET Coaching', desc: 'Domain-specific and general test preparation for CUET with subject modules, mock tests, and score boosters.' }
];

const methodologySteps = [
  { num: '01', title: 'Concept Clarity', desc: 'Topics broken into modular digestible chunks.' },
  { num: '02', title: 'Micro Testing', desc: 'Weekly metrics flag learning vulnerabilities.' },
  { num: '03', title: 'Refinement', desc: 'Small-batch structural loop support channels.' },
  { num: '04', title: 'Exam Strategy', desc: 'Simulated trial rounds for structural timing.' }
];

const faqs = [
  { 
    q: 'What is the maximum student capacity per batch?', 
    a: 'To guarantee individual attention and optimal tracking metrics, we strictly limit our batches to a maximum of 15–20 students per session.' 
  },
  { q: 'Do you offer hybrid models?', a: 'Yes, offline interactive classroom frameworks are supplemented with digital online portals.' }
];

export default function UnifiedDashboard() {
  const [activeTab, setActiveTab] = useState('programs');

  const whatsappNumber = "919447109598"; 
  const whatsappMessage = encodeURIComponent("Hello Aadarsh Academics, I would like to enquire about your admissions and courses.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="ud-wrapper" id='services'>
      {/* LEFT STATIC PANEL */}
      <aside className="ud-aside">
        <div className="ud-aside__header">
          <span className="ud-tag">Aadarsh Academics</span>
          <h1 className="ud-title">Academic Excellence <span>Structured.</span></h1>
          <p className="ud-lead">Scientific guidance models maximizing board grades and competitive entrances within compact, metrics-driven environments.</p>
        </div>

        <div className="ud-whatsapp-container">
          <div className="ud-whatsapp-card">
            <div className="ud-whatsapp-card__header">
              <span className="ud-pulse-dot"></span>
              <h4>Admissions Desk Active</h4>
            </div>
            <p>Connect immediately with our structural academic counsellors for quick program details or slot bookings.</p>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="ud-btn-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.142 1.233 8.379 3.473 2.238 2.24 3.466 5.22 3.465 8.385-.003 6.583-5.339 11.931-11.873 11.931-2.006-.001-3.975-.51-5.732-1.482L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.743 1.451 5.4 0 9.794-4.41 9.797-9.83.002-2.628-1.016-5.097-2.868-6.95C16.41 1.97 13.938 1.953 11.93 1.953c-5.403 0-9.8 4.409-9.802 9.83-.001 1.637.49 3.23 1.42 4.633L2.53 21.417l5.117-1.34zM17.486 14.39c-.3-.149-1.776-.875-2.05-.974-.275-.1-.475-.149-.674.15-.2.299-.775.974-.95 1.174-.175.2-.35.224-.65.075-.3-.149-1.265-.466-2.41-1.484-.892-.795-1.493-1.777-1.668-2.076-.175-.3-.019-.461.13-.61l.448-.523c.152-.174.2-.3.3-.498.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.51-.674-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.521.714.31 1.272.496 1.707.635.717.228 1.369.196 1.884.119.574-.085 1.776-.726 2.025-1.426.25-.7.25-1.299.175-1.424-.075-.125-.275-.199-.575-.349z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="ud-aside__footer">
          <a href="tel:+919447109598">📞 +91 94471 09598</a>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">📍 West Kochi, Kerala</a>
        </div>
      </aside>

      {/* RIGHT FLEXIBLE SCREEN */}
      <main className="ud-main">
        <nav className="ud-nav">
          <button className={activeTab === 'programs' ? 'active' : ''} onClick={() => setActiveTab('programs')}>
            Academic Programs
          </button>
          <button className={activeTab === 'methodology' ? 'active' : ''} onClick={() => setActiveTab('methodology')}>
            Our Methodology
          </button>
          <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>
            Campus Info & FAQs
          </button>
        </nav>

        <div className="ud-content-viewport">
          
          {activeTab === 'programs' && (
            <div className="ud-view-grid animate-fade">
              {programList.map(p => (
                <div className="ud-card-program" key={p.id}>
                  <div className="ud-card-program__meta">
                    <span className="ud-mini-badge">{p.badge}</span>
                    <span className="ud-card-tag">{p.tag}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="ud-view-list animate-fade">
              <div className="ud-method-grid">
                {methodologySteps.map(m => (
                  <div className="ud-card-method" key={m.num}>
                    <div className="ud-card-method__num">{m.num}</div>
                    <div>
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="ud-view-split animate-fade">
              <div className="ud-info-pane">
                <div className="ud-map-box">
                  {/* <iframe
                    title="Campus Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31497.085506786604!2d76.25810745!3d9.9672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6d3bfaabab%3A0xe8a2ddddb3bc9a6e!2sVytilla%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716000000000"
                    loading="lazy"
                  /> */}
                  <iframe
          title="Aadarsh Tuitions Campus Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125745.78219958892!2d76.30829335!3d9.970874599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b086d3fb9d704cd%3A0x70215d2e17dbfe4e!2sAadarsh%20Tuition%20Centre%2C%20Fort%20Kochi%20Veli%20Ground%2C%20H%20No%209%2F77%20A%2C%20Balthaek%2C%20Odatha%20Rd%2C%20Veli%2C%20Kerala%20682001!3m2!1d9.9511243!2d76.24566279999999!5e0!3m2!1sen!2sin!4v1779269198223!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
                </div>
                <div className="ud-hours">
                  <strong>Office Hours:</strong> Mon–Sat: 8:00 AM – 7:00 PM | Sunday: Closed
                </div>
              </div>
              
              <div className="ud-faq-pane">
                <h3>Admissions Desk FAQ</h3>
                {faqs.map((f, i) => (
                  <div className="ud-faq-item" key={i}>
                    <strong>Q: {f.q}</strong>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}