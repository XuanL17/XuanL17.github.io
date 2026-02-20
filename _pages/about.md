---
permalink: /
title: " "
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.intro-section {
  background: linear-gradient(135deg, #D4F1F4 0%, #A8DFE3 100%);
  padding: 30px;
  border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.intro-greeting {
  margin-bottom: 20px;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 20% 80% 75% 25% / 50% 50% 50% 50%;
}

.intro-greeting strong {
  color: #2c8589;
}

.intro-current {
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20% 80% 75% 25% / 50% 50% 50% 50%;
  border-left: 4px solid #fff;
}

.intro-previous {
  padding: 15px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20% 80% 75% 25% / 50% 50% 50% 50%;
}

.intro-section p {
  margin: 0;
  line-height: 1.8;
}

.intro-section a {
  color: #2c8589;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dotted #6BC5C9;
}

.intro-section a:hover {
  color: #1a5a5d;
  border-bottom: 2px solid #6BC5C9;
}

@media (max-width: 768px) {
  .intro-section {
    padding: 20px;
    border-radius: 25% 75% 75% 25% / 50% 50% 50% 50%;
  }
  
  .intro-greeting {
    padding: 15px;
  }
}
</style>

<div class="intro-section">
  <div class="intro-greeting">
    <span class="typewriter-text"></span><span class="typewriter-cursor"></span>
  </div>
  
  <div class="collapsible-toggle" onclick="toggleCollapsible()">More about my background</div>
  
  <div class="collapsible-content">
    <div class="intro-previous">
      Previously I completed my Bachelor's in Electronic & Information Engineering at <a href="https://www.polyu.edu.hk/eee/">Hong Kong Polytechnic University</a>. During my undergraduate period, I am grateful to have been advised and collaborated with <a href="https://cse.hkust.edu.hk/~songguo/">Prof. Song Guo</a> (HKUST, Hong Kong), <a href="https://haibohu.org/">Prof. Haibo Hu</a> (PolyU, Hong Kong), <a href="https://engineering.nyu.edu/faculty/quanyan-zhu">Prof. Quanyan Zhu</a> (NYU, New York), and <a href="https://ece.ubc.ca/xiaoxiao-li/">Prof. Xiaoxiao Li</a> (UBC, Vancouver).
    </div>
  </div>
</div>

<script>
// Collapsible toggle function
function toggleCollapsible() {
  const toggle = document.querySelector('.collapsible-toggle');
  const content = document.querySelector('.collapsible-content');
  
  toggle.classList.toggle('active');
  content.classList.toggle('active');
}

// Typewriter effect - optimized for smooth animation
function typeWriter(element, html, speed, callback) {
  let i = 0;
  let currentText = '';
  let isInsideTag = false;
  let tagBuffer = '';
  
  function type() {
    if (i < html.length) {
      const char = html.charAt(i);
      
      // Handle HTML tags - skip instantly
      if (char === '<') {
        isInsideTag = true;
        tagBuffer = '<';
        i++;
        type(); // Continue immediately
        return;
      } else if (char === '>' && isInsideTag) {
        isInsideTag = false;
        tagBuffer += '>';
        currentText += tagBuffer;
        element.innerHTML = currentText;
        tagBuffer = '';
        i++;
        type(); // Continue immediately
        return;
      } else if (isInsideTag) {
        tagBuffer += char;
        i++;
        type(); // Continue immediately
        return;
      } else {
        // Regular character
        currentText += char;
        element.innerHTML = currentText;
        i++;
        
        // Variable speed: faster for spaces, normal for text
        const delay = char === ' ' ? speed * 0.3 : speed;
        setTimeout(type, delay);
      }
    } else if (callback) {
      callback();
    }
  }
  type();
}

window.addEventListener('load', function() {
  // Add a small delay to ensure DOM is fully ready
  setTimeout(function() {
    const textElement = document.querySelector('.typewriter-text');
    const cursorElement = document.querySelector('.typewriter-cursor');
    const toggleButton = document.querySelector('.collapsible-toggle');
    
    if (textElement && cursorElement) {
      // Type the full sentence with HTML links
      const fullText = 'Hey! 😊 I\'m <strong style="color: #2c8589;">Xuan Liu (刘萱)</strong>, a first-year Ph.D. student at <a href="https://ucsd.edu/" style="color: #2c8589; font-weight: 500; text-decoration: none; border-bottom: 1px dotted #6BC5C9;">UC San Diego</a>, where I am fortunate to work with <a href="https://www.haojianj.in/" style="color: #2c8589; font-weight: 500; text-decoration: none; border-bottom: 1px dotted #6BC5C9;">Prof. Haojian Jin</a>.';
      
      typeWriter(textElement, fullText, 40, function() {
        // Hide cursor after 0.8 second and show the toggle button
        setTimeout(function() {
          cursorElement.classList.add('hidden');
          // Show the collapsible toggle button
          if (toggleButton) {
            toggleButton.classList.add('show');
          }
        }, 800);
      });
    }
  }, 100);
});

// Also try with DOMContentLoaded as backup
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const textElement = document.querySelector('.typewriter-text');
    const cursorElement = document.querySelector('.typewriter-cursor');
    const toggleButton = document.querySelector('.collapsible-toggle');
    
    // Only run if typewriter hasn't started yet
    if (textElement && cursorElement && textElement.innerHTML === '') {
      const fullText = 'Hey! 😊 I\'m <strong style="color: #2c8589;">Xuan Liu (刘萱)</strong>, a first-year Ph.D. student at <a href="https://ucsd.edu/" style="color: #2c8589; font-weight: 500; text-decoration: none; border-bottom: 1px dotted #6BC5C9;">UC San Diego</a>, where I am fortunate to work with <a href="https://www.haojianj.in/" style="color: #2c8589; font-weight: 500; text-decoration: none; border-bottom: 1px dotted #6BC5C9;">Prof. Haojian Jin</a>.';
      
      typeWriter(textElement, fullText, 40, function() {
        setTimeout(function() {
          cursorElement.classList.add('hidden');
          if (toggleButton) {
            toggleButton.classList.add('show');
          }
        }, 800);
      });
    }
  }, 200);
});
</script>

