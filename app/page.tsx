'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { examConfig } from '@/lib/examConfig';

export default function Home() {
  const router = useRouter();
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const tahaps = [
    {
      id: 1,
      name: "Tahap 1",
      desc: "Kemampuan Dasar & Core Values",
      duration: "113 Menit",
      questions: 175,
      subtests: examConfig.slice(0, 6)
    },
    {
      id: 2,
      name: "Tahap 2",
      desc: "Bahasa Inggris & Agility",
      duration: "120 Menit",
      questions: 150,
      subtests: examConfig.slice(6, 8)
    }
  ];

  const startExam = (stages: number) => {
    // Kita panggil sub-test awal dari tahap yang dipilih (subtest1 atau subtest7)
    const initialTest = stages === 1 ? 'subtest1' : 'subtest7';
    router.push(`/exam/subtest?id=${initialTest}`);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      {/* Background with glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-700/30 rounded-full blur-[120px] animate-pulse-ring"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-700/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl w-full z-10 animate-fade-in relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium tracking-wider mb-4">
            OFFICIAL SIMULATION
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-primary-300 mb-6 drop-shadow-sm">
            RBB BUMN 2026 CBT
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pilih tahap ujian Anda. Soal dirancang berdasarkan pengalaman riil dan indikator penilaian resmi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tahaps.map((tahap) => (
            <div 
              key={tahap.id}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 cursor-pointer overflow-hidden ${
                selectedStage === tahap.id 
                ? 'border-primary-500 bg-dark-800/80 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                : 'border-dark-700 bg-dark-800/40 hover:border-dark-600 hover:bg-dark-800/60'
              } backdrop-blur-xl`}
              onClick={() => setSelectedStage(tahap.id)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{tahap.name}</h2>
                  <p className="text-primary-300 font-medium">{tahap.desc}</p>
                </div>
                <div className="bg-dark-900/50 backdrop-blur-md border border-dark-700 rounded-xl p-3 flex flex-col items-center min-w-[80px]">
                  <span className="text-xl font-bold text-white">{tahap.questions}</span>
                  <span className="text-xs text-gray-400">Soal</span>
                </div>
              </div>

              {/* Subtests List */}
              <div className="space-y-3 mb-8">
                {tahap.subtests.map((sub, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm py-2 border-b border-dark-700/50 last:border-0">
                    <span className="flex items-center gap-3 text-gray-300">
                      <span className={`w-2 h-2 rounded-full ${sub.color}`}></span>
                      {sub.title}
                    </span>
                    <span className="text-gray-500 font-mono">{sub.minutes}m</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  selectedStage === tahap.id
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-500/25 hover:from-primary-500 hover:to-indigo-500'
                  : 'bg-dark-700 text-gray-400 group-hover:bg-dark-600'
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Biar ngga dobel ke-click sm bungkusnya
                  if (selectedStage === tahap.id) startExam(tahap.id);
                  else setSelectedStage(tahap.id);
                }}
              >
                {selectedStage === tahap.id ? `Mulai ${tahap.name} Sekarang` : 'Pilih Tahap Ini'}
              </button>
            </div>
          ))}
        </div>
        
        {/* Contact & Copyright Footer */}
        <div className="mt-20 border-t border-dark-700/50 pt-8 flex flex-col items-center gap-6 animate-fade-in relative z-10 w-full max-w-4xl mx-auto pb-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
            <a href="https://www.linkedin.com/in/restufirmansyah/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:restufirmansyh22@gmail.com" className="flex items-center gap-2 hover:text-red-400 hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              restufirmansyh22@gmail.com
            </a>
          </div>
          <div className="text-center text-xs text-gray-500 space-y-1">
            <p className="italic">* Mode marathon: sub-tes akan berlanjut secara otomatis hingga akhir tahap.</p>
            <p className="font-semibold tracking-wide">&copy; 2026 All Rights Reserved - Restu Firmansyah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
