import React, { useState } from "react";
import sampleImg from "/img/learn-python.png";
import { FaUserAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import {
  BookOpen,
  Calendar,
  User,
  Users,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";
import data from "../data";

function ResourcePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const { journals } = data;
  const years = ["all", ...new Set(journals.map((j) => j.year))].sort(
    (a, b) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return b - a;
    }
  );
  const filteredJournals = journals.filter((journal) => {
    const matchesSearch =
      journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journal.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      journal.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear =
      selectedYear === "all" || journal.year === parseInt(selectedYear);
    return matchesSearch && matchesYear;
  });

  return (
    <div className="px-4 md:px-6 lg:px-8 text-primary max-w-[1280px] mx-auto">
      <h1 className="text-6xl font-medium gradient-text mt-12">Resource</h1>
      <div className="mt-8 text-center">
        <h2 className="gradient-text text-4xl font-medium ">Our Videos</h2>
        {/* card container */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-black p-6">
          <div className="shadow-xl flex flex-row p-2">
            <div className="h-32 w-32 ">
              <img className="h-full w-full" src={sampleImg} />
            </div>
            <div className="p-4">
              <p className="mb-1 font-medium text-left">
                Learn Python in Less than 10 Minutes
              </p>
              <p className="text-sm flex flex-row items-center justify-start mb-1">
                <FaUserAlt className="mr-1" /> CodeHolic
              </p>
              <p className="text-sm flex flex-row items-center justify-start">
                <IoIosTime size={16} className="mr-1" /> September 2024
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-row p-2">
            <div className="h-32 w-32 ">
              <img className="h-full w-full" src={sampleImg} />
            </div>
            <div className="p-4">
              <p className="mb-1 font-medium ">
                Learn Python in Less than 10 Minutes
              </p>
              <p className="text-sm flex flex-row items-center justify-start mb-1">
                <FaUserAlt className="mr-1" /> CodeHolic
              </p>
              <p className="text-sm flex flex-row items-center justify-start">
                <IoIosTime size={16} className="mr-1" /> September 2024
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-row p-2">
            <div className="h-32 w-32 ">
              <img className="h-full w-full" src={sampleImg} />
            </div>
            <div className="p-4">
              <p className="mb-1 font-medium ">
                Learn Python in Less than 10 Minutes
              </p>
              <p className="text-sm flex flex-row items-center justify-start mb-1">
                <FaUserAlt className="mr-1" /> CodeHolic
              </p>
              <p className="text-sm flex flex-row items-center justify-start">
                <IoIosTime size={16} className="mr-1" /> September 2024
              </p>
            </div>
          </div>
          <div className="shadow-xl flex flex-row p-2">
            <div className="h-32 w-32 ">
              <img className="h-full w-full" src={sampleImg} />
            </div>
            <div className="p-4">
              <p className="mb-1 font-medium ">
                Learn Python in Less than 10 Minutes
              </p>
              <p className="text-sm flex flex-row items-center justify-start mb-1">
                <FaUserAlt className="mr-1" /> CodeHolic
              </p>
              <p className="text-sm flex flex-row items-center justify-start">
                <IoIosTime size={16} className="mr-1" /> September 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* technical paper */}
      <div className="mt-12 px-4 md:px-6 lg:px-8 text-center">
        <h2 className="gradient-text text-4xl font-medium ">Technical Paper</h2>

        {/* Filters Section */}
        <div className="bg-white shadow-md max-w-[1280px]  border-b border-slate-200">
          <div className=" px-6 py-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by title, author, or journal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500"
                />
              </div>

              {/* Year Filter */}
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white appearance-none cursor-pointer min-w-[150px] text-gray-500"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year === "all" ? "All Years" : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              Showing {filteredJournals.length} of {journals.length}{" "}
              publications
            </div>
          </div>
        </div>

        {/* card container */}
        <div className="min-h-screen py-7">
          <div className="max-w-6xl mx-auto">
            {filteredJournals.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen
                  className="inline-block text-slate-300 mb-4"
                  size={64}
                />
                <p className="text-xl text-slate-600">
                  No publications found matching your criteria
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJournals.map((journal) => (
                  <div
                    key={journal.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-slate-200 hover:border-blue-300"
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 rounded-full">
                        <Calendar size={16} />
                        <span className="font-semibold">{journal.year}</span>
                      </div>
                      <div className="text-sm text-slate-500 italic">
                        {journal.journal}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors leading-tight">
                      {journal.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-start md:items-center md:justify-center gap-2 mb-4">
                      {journal.authors.length === 1 ? (
                        <User
                          className="text-slate-400 mt-1 flex-shrink-0"
                          size={18}
                        />
                      ) : (
                        <Users
                          className="text-slate-400 mt-1 flex-shrink-0"
                          size={18}
                        />
                      )}
                      <div className="flex-1 md:flex-none">
                        <p className="text-slate-700">
                          {journal.authors.map((author, idx) => (
                            <span key={idx}>
                              <span className="font-medium">{author}</span>
                              {idx < journal.authors.length - 1 && ", "}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Abstract */}
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {journal.abstract}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcePage;