<style>
/* Typewriter effect for entire greeting */
.typewriter-text {
  display: inline;
  line-height: 1.8;
}

.typewriter-text a:hover {
  color: #1a5a5d !important;
  border-bottom: 2px solid #6BC5C9 !important;
}

.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: #2c8589;
  margin-left: 2px;
  animation: blink 0.7s infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.typewriter-cursor.hidden {
  display: none;
}

/* Collapsible section */
.collapsible-toggle {
  display: inline-block;
  margin-top: 15px;
  color: #2c8589;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  background: rgba(108, 197, 201, 0.1);
  border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
  border: 1px solid #6BC5C9;
  transition: all 0.3s ease;
  user-select: none;
  opacity: 0;
  transform: translateY(-10px);
}

.collapsible-toggle.show {
  opacity: 1;
  transform: translateY(0);
}

.collapsible-toggle:hover {
  background: rgba(108, 197, 201, 0.2);
  border-color: #2c8589;
}

.collapsible-toggle::after {
  content: ' ▼';
  font-size: 0.8em;
  transition: transform 0.3s ease;
  display: inline-block;
}

.collapsible-toggle.active::after {
  transform: rotate(180deg);
}

.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, margin-top 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}

.collapsible-content.active {
  max-height: 500px;
  margin-top: 15px;
  opacity: 1;
}

.collapsible-content .intro-previous {
  padding: 15px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25% 75% 70% 30% / 50% 50% 50% 50%;
}

.timeline {
  position: relative;
  padding-left: 40px;
  margin-top: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #6BC5C9 0%, #B0E3E6 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 30px;
  padding-left: 25px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6BC5C9 0%, #2c8589 100%);
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #B0E3E6, 0 2px 4px rgba(0,0,0,0.15);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 0 3px #6BC5C9, 0 4px 8px rgba(0,0,0,0.25);
}

.timeline-date {
  font-weight: bold;
  color: #2c8589;
  font-size: 0.9em;
  margin-bottom: 5px;
  display: inline-block;
  padding: 2px 8px;
  background: linear-gradient(135deg, rgba(176, 227, 230, 0.3), rgba(107, 197, 201, 0.3));
  border-radius: 12px;
}

.timeline-content {
  line-height: 1.7;
  color: #333;
  margin-top: 8px;
}

.timeline-content a {
  color: #2c8589;
  text-decoration: none;
  border-bottom: 1px dotted #6BC5C9;
}

