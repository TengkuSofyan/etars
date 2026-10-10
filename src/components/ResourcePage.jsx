import React, { useState } from "react";

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
import { Link } from "react-router-dom";

function ResourcePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const journals = data.paper;
  const years = ["all", ...new Set(journals.map((j) => j.year))].sort(
    (a, b) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return b - a;
    }
  );

  // const filteredJournals = journals.filter((journal) => {
  //   const matchesSearch =
  //     journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     journal.authors.some((author) =>
  //       author.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) ||
  //     journal.journal.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesYear =
  //     selectedYear === "all" || journal.year === parseInt(selectedYear);
  //   return matchesSearch && matchesYear;
  // });

  const filteredJournals = journals.filter((journal) => {
    const matchesSearch =
      journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      journal.publisher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear =
      selectedYear === "all" || journal.year === parseInt(selectedYear);
    return matchesSearch && matchesYear;
  });

  return (
    <div className="px-4 md:px-6 lg:px-8 text-primary max-w-[1280px] mx-auto">
      <h1 className="text-5xl font-extrabold Font-outfit mt-12">Resource</h1>


      {/* technical paper */}
      <div className="mt-12 px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-dark font-outfit text-4xl font-bold ">Technical <span className="text-teal">Paper</span></h2>
        <p className="text-dark my-4 text-xl tracking-tighter">Learn more about our experts’ work and contributions in technical research & published papers</p>

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
                      <div className="flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-full">
                        <Calendar size={16} />
                        <span className="font-semibold">{journal.year}</span>
                      </div>
                      <div className="text-sm text-slate-500 italic">
                        {journal.publisher}
                      </div>
                    </div>

                    {/* Title */}
                    <Link className="hover:text-primary text-slate-900" to={journal.url}>
                      <h3 className="text-2xl font-bold  mb-4 transition-colors leading-tight text-left">
                        {journal.title}
                      </h3>

                    </Link>

                    {/* Authors */}
                    {/* <div className="flex items-start md:items-center md:justify-center gap-2 mb-4">
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
                    </div> */}

                    {/* Doi */}
                    <div className="text-slate-600 mb-4 leading-relaxed text-left font-bold flex flex-col md:flex-row text-md"><span className="mr-2 font-extrabold">DOI:</span>
                      <Link className="hover:text-primary" to={journal.url}>
                        {journal.doi}
                      </Link>
                    </div>

                    {/* Authors */}
                    <div className="flex flex-col md:flex-row gap-3 border-t-1 border-soft pt-2">
                      {journal.authors.map((author, index) => (
                        <div key={index} className="flex gap-2 ">
                          <div className="h-[25px] w-[25px] overflow-hidden rounded-full">
                            <img className="w-full h-full" src={author.img} alt="author-image" loading="lazy" />
                          </div>
                          <div>
                            <p className="font-outfit font-medium text-dark tracking-wide">
                              {author.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

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
