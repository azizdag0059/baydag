"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { ArrowUpRight, CheckCircle2, MapPin, Layers } from "lucide-react";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "Tüm İmalatlar" },
    { id: "merdiven", name: "Çelik Merdivenler" },
    { id: "cati", name: "Pergola & Çelik Yapılar" },
    { id: "asmakat", name: "Hangar & Platformlar" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0f12]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Zanaat Portfolyosu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              ÖNE ÇIKAN <span className="text-[#ff5e14]">PROJELERİMİZ</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  activeFilter === cat.id
                    ? "bg-[#ff5e14] text-white border-[#ff5e14] shadow-[0_0_15px_rgba(255,94,20,0.4)]"
                    : "bg-[#181d24] text-[#8b9bb0] border-[#28303d] hover:text-white hover:border-[#ff5e14]/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#12151a] border border-[#28303d] hover:border-[#ff5e14]/70 transition-all duration-300 group overflow-hidden shadow-xl flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={project.afterImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 bg-[#0d0f12]/90 border border-white/10 text-white text-xs font-bold uppercase">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center gap-1 px-3 py-1 bg-[#181d24]/90 border border-[#ff5e14]/60 text-[#ff5e14] text-xs font-semibold">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff5e14] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9ca3af] mb-4 leading-relaxed">
                    {project.afterDescription}
                  </p>

                  {/* Specs Pill List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#181d24] border border-[#28303d] text-[11px] text-gray-300 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#28303d] flex items-center justify-between">
                  <span className="text-xs text-[#8b9bb0] font-mono">
                    {project.dimensions}
                  </span>
                  <a
                    href={`https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20%22${encodeURIComponent(
                      project.title
                    )}%22%20projeniz%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5e14] hover:text-white uppercase tracking-wider group/link"
                  >
                    <span>Fiyat & Keşif İste</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