.timeline-content a:hover {
  color: #1a5a5d;
  border-bottom: 2px solid #6BC5C9;
}

.timeline-item:hover .timeline-content {
  color: #000;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }
  
  .timeline-item {
    padding-left: 20px;
  }
  
  .timeline-item::before {
    left: -27px;
    width: 8px;
    height: 8px;
  }
}
</style>

---

<div class="timeline">
  <div class="timeline-item publication">
    <div class="timeline-date">🚀 2026-02</div>
    <div class="timeline-content">
      Introducing our new work: <a href="https://arxiv.org/abs/2602.00685">"HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"</a>! See <a href="https://www.hs-bench.clawder.ai/">Leaderboard</a> | <a href="https://github.com/AISmithLab/HumanStudy-Bench">Data & Code</a>
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2026-01</div>
    <div class="timeline-content">
      Xuan's work <a href="https://arxiv.org/abs/2509.13588">"CoBRA: Programming Cognitive Bias in Social Agents using Classic Social Science Experiments"</a> has been accepted by <u>CHI 2026</u>. 
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2025-11</div>
    <div class="timeline-content">
      Our work <a href="https://breathingcore.com/f/like-first-know-later-ai-based-romantic-compatibility">"Love First, Know Later: Persona-Based Romantic Compatibility Through LLM Text World Engines"</a> has been accepted as an 🎤 Oral Presentation at the <u>NeurIPS 2025</u> First Workshop on LLM Persona Modeling at Mexico City. 
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2025-09</div>
    <div class="timeline-content">
      Our work, <a href="https://www.arxiv.org/abs/2509.23041">"Virus Infection Attack on LLMs: Your Poisoning Can Spread 'VIA' Synthetic Data"</a>, has been accepted as a 🌟 Spotlight Paper at <u>NeurIPS 2025</u>. Special congratulations to the first author, <em><a href="https://liangzid.github.io/research.html">Zi Liang</a></em>! 
    </div>
  </div>

  <div class="timeline-item milestone">
    <div class="timeline-date">🎓 2025-07</div>
    <div class="timeline-content">
      Xuan <strong>graduated</strong> from The Hong Kong Polytechnic University with a <u>Bachelor of Engineering</u>, earning 1st Class Honors and a place on the Dean's Honor List for consecutive years! 👏
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2025-01</div>
    <div class="timeline-content">
      Xuan's work <a href="https://arxiv.org/abs/2405.14744">"Exploring Prosocial Irrationality for LLM Agents: A Social Cognition View"</a> has been accepted by <u>ICLR 2025</u>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🤝 2025-01</div>
    <div class="timeline-content">
      Xuan received "Hsin Chong-K.N. Godfrey Yeh Education Fund".
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2024-12</div>
    <div class="timeline-content">
      Xuan's work <a href="https://arxiv.org/abs/2407.05285">"Mjölnir: Breaking the Shield of Perturbation-Protected Gradients via Adaptive Diffusion"</a> has been accepted by <u>AAAI 2025</u>.
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2024-12</div>
    <div class="timeline-content">
      Our work <a href="https://www.computer.org/csdl/journal/tm/5555/01/10798583/22EagQA5RYc">"PriFairFed: A Local Differentially Private Federated Learning Algorithm for Client-Level Fairness"</a> has been accepted by <u>IEEE Transactions on Mobile Computing</u>.
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2024-08</div>
    <div class="timeline-content">
      Xuan's work <a href="https://ieeexplore.ieee.org/document/10663250">"Mutual Gradient Inversion: Unveiling Privacy Risks of Federated Learning on Multi-modal Signals"</a> has been accepted by <u>IEEE Signal Processing Letters</u>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2024-04</div>
    <div class="timeline-content">
      Xuan received the <a href="https://www.polyu.edu.hk/eee/news-and-events/news/2024/2024-02-21-best-uris-research-project-award-2023/"><strong>Best</strong> Undergraduate Research Project Award</a>! See University Official Posts & Interview at <a href="https://www.instagram.com/p/C6VELkGy9f6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Instagram</a>, <a href="https://www.linkedin.com/feed/update/urn:li:activity:7190543155698491392">LinkedIn</a>.
    </div>
  </div>

  <div class="timeline-item project">
    <div class="timeline-date">🤝 2024-01</div>
    <div class="timeline-content">
      Xuan's Start-up BreathingCORE won MicroFund Shortlisted Team and has been selected for <a href="https://www.hkstp.org/">Hong Kong Science and Technology Park</a> Ideation Program!
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2023-12</div>
    <div class="timeline-content">
      Xuan won <a href="https://1drv.ms/i/c/a0549cc609574664/EWG-yWl0Yl9DrcrM72DdjYoBQc3u0PqYE8SMdbN3p2CmSQ?e=2FwRXi">"Outstanding Proposal of Belt and Road Initiatives Youth Creative International Challenge"</a>. See University Official Posts at <a href="https://www.facebook.com/polyueee/photos/-congratulations-to-our-students-on-winning-the-second-prize-in-the-belt-and-roa/724634839855179/?_rdr">Facebook</a>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🤝 2023-11</div>
    <div class="timeline-content">
      Xuan received <a href="https://1drv.ms/i/c/a0549cc609574664/EVnp5rIILZdEq2FYc4mItC8BR3sXbCVY8ErnrX9zki5f2g?e=5tAHap">"98th IEEE-VTC Fall Volunteer Service Award"</a>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2023-09</div>
    <div class="timeline-content">
      Xuan won <strong>Champion</strong> of Innovation & Entrepreneurship Training Camp Roadshow, securing a 7K CNY cash award.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2023-07</div>
    <div class="timeline-content">
      Xuan received <a href="https://1drv.ms/b/c/a0549cc609574664/EeORiU9-Ap9HvTyuokGikTMBOy7BWkoeaw_f9EEawMuqzA?e=167nN6">"Department of Electronic and Information Engineering Scholarship for Hall Residents"</a>, for the Top 1 GPA in the academic year of 2022 in the Dept.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🤝 2023-04</div>
    <div class="timeline-content">
      Xuan received <a href="https://1drv.ms/i/c/a0549cc609574664/EcEEAEuB8PJLlg-9lhkCXsoBude0yTiX8v8DAt-aw9p_fQ?e=IcHHrR">"Hong Kong Government-Researching Out Award"</a>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🤝 2023-04</div>
    <div class="timeline-content">
      Xuan received <a href="https://1drv.ms/i/c/a0549cc609574664/ETUjQ9l09B9GhEKxk_-s-hUB1P8Eqtxymq--NzKaHgT3UQ?e=cH3fD2">"Hong Kong Government-Talent Development Scholarship"</a>.
    </div>
  </div>

  <div class="timeline-item publication">
    <div class="timeline-date">📝 2023-02</div>
    <div class="timeline-content">
      Xuan's work <a href="https://ojs.aaai.org/index.php/AAAI/article/view/26995">"MGIA: Mutual Gradient Inversion Attack in Multi-Modal Federated Learning"</a> has been published on <u>AAAI 2023</u> as a student abstract.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🤝 2022-12</div>
    <div class="timeline-content">
      Xuan received <a href="https://1drv.ms/b/c/a0549cc609574664/EUIPbNI03plAgmhEcSAmQdMBtBPmPdIHaPnAlVNP6RRKXw?e=44Qm1b">"Dr. Winnie S M Tang-PolyU Student Innovation & Entrepreneurship Scholarship"</a>.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2022-11</div>
    <div class="timeline-content">
      Xuan won <a href="https://1drv.ms/i/c/a0549cc609574664/ERlvMWKvFxJDkuqiiNY9iuoBhDkl9aQUnZrV5mhXQRhiiw?e=4KPMl3"><strong>Best</strong> GPA Award</a> Department of Electronic and Information Engineering.
    </div>
  </div>

  <div class="timeline-item award">
    <div class="timeline-date">🏆 2022-08</div>
    <div class="timeline-content">
      Xuan received the "Shenzhen Innovation & Entrepreneurship Competition <strong>Outstanding</strong> Award," securing a 7K CNY cash award.
    </div>
  </div>
</div>

<script>
// Timeline scroll animation
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateTimelineOnScroll() {
  var timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(function(item, index) {
    if (isElementInViewport(item) && !item.classList.contains('animate-in')) {
      setTimeout(function() {
        item.classList.add('animate-in');
      }, index * 100); // Stagger animation
    }
  });
}

// Run on load and scroll
window.addEventListener('load', animateTimelineOnScroll);
window.addEventListener('scroll', animateTimelineOnScroll);
</script>
