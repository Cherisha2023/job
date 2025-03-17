import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Code, Brush, Database, Smartphone, Globe, Layers, Server, Monitor, Cloud, Terminal, Cpu, Shield, Bug, Network, Book, FileText, HardDrive } from "lucide-react";
import { motion } from "framer-motion";

const JobListings = () => {
  const [search, setSearch] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterSalary, setFilterSalary] = useState("");

  const navigate = useNavigate(); // Add this line to use navigation

  const jobIcons = {
    "Full Stack Developer": Layers,
    "Node JS Developer": Server,
    "UX/UI Designer": Brush,
    "ReactJS Developer": Code,
    "Angular Developer": Code,
    "Backend Developer": Database,
    "Frontend Developer": Monitor,
    "Mobile App Developer": Smartphone,
    "Cloud Engineer": Cloud,
    "DevOps Engineer": Terminal,
    "Data Scientist": Cpu,
    "Cybersecurity Analyst": Shield,
    "QA Tester": Bug,
    "Network Engineer": Network,
    "Technical Writer": Book,
    "Business Analyst": FileText,
    "System Admin": HardDrive,
  };

  const companies = ["Accenture", "CTS", "Zoho", "Mindtree", "Verizon", "TCS", "Alphabet", "Meta", "Facebook", "Amazon"];
  const jobTitles = Object.keys(jobIcons);

  const jobs = Array.from({ length: 100 }, (_, i) => ({
    title: jobTitles[i % jobTitles.length],
    experience: "1-3 yr",
    location: ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune", "Kolkata", "Chennai", "Jaipur"][i % 8],
    salary: (12000 + (i % 10) * 2000).toString(),
    company: companies[i % companies.length],
  }));

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (filterTitle === "" || job.title === filterTitle) &&
    (filterLocation === "" || job.location === filterLocation) &&
    (filterSalary === "" || parseInt(job.salary) >= parseInt(filterSalary))
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="container mx-auto space-y-6">
        {/* Job Table */}
        <div className="overflow-x-auto">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => navigate("/create-job")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
            >
              Create Job
            </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 border-b">Icon</th>
                <th className="py-3 px-4 border-b">Title</th>
                <th className="py-3 px-4 border-b">Company</th>
                <th className="py-3 px-4 border-b">Experience</th>
                <th className="py-3 px-4 border-b">Location</th>
                <th className="py-3 px-4 border-b">Salary (LPA)</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => {
                  const Icon = jobIcons[job.title] || Globe;
                  return (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-3 px-4 border-b">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800 font-semibold">{job.title}</td>
                      <td className="py-3 px-4 border-b text-gray-600">{job.company}</td>
                      <td className="py-3 px-4 border-b text-gray-600">{job.experience}</td>
                      <td className="py-3 px-4 border-b text-gray-600">{job.location}</td>
                      <td className="py-3 px-4 border-b text-green-600 font-bold">{job.salary}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">No jobs found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default JobListings;
