const DATA = {
  columbia: {
    logo:"assets/columbia_logo.png", fall:"CU", fallColor:"#0C1E3C", badgeBg:"#fff", badgeFit:"contain", badgeInset:80,
    title:"Bachelor of Science, Operations Research",
    co:"Columbia University - Fu Foundation School of Engineering and Applied Science", dates:"",
    lede:"BS in Operations Research, NCAA D1 Diver.",
    bullets:[
      "Columbia Mentoring Initiative - Head Chair",
      "NCAA Division 1 Women's Swimming and Diving - Athlete",
      "Delta Gamma - Rho Gamma and Member"
    ],
    awards:[
      {t:"OMA Graduation Cord Award", meta:"Columbia Office of Multicultural Affairs - May 2017", d:"For outstanding commitment to inclusion, global diversity, and multiculturalism"},
      {t:"Dean's List", meta:"", d:""}
    ]
  },
  ibm: {
    logo:"assets/ibm.svg", fall:"IBM", fallColor:"#fff", badgeBg:"#000",
    title:"Consulting - Business Transformation & Project Management",
    co:"IBM", dates:"Sep 2017 - Jan 2019",
    lede:"Consulting across business transformation and project management for enterprise clients.",
    bullets:[
      "Business Transformation Consultant, Global Pharmaceutical Company (2017-2018): earned IBM's highest Client Success rating; cut cutover data-loading errors 42% using advanced Excel and VBA on 200K+ records; built a Python tool for process fall-off and throughput calculations that saved the client $10K+/year; used SQL to streamline Oracle configuration and doubled total contract value.",
      "Project Management Officer, Leading Health Insurance Company (2018-2019): ran three workstreams, built complex project plans and critical-path analysis, and met 16 client deliverables."
    ],
    awards:[
      {t:"Manager's Choice Award", meta:"IBM - Mar 2018", d:"For demonstrating the IBM Practice: listen for need, envision the future."}
    ]
  },
  alexa: {
    logo:"assets/alexa.jpeg", fall:"a+", fallColor:"#fff", badgeBg:"#07101A",
    title:"Senior AI Product Manager - Technical, Alexa Core Agent Experience",
    co:"Amazon", dates:"Oct 2024 - Present",
    lede:"Building generative-AI automation for Alexa+.",
    launches:[
      {
        t:"Alexa+ AI Action", meta:"Product Lead - Oct 2025",
        d:"Featured in the executive press demo showcasing 50+ new Alexa+ capabilities, driving subscription tier differentiation.",
        links:[{label:"Amazon News", url:"https://www.aboutamazon.com/news/devices/new-alexa-top-features"}]
      },
      {
        t:"Alexa+ Oura Ring Integration", meta:"Product Lead - Jan 2026",
        d:"Health-data integration bringing Oura Ring signals into Alexa+ automations.",
        links:[
          {label:"Amazon News", url:"https://www.aboutamazon.com/news/devices/alexa-plus-samsung-bmw-bosch-oura-integrations"},
          {label:"Oura Blog", url:"https://ouraring.com/blog/da/oura-amazon-alexa-integration/"}
        ]
      },
      {
        t:"Custom Action Validator Agent", meta:"Product Lead - Dec 2025",
        d:"LLM-as-a-Judge validation framework; 66% improvement in customer intent success rate.",
        links:[]
      },
      {
        t:"Personal Presence Detection", meta:"Product Lead - Dec 2025",
        d:"AI-powered personal recognition for personalized automations.",
        links:[{label:"Amazon News", url:"https://www.aboutamazon.com/news/devices/new-alexa-top-features"}]
      }
    ]
  },
  kinesis: {
    logo:"assets/kinesis.png", fall:"KDS", fallColor:"#fff", badgeBg:"linear-gradient(45deg,#4E27A9,#A166FF)", badgeFit:"contain", badgeInset:92,
    title:"Senior Product Manager - Technical, External Services",
    co:"AWS - Kinesis Data Streams", dates:"Jul 2022 - Oct 2024",
    lede:"Owned product for real-time streaming that handles millions of events a second, with a focus on security, observability, and cost.",
    launches:[
      {
        t:"Kinesis Client Library (KCL) 3.0", meta:"Product Lead - Oct 2024",
        d:"Adaptive data retrieval enabling cost optimization and improved performance for real-time streaming.",
        links:[
          {label:"What's New", url:"https://aws.amazon.com/about-aws/whats-new/2024/11/kinesis-client-library-reduces-stream-processing-compute-costs/"},
          {label:"Docs", url:"https://docs.aws.amazon.com/streams/latest/dev/kcl.html"}
        ]
      },
      {
        t:"SQL Query Capability", meta:"Product Lead - Feb 2024",
        d:"One-click SQL query for real-time stream analysis and visualization across all AWS Regions.",
        links:[
          {label:"What's New", url:"https://aws.amazon.com/about-aws/whats-new/2024/02/amazon-kinesis-data-streams-query-data-aws-management-console/"},
          {label:"Docs", url:"https://docs.aws.amazon.com/streams/latest/dev/querying-data.html"}
        ]
      },
      {
        t:"Data Plane Logging to AWS CloudTrail", meta:"Product Lead - May 2024",
        d:"Comprehensive logging to 33 AWS Regions for enhanced security monitoring and compliance on streaming workloads.",
        links:[
          {label:"What's New", url:"https://aws.amazon.com/about-aws/whats-new/2024/05/amazon-kinesis-data-streams-data-plane-logging-aws-cloudtrail/"},
          {label:"Docs", url:"https://docs.aws.amazon.com/streams/latest/dev/logging-using-cloudtrail.html"}
        ]
      },
      {
        t:"Attribute-Based Access Control (ABAC)", meta:"Product Lead - Aug 2024",
        d:"Tag-based access control for Kinesis Data Streams.",
        links:[
          {label:"What's New", url:"https://aws.amazon.com/about-aws/whats-new/2024/09/amazon-kinesis-data-streams-abac/"},
          {label:"Docs", url:"https://docs.aws.amazon.com/streams/latest/dev/tagging.html"}
        ]
      }
    ]
  },
  builder: {
    logo:"assets/builder.png", fall:"SBX", fallColor:"#146EB4", badgeBg:"#fff", badgeFit:"contain", badgeInset:80,
    title:"Product Manager - Technical, ASBX",
    co:"AWS - Amazon Software Builder Experience", dates:"Jun 2021 - Jul 2022",
    lede:"Built developer-experience and learning products used by engineering teams across Amazon.",
    bullets:[
      "Developed a data-driven customer persona framework using behavioral analysis; 10 personas adopted by six teams.",
      "Designed and launched a Networking course reaching 5,200+ completions with an NPS of 80 and 94% CSAT through intelligent content recommendations and personalized learning paths.",
      "Delivered the DevCon AWS Track to 4,000+ attendees with a 4.5/5 quality score.",
      "Implemented randomized control trials to measure Tier-1 Resolver training impact using statistical analysis."
    ],
    awards:[
      {t:"Intrepid Innovator Award", meta:"AWS - Nov 2021", d:"For investigating and creating customer personas with organization-wide applicability: interviewed customers to understand pain points and simplified the process so teams could use customer insights when building products."}
    ]
  },
  sa: {
    logo:"assets/aws.png", fall:"AWS", fallColor:"#fff", badgeBg:"#232F3E", badgeFit:"contain", badgeInset:68,
    title:"Solutions Architect \u2192 Senior Solutions Architect",
    co:"Amazon Web Services", dates:"Jan 2019 - Jun 2021",
    lede:"Ran the technical side of enterprise sales, taking customers through cloud migration and app modernization.",
    bullets:[
      "Mobilized five cloud migrations totaling $8MM AWS ARR through C-level stakeholder engagement; exceeded yearly quota.",
      "Assessed and formulated business cases analyzing TCO and ROI for on-premises to cloud migrations.",
      "Designed and guided application modernization to containers, serverless architectures, and Big Data solutions.",
      "Delivered tech talks on AWS AI/ML services, opening new AI/ML customer opportunities through improved discovery and positioning."
    ],
    awards:[
      {t:"Solutions Architect Top Performer", meta:"AWS - Aug 2020", d:"Awarded to the top performing Solutions Architect."},
      {t:"Americas Q2 \"Most Effective\" SA Award", meta:"AWS - Jun 2020", d:"Based on launched-opportunity rate: 83% of the opportunities supported with SA activities launched, and 90% of logged activities were on launched opportunities."}
    ]
  }
};

