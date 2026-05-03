export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
};

export type Certification = {
  name: string;
  year?: string;
};

export type CapabilityItem = {
  slug: string;
  skill: string;
  oneLineValue: string;
  whatItIs: string;
  whatICanDoForYou: string;
  organizationPainPoints: string[];
  outcomes: string[];
  deliverables: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  valueProposition: string;
  audienceMessage: string;
  contacts: ContactLink[];
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  certifications: Certification[];
  projects: ProjectItem[];
  capabilities: CapabilityItem[];
};

export const profile: Profile = {
  name: "Gopi Janjanam",
  role: "Technical Lead - Intelligent Automation",
  location: "Hyderabad, India",
  summary:
    "Technical Lead in Intelligent Automation with 8 years of experience across UiPath and Automation Anywhere. Delivers enterprise automation programs end to end by combining RPA with AI capabilities including Azure AI, RAG, and Microsoft Copilot.",
  valueProposition:
    "I help enterprises turn repetitive operations into resilient, measurable automation systems that scale.",
  audienceMessage:
    "If your teams are spending too much time on manual, rules-driven work, I can design and lead an automation roadmap that improves speed, compliance, and operating cost.",
  contacts: [
    {
      label: "Email",
      value: "gopi.janjanam@gmail.com",
      href: "mailto:gopi.janjanam@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gopi-janjanam",
      href: "https://www.linkedin.com/in/gopi-janjanam",
    },
    {
      label: "Phone",
      value: "+91 73373 73920",
      href: "tel:+917337373920",
    },
  ],
  experience: [
    {
      role: "Technical Lead",
      company: "Cognizant",
      period: "2022 - Present",
      highlights: [
        "Lead a team of 8 developers through design governance, code reviews, and automation best practices.",
        "Designed and deployed 4+ production bots in 2025 and oversee 6 live automations.",
        "Built AI-powered Code Review and Design Review Agents using Microsoft Copilot.",
        "Delivered 10+ automations that reduced manual effort by approximately 40%.",
      ],
    },
    {
      role: "RPA Developer",
      company: "Exponential AI",
      period: "2021 - 2022",
      highlights: [
        "Implemented multi-bot architecture with queues, improving transaction throughput by 35%.",
        "Automated workflows that reduced processing time by 30% across client operations.",
        "Supported UAT, release coordination, and production deployment cycles.",
      ],
    },
    {
      role: "Freelancer",
      company: "Tangentia Inc",
      period: "2020 - 2021",
      highlights: [
        "Delivered end-to-end automation solutions for client-specific business processes.",
        "Built AP automation integrating email parsing, SQL workflows, and Dynamics systems.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Vaizva Tech Pvt Ltd",
      period: "2018 - 2019",
      highlights: [
        "Developed invoice and CMS automation bots to improve processing efficiency and accuracy.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "RPA Platforms",
      items: [
        "UiPath",
        "Automation Anywhere A360 / A2019 / v11",
        "RE Framework",
        "Document Understanding",
      ],
    },
    {
      title: "AI & Modern Automation",
      items: ["Azure AI", "RAG", "AI Agents", "Microsoft Copilot Agents"],
    },
    {
      title: "Programming & Data",
      items: ["Python", "SQL", "C#", "Java", "SQL Server", "MongoDB"],
    },
    {
      title: "Architecture & Delivery",
      items: [
        "Queue-based design",
        "Multi-bot orchestration",
        "Error handling frameworks",
        "Stakeholder management",
      ],
    },
  ],
  certifications: [
    { name: "UiPath Developer Associate", year: "2025" },
    { name: "Automation Anywhere Advanced Certified" },
    { name: "Automation Anywhere Master Certified" },
    { name: "Oracle Generative AI Certified" },
    { name: "Power Platform Fundamentals" },
  ],
  projects: [
    {
      title: "AI-Driven Automation Review Copilot",
      summary:
        "Designed internal code and design review copilots to enforce automation engineering standards before production release.",
      impact: "Improved review consistency and reduced avoidable defects in downstream testing.",
      stack: ["Microsoft Copilot", "Prompt Engineering", "Governance Playbooks"],
    },
    {
      title: "Queue-Orchestrated Invoice Processing Pipeline",
      summary:
        "Architected a resilient queue-based invoice workflow with bot specialization for intake, validation, and posting.",
      impact: "Increased transaction throughput and reduced turnaround time for finance operations.",
      stack: ["UiPath", "SQL Server", "Orchestrator Queues"],
    },
    {
      title: "Enterprise AP Automation with Dynamics Integration",
      summary:
        "Built an accounts payable automation that combined email parsing, structured validation, and ERP integration.",
      impact: "Reduced manual intervention while improving accuracy in vendor invoice handling.",
      stack: ["Automation Anywhere", "SQL", "Dynamics", "Email Automation"],
    },
  ],
  capabilities: [
    {
      slug: "uipath",
      skill: "UiPath",
      oneLineValue: "Enterprise RPA delivery from discovery to production governance.",
      whatItIs:
        "UiPath is an enterprise RPA platform for automating repetitive, rules-based workflows across legacy and modern systems.",
      whatICanDoForYou:
        "I can evaluate your processes, prioritize automation candidates, design resilient UiPath solutions, and lead secure production deployment.",
      organizationPainPoints: [
        "High manual effort in back-office operations",
        "Frequent SLA misses in repetitive workflows",
        "Inconsistent process execution across teams",
      ],
      outcomes: [
        "Lower handling time with stable automations",
        "Higher compliance and execution consistency",
        "Scalable automation roadmap across functions",
      ],
      deliverables: [
        "Process assessment and ROI prioritization",
        "UiPath solution architecture and bot design",
        "Production support model with monitoring and handover",
      ],
    },
    {
      slug: "automation-anywhere",
      skill: "Automation Anywhere",
      oneLineValue: "Cloud-ready bot implementation with operational resilience.",
      whatItIs:
        "Automation Anywhere is a cloud-native automation platform that supports enterprise bot lifecycle management and governance.",
      whatICanDoForYou:
        "I can build and stabilize automation programs on A360/A2019 with reusable components, deployment standards, and robust exception handling.",
      organizationPainPoints: [
        "Bots that fail under real production load",
        "Difficult release cycles and inconsistent quality",
        "Limited reuse across process automations",
      ],
      outcomes: [
        "Higher throughput with orchestrated multi-bot setups",
        "Reduced incident volume in production",
        "Faster delivery through reusable patterns",
      ],
      deliverables: [
        "Bot framework setup and release checklist",
        "Exception handling and retry strategies",
        "Operational dashboards for support teams",
      ],
    },
    {
      slug: "ai-rag-copilot",
      skill: "AI + RAG + Copilot Agents",
      oneLineValue: "Intelligent automation for semi-structured and decision-heavy workflows.",
      whatItIs:
        "AI agents and RAG patterns combine language models with business context to support decisions, document interpretation, and review workflows.",
      whatICanDoForYou:
        "I can integrate AI agents with RPA to improve handling of variable input, automate review steps, and assist teams with contextual recommendations.",
      organizationPainPoints: [
        "Processes that are too variable for pure rule-based bots",
        "Manual review bottlenecks in operations and engineering",
        "Slow triage when exceptions require context lookup",
      ],
      outcomes: [
        "Improved straight-through processing for complex cases",
        "Faster and more consistent review decisions",
        "Better exception resolution with contextual insights",
      ],
      deliverables: [
        "AI-assisted review workflow design",
        "RAG strategy for domain knowledge grounding",
        "Safety and quality controls for AI outputs",
      ],
    },
    {
      slug: "data-integration",
      skill: "Data + Integration Stack",
      oneLineValue: "Reliable data flow across bots, systems, and reporting layers.",
      whatItIs:
        "Python, SQL, and integration patterns connect automation workflows with ERP, internal systems, and data validation logic.",
      whatICanDoForYou:
        "I can build end-to-end data-integrated automations that reconcile records, enforce quality checks, and improve visibility for business stakeholders.",
      organizationPainPoints: [
        "Broken handoffs between tools and teams",
        "Data mismatches that create rework",
        "Limited operational visibility into automation performance",
      ],
      outcomes: [
        "Improved data consistency across systems",
        "Reduced manual reconciliation effort",
        "Clear reporting for operational decisions",
      ],
      deliverables: [
        "Integration mapping and control points",
        "Validation and reconciliation logic",
        "Performance and exception reporting model",
      ],
    },
    {
      slug: "architecture-delivery",
      skill: "Architecture + Delivery Leadership",
      oneLineValue: "Program-level automation leadership for scale and governance.",
      whatItIs:
        "Queue-based design, multi-bot orchestration, and delivery governance are critical for scaling automation programs across enterprise teams.",
      whatICanDoForYou:
        "I can lead your automation program from discovery through production, establish architecture standards, and mentor delivery teams for sustained results.",
      organizationPainPoints: [
        "Automation initiatives that stall after pilots",
        "High rework due to weak design governance",
        "Unclear ownership between business and engineering teams",
      ],
      outcomes: [
        "Predictable execution across multiple workstreams",
        "Lower rework through design standards",
        "Stronger stakeholder confidence with measurable progress",
      ],
      deliverables: [
        "Automation operating model and governance framework",
        "Design review and code quality standards",
        "Delivery roadmap aligned to business outcomes",
      ],
    },
  ],
};

export function getCapabilityBySlug(slug: string): CapabilityItem | undefined {
  return profile.capabilities.find((capability) => capability.slug === slug);
}
