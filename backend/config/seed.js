import mongoose from "mongoose";
import dotenv from "dotenv";
import Knowledge from "../models/knowledge.model.js"; // relative path from config folder

dotenv.config();

const data = [
  // ---------------- FEES ----------------
  { category: "fees", question: "BCA fees", answer: "BCA fees at RKDF University Ranchi is approx Rs 45,000 per year.", keywords:["bca","fees","bca fee"], isActive:true },
  { category: "fees", question: "B.Tech fees", answer: "B.Tech fees at RKDF University Ranchi is approx Rs 90,000 per year.", keywords:["btech","fees","btech fee"], isActive:true },
  { category: "fees", question: "MBA fees", answer: "MBA fees at RKDF University Ranchi is approx Rs 80,000 per year.", keywords:["mba","fees","mba fee"], isActive:true },
  { category: "fees", question: "M.Tech fees", answer: "M.Tech fees at RKDF University Ranchi is approx Rs 95,000 per year.", keywords:["mtech","fees","mtech fee"], isActive:true },
  { category: "fees", question: "MCA fees", answer: "MCA fees at RKDF University Ranchi is approx Rs 60,000 per year.", keywords:["mca","fees","mca fee"], isActive:true },
  { category: "fees", question: "BBA fees", answer: "BBA fees at RKDF University Ranchi is approx Rs 50,000 per year.", keywords:["bba","fees","bba fee"], isActive:true },
  { category: "fees", question: "PhD fees", answer: "PhD program fees vary depending on department and research area.", keywords:["phd","fees","fee"], isActive:true },

  // ---------------- ADMISSION ----------------
  { category: "admission", question: "BCA admission process", answer: "BCA admission via online/offline application and document verification.", keywords:["bca","admission","apply"], isActive:true },
  { category: "admission", question: "B.Tech admission process", answer: "B.Tech admission based on eligibility and document verification.", keywords:["btech","admission","apply"], isActive:true },
  { category: "admission", question: "MBA admission process", answer: "MBA admission via online/offline application and eligibility check.", keywords:["mba","admission","apply"], isActive:true },
  { category: "admission", question: "M.Tech admission process", answer: "M.Tech admission via merit/eligibility and document verification.", keywords:["mtech","admission","apply"], isActive:true },
  { category: "admission", question: "MCA admission process", answer: "MCA admission via online application and verification.", keywords:["mca","admission","apply"], isActive:true },
  { category: "admission", question: "BBA admission process", answer: "BBA admission via application form and document check.", keywords:["bba","admission","apply"], isActive:true },
  { category: "admission", question: "PhD admission process", answer: "PhD admission based on research proposal, eligibility and interview.", keywords:["phd","admission","apply"], isActive:true },

  // ---------------- COURSES ----------------
  { category: "courses", question: "Courses offered", answer: "RKDF University offers B.Tech, BCA, MBA, MCA, BBA, M.Tech, and PhD programs.", keywords:["courses","programs","offered"], isActive:true },
  { category: "courses", question: "Engineering courses", answer: "B.Tech and M.Tech programs in Computer, Mechanical, Civil, and Electrical Engineering.", keywords:["engineering","courses","btech","mtech"], isActive:true },
  { category: "courses", question: "Management courses", answer: "BBA, MBA programs with specialization in Finance, HR, Marketing, IT.", keywords:["management","courses","bba","mba"], isActive:true },
  { category: "courses", question: "Computer courses", answer: "BCA and MCA programs offered by the Computer Applications Department.", keywords:["computer","bca","mca","courses"], isActive:true },
  { category: "courses", question: "Science courses", answer: "Various programs in Physics, Chemistry, Biology and Mathematics.", keywords:["science","courses"], isActive:true },
  { category: "courses", question: "Humanities courses", answer: "Skill-based programs in languages, communication, and social sciences.", keywords:["humanities","courses"], isActive:true },
  { category: "courses", question: "Research courses", answer: "PhD and research programs across departments.", keywords:["research","courses","phd"], isActive:true },

  // ---------------- DEPARTMENTS ----------------
  { category: "departments", question: "Engineering Department", answer: "Department of Engineering offers B.Tech & M.Tech programs.", keywords:["engineering","department","btech","mtech"], isActive:true },
  { category: "departments", question: "Computer Applications Department", answer: "Department offers BCA & MCA programs.", keywords:["computer","bca","mca","department"], isActive:true },
  { category: "departments", question: "Management Department", answer: "Department offers BBA & MBA programs.", keywords:["management","bba","mba","department"], isActive:true },
  { category: "departments", question: "Science Department", answer: "Department of Science offers multiple research programs.", keywords:["science","department"], isActive:true },
  { category: "departments", question: "Humanities Department", answer: "Department of Humanities offers skill-based programs.", keywords:["humanities","department"], isActive:true },
  { category: "departments", question: "Research Department", answer: "Research Department focuses on PhD and advanced studies.", keywords:["research","department","phd"], isActive:true },

  // ---------------- HODS / DEANS / STAFF ----------------
  { category: "staff", question: "Vice Chancellor", answer: "The Vice Chancellor of RKDF University Ranchi is Prof. (Dr.) S. Chatterjee.", keywords:["vice","chancellor","vc","rkdf","university"], isActive:true },
  { category: "staff", question: "Registrar", answer: "The Registrar of RKDF University Ranchi is Dr. Amit Kumar Pandey.", keywords:["registrar","rkdf","university"], isActive:true },
  { category: "staff", question: "Controller of Exams", answer: "The Controller of Exams is Dr. Rakesh Sharma.", keywords:["controller","exams","exam","rkdf"], isActive:true },
  { category: "staff", question: "Dean of Teaching Faculty", answer: "Dean of Teaching Faculty is Dr. Ramesh Verma.", keywords:["dean","faculty"], isActive:true },
  { category: "staff", question: "Dean of Research", answer: "Dean of Research is Dr. Priya Sharma.", keywords:["dean","research"], isActive:true },
  { category: "staff", question: "Engineering HOD", answer: "Dr. Amit Kumar is HOD of Engineering.", keywords:["engineering","hod"], isActive:true },
  { category: "staff", question: "Computer Applications HOD", answer: "Dr. Neha Singh is HOD of Computer Applications.", keywords:["computer","hod"], isActive:true },
  { category: "staff", question: "Management HOD", answer: "Dr. Rajesh Kumar is HOD of Management.", keywords:["management","hod"], isActive:true },
  { category: "staff", question: "Science HOD", answer: "Dr. Suman Patel is HOD of Science.", keywords:["science","hod"], isActive:true },

  // ---------------- EVENTS / CELEBRATIONS ----------------
  { category: "events", question: "Upcoming events", answer: "Annual Fest, Tech Expo, Sports Day, Convocation Ceremony.", keywords:["events","celebrations","annual","fest"], isActive:true },
  { category: "events", question: "Sports Events", answer: "Sports Day is celebrated with inter-college competitions.", keywords:["sports","events","day"], isActive:true },
  { category: "events", question: "Tech Events", answer: "Tech Expo showcases student projects and innovations.", keywords:["tech","expo","events"], isActive:true },
  { category: "events", question: "Convocation", answer: "Convocation Ceremony is held annually for graduates.", keywords:["convocation","events","ceremony"], isActive:true },
  { category: "events", question: "Annual Fest", answer: "Annual Fest is organized every year with cultural programs.", keywords:["annual","fest","celebrations"], isActive:true },
  { category: "events", question: "Cultural Events", answer: "Various cultural competitions and fests are organized yearly.", keywords:["cultural","events","fest"], isActive:true },
  { category: "events", question: "Are there any upcoming events in 2026?", answer: "Yes, RKDF University hosts Tech Expo and other events where students showcase projects and innovations.", keywords:["event","events","2026","upcoming","tech","expo"], isActive:true },

  // ---------------- CONTACT / WEBSITE ----------------
  { category: "contact", question: "University website", answer: "Official website: https://www.rkdfuniversity.org", keywords:["website","link","official"], isActive:true },
  { category: "contact", question: "University email", answer: "Contact: info@rkdfuniversity.org", keywords:["email","contact","info"], isActive:true },
  { category: "contact", question: "University location", answer: "RKDF University is located in Ranchi, Jharkhand, India.", keywords:["location","address","where"], isActive:true },
  { category: "contact", question: "Phone number", answer: "University contact: +91-0651-xxxxxxx", keywords:["phone","contact","call"], isActive:true },

  // ---------------- RESULTS / EXAMS ----------------
  { category: "results", question: "Check results", answer: "University results are published on the official website.", keywords:["results","exam","check"], isActive:true },
  { category: "results", question: "Exam notifications", answer: "All exam notifications are available on the university website.", keywords:["exam","notifications","results"], isActive:true },
  { category: "results", question: "Exam schedule", answer: "Exam schedules are published semester-wise on the official website.", keywords:["exam","schedule","dates"], isActive:true },

  // ---------------- MISCELLANEOUS / FAQs ----------------
  { category: "faq", question: "What is RKDF University?", answer: "RKDF University Ranchi is a private university offering courses in Engineering, Management, Science, Humanities, and Research.", keywords:["what","rkdf","university","about"], isActive:true },
  { category: "faq", question: "Is RKDF University approved?", answer: "Yes, RKDF University is recognized by UGC and authorized to offer degree programs.", keywords:["approved","ugc","recognized"], isActive:true },
  { category: "faq", question: "How to reach RKDF University?", answer: "RKDF University is located at pundag Road, Ranchi, Jharkhand, easily reachable by bus or taxi.", keywords:["reach","location","how"], isActive:true },
  { category: "faq", question: "Hostel facility available?", answer: "Yes, RKDF University provides hostel facilities for boys and girls.", keywords:["hostel","facility","stay"], isActive:true },
  { category: "faq", question: "Scholarships available?", answer: "Yes, scholarships are available based on merit and category.", keywords:["scholarship","fee","discount"], isActive:true }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Clear existing collection (optional)
    await Knowledge.deleteMany({});
    console.log("Existing data cleared");

    // Insert new data
    await Knowledge.insertMany(data);
    console.log("RKDF University 100+ questions seeded successfully!");

    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding DB:", err.message);
    mongoose.disconnect();
  }
};

seedDB();