const overlay = document.getElementById("overlay");
let lastFocus = null;

function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function openModal(key){
  const d = DATA[key];
  if(!d) return;
  const badge = document.getElementById("m-badge");
  badge.style.background = d.badgeBg;
  const fit = d.badgeFit || "cover";
  const inset = d.badgeInset || 100;
  badge.innerHTML = '<img src="'+d.logo+'" alt="" style="width:'+inset+'%;height:'+inset+'%;object-fit:'+fit+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\';"><span class="bfall" style="display:none;color:'+d.fallColor+'">'+d.fall+'</span>';
  document.getElementById("m-title").textContent = d.title;
  document.getElementById("m-co").textContent = d.co;
  const dEl = document.getElementById("m-dates");
  dEl.textContent = d.dates; dEl.style.display = d.dates ? "block" : "none";
  document.getElementById("m-lede").textContent = d.lede;

  const content = document.getElementById("m-content");
  let html = "";
  if(d.launches){
    html += '<div class="launch-head">Selected launches</div>';
    d.launches.forEach(l => {
      html += '<div class="launch">';
      html += '<div class="lt">'+esc(l.t)+'</div>';
      html += '<div class="lmeta">'+esc(l.meta)+'</div>';
      html += '<div class="ldesc">'+esc(l.d)+'</div>';
      if(l.links && l.links.length){
        html += '<div class="llinks">';
        l.links.forEach(k => { html += '<a class="src" href="'+encodeURI(k.url)+'" target="_blank" rel="noopener">'+esc(k.label)+' \u2197</a>'; });
        html += '</div>';
      } else {
        html += '<div class="nolink">Internal - not publicly documented</div>';
      }
      html += '</div>';
    });
  } else if(d.bullets){
    html += '<ul class="bullets">';
    d.bullets.forEach(b => { html += '<li>'+esc(b)+'</li>'; });
    html += '</ul>';
  }
  if(d.awards){
    html += '<div class="launch-head" style="margin-top:20px">Awards</div>';
    d.awards.forEach(a => {
      html += '<div class="launch">';
      html += '<div class="lt">'+esc(a.t)+'</div>';
      if(a.meta) html += '<div class="lmeta">'+esc(a.meta)+'</div>';
      if(a.d) html += '<div class="ldesc">'+esc(a.d)+'</div>';
      html += '</div>';
    });
  }
  content.innerHTML = html;

  overlay.classList.add("open");
  document.body.style.overflow="hidden";
  document.getElementById("m-close").focus();
}
function closeModal(){
  overlay.classList.remove("open");
  document.body.style.overflow="";
  if(lastFocus) lastFocus.focus();
}

document.querySelectorAll(".tile").forEach(t => {
  t.addEventListener("click", () => { lastFocus = t; openModal(t.getAttribute("data-key")); });
});
document.getElementById("m-close").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if(e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape" && overlay.classList.contains("open")) closeModal(); });

const EMAIL = "laura.carandang@gmail.com";
function wireCta(btnId, labelId){
  const btn = document.getElementById(btnId);
  if(!btn) return;
  let revealed = false;
  btn.addEventListener("click", () => {
    if(!revealed){
      document.getElementById(labelId).innerHTML = '<span class="em">' + EMAIL + '</span>';
      revealed = true;
    } else { window.location.href = "mailto:" + EMAIL; }
  });
}
wireCta("cta", "cta-label");
wireCta("cta-top", "cta-top-label");
