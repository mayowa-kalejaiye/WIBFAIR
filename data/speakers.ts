export type Speaker = {
  id: string;
  name: string;
  title: string;
  role: string;
  subRole: string;
  img: string;
  bio: string[];
  qualifications?: string[];
  contact?: {
    email?: string[];
    instagram?: string[];
    phone?: string;
  };
};

export const SPEAKERS_ROSTER: Speaker[] = [
  {
    id: "bunmi-alabi",
    name: "Bunmi Alabi",
    role: "President & Founder",
    subRole: "President, Unbroken Ladies Community",
    title: "Mental Health Counselor & Coach | Speaker | Assistant Pastor | Author | Entrepreneur | Media Personality | President, Unbroken Ladies Community",
    img: "/IMG_9133.JPG.jpeg",
    bio: [
      "Bunmi Alabi is a Nigerian mental health counselor, coach, speaker, author, assistant pastor, entrepreneur, and media personality passionate about helping people heal, rediscover their identity, rebuild confidence, and become intentional about the lives they were created to live.",
      "She serves as an Assistant Pastor at The House of God Ministry International, where her passion for people, faith, emotional wellness, and spiritual growth finds expression in her service to God and humanity. Her work reflects a unique intersection of faith, mental health, personal development, relationships, and purposeful living.",
      "Bunmi holds a B.Sc. in Industrial Chemistry from the University of Ilorin, a Master’s degree in Environmental Chemistry, a certificate in Broadcasting from the National Broadcasting School, Lagos, and a Diploma in Mental Health Counseling from the Chartered Institute of Counseling Nigeria.",
      "She is the founder of Oasis Counseling, president of Unbroken Ladies Community, author of Couples Waiting Room (for couples trying to conceive), founder of the Bunmi Alabi Humanitarian Foundation, and host of Just A Chat with Bunmi Alabi."
    ]
  },
  {
    id: "dr-funke-sobowale",
    name: "Dr. Sobowale OluwaFunke Tosin",
    role: "Speaker",
    subRole: "G.E.T Founder & Group Managing Director",
    title: "Group Managing Director | Construction & Real Estate Expert | Business Developer | Chartered Marketer | Wealth Manager | G.E.T Founder",
    img: "/IMG_9128.JPG.jpeg",
    bio: [
      "Dr. Sobowale Funke Tosin is a highly accomplished Group Managing Director with over a decade of experience in construction, real estate, business development, and wealth management.",
      "She holds a Bachelor of Science degree from Olabisi Onabanjo University and an MBA from the University of Gloucestershire in the United Kingdom. In 2018, she was awarded an Honorary Doctorate of Science for Excellence in Real Estate and Economic Development by the European American University.",
      "Her academic portfolio includes a Master of Business Administration (MBA) in Agribusiness from the Rome Business School in Nigeria, a Post Graduate Diploma in Professional Marketing from the Chartered Institute of Marketing (CIM), an OTHM Level 7 Diploma in Strategic Management and Leadership, and PMP certification.",
      "She is the founder and visionary leader of the Global Enterprise Table Forum (G.E.T.), a dynamic platform where global leaders converge to explore trade, investment, and strategic partnerships. Dr. Funke is the Group Managing Director of Brave Up Travels, Ladrillos Construction, Velvet Casa Limited, and Labrisco Enterprise Limited."
    ],
    contact: {
      email: ["phumzyadex123@gmail.com", "funke.joash@ladrillosconstructionltd.com"],
      instagram: ["@funke.sob", "@getforum"],
      phone: "+2348038171897"
    }
  },
  {
    id: "hunsu-omolara",
    name: "Omolara Hunsu",
    role: "Speaker",
    subRole: "Public Health Professional & Nurse Educator",
    title: "Nurse (RN, BSc Nursing, MSc Public Health) | Public Health Professional | Nurse Educator | Project Manager | Healthcare Quality & Leadership Advocate",
    img: "/IMG_9131.JPG.jpeg",
    bio: [
      "Omolara Hunsu (RN, BSc Nursing, MSc Public Health) is a dedicated nursing and public health professional with a strong passion for improving healthcare outcomes through quality nursing practice, health education, community interventions, workforce development, and innovative healthcare solutions.",
      "With several years of professional nursing experience and an evolving career spanning clinical practice, education, management, public health, and community health initiatives, she is committed to contributing meaningfully to the development of stronger and more responsive healthcare systems.",
      "Her professional journey reflects a deliberate interest in moving beyond the traditional boundaries of clinical nursing, focusing on nursing education, healthcare quality improvement, public health policy, health promotion, women's health, preventive healthcare, and the professional development of healthcare workers."
    ]
  },
  {
    id: "doreen-omosele",
    name: "Doreen Omosele (TMA)",
    role: "Speaker",
    subRole: "CEO Narra Africa Media & Founder Blossom Girls",
    title: "Transformational Speaker | Author | Media Entrepreneur | Filmmaker | Women’s Advocate | Founder, Blossom Girls Outreach Foundation",
    img: "/IMG_9127.JPG.jpeg",
    bio: [
      "Doreen Omosele, popularly known as TMA (The Mrs. Aaron), is a transformational speaker, author, media entrepreneur, filmmaker, women’s advocate and nonprofit leader whose work centres on helping women move from brokenness to healing, purpose and meaningful impact.",
      "She is the Founder and Executive Director of Blossom Girls Outreach Foundation, an organisation dedicated to supporting, rehabilitating and economically empowering vulnerable women and girls, particularly women transitioning from the sex trade. Through the Foundation and The Blossom Rehab, Doreen has championed structured interventions involving counselling, mind renewal, mentorship, skills development, financial education and reintegration.",
      "Doreen is also the Founder of Narra Africa Media, a growing media and visibility company helping individuals, brands, ministries and organisations strategically position their stories, work and impact for greater influence. She is the author of the forthcoming 'The Visibility Code' and serves as President of When Ladies Gather (WLG).",
      "An alumna of Obafemi Awolowo University, Doreen is a certified creative designer and filmmaker whose advocacy earned her a nomination for The Future Awards Africa in Community Action."
    ]
  },
  {
    id: "tessy-osakwe",
    name: "Tessy Ngozi Osakwe",
    role: "Speaker",
    subRole: "Legal Practitioner & Gender Advocate",
    title: "Legal Practitioner | Human Rights & Gender Advocate | Mediator | Anti-Human Trafficking Advocate | Property Consultant | Certified Caregiver",
    img: "/IMG_9123.JPG.jpeg",
    bio: [
      "Tessy Ngozi Osakwe is a Nigerian Legal Practitioner, Human Rights and Gender Advocate, Mediator, Property Consultant, and the Head of Chambers at Tessy Ngozi Osakwe Attorneys (TNO Attorneys). Her principal office is located in Ikorodu, Lagos, with a branch office at Lagos Airport Hotel, Ikeja.",
      "She is deeply committed to the protection, promotion, and preservation of the rights of women, children, and other vulnerable persons, with particular interests in gender justice, human rights, access to justice, domestic violence, child protection, persons living with disabilities, and the fight against human trafficking.",
      "Tessy currently works with the UN IOM through the Lagos Legal Hub. She served as Chairman of the NBA Women Forum (Ikorodu Branch, 2024–2026), Chairman of the Anti-Human Trafficking Committee (NBA Ikorodu Branch), and Chairman of the NBA Ikorodu Branch Committee on Domestic Violence, Child's Rights and Persons Living with Disabilities (2020–2023).",
      "She is an active member of the International Federation of Women Lawyers (FIDA), an Accredited Mediator with the Lagos Multi-Door Courthouse (LMDC), and an active member of the Duty Solicitors Network (DSN) and Police Duty Solicitor Scheme (PDSS).",
      "Beyond law, Tessy is a Certified Health Care Assistant with professional certifications from the American Caregiver Association and practical experience in caregiving. Above all her accomplishments, she is a proud mother of two boys, who inspire her commitment to building a society where justice, dignity, and compassion are accessible to all."
    ]
  }
];
