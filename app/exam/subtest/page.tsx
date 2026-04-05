'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { examConfig, getQuestions } from '@/lib/examConfig';

export default function ExamEngine() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubtestId = searchParams.get('id');

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [doubtful, setDoubtful] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [subtestInfo, setSubtestInfo] = useState<any>(null);

  // Load data based on subtest ID
  useEffect(() => {
    if (!currentSubtestId) {
      router.push('/');
      return;
    }

    const info = examConfig.find(e => e.id === currentSubtestId);
    if (!info) {
      router.push('/');
      return;
    }

    setSubtestInfo(info);
    const qs = getQuestions(currentSubtestId);
    setQuestions(qs);
    // Initialize answers to empty based on actual loaded questions (usually 10 for sample, not config max)
    const initialAnswers: any = {};
    const initialDoubtful: any = {};
    qs.forEach((_: any, i: number) => {
      initialAnswers[i] = '';
      initialDoubtful[i] = false;
    });
    setAnswers(initialAnswers);
    setDoubtful(initialDoubtful);
    setTimeLeft(info.minutes * 60);
    setCurrentIdx(0);
  }, [currentSubtestId, router]);

  // Submit test and save to sessionStorage
  const submitTest = useCallback((isAuto = false) => {
    if (!isAuto && !confirm('Apakah Anda yakin ingin menyelesaikan subtest ini?')) return;

    // Save score
    const result = {
      subtestId: currentSubtestId,
      answers,
      totalQuestions: questions.length
    };
    
    // Save to history in session storage
    const historyData = sessionStorage.getItem('examResults');
    const history = historyData ? JSON.parse(historyData) : [];
    history.push(result);
    sessionStorage.setItem('examResults', JSON.stringify(history));

    // Determine next subtest
    const currentIndex = examConfig.findIndex(e => e.id === currentSubtestId);
    let nextIndex = -1;
    
    // Logic: Tahap 1 is index 0 to 5. Tahap 2 is index 6 to 7.
    if (currentIndex >= 0 && currentIndex < 5) nextIndex = currentIndex + 1; // within Tahap 1
    if (currentIndex === 6) nextIndex = 7; // within Tahap 2
    
    if (nextIndex !== -1) {
      router.push(`/exam/subtest?id=${examConfig[nextIndex].id}`);
    } else {
      // Completed the stage end
      router.push('/result');
    }
  }, [answers, currentSubtestId, questions.length, router]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0 && subtestInfo) {
      submitTest(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, subtestInfo, submitTest]);

  if (!questions.length || !subtestInfo) return <div className="min-h-screen bg-dark-900 flex items-center justify-center">Loading...</div>;

  const currentQ = questions[currentIdx];
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft < 300; // < 5 minutes indicates danger

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col h-screen overflow-hidden text-gray-200">
      {/* HEADER */}
      <header className="bg-dark-800 border-b border-dark-700 h-16 flex items-center justify-between px-6 shrink-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${subtestInfo.color}`}></div>
          <h1 className="font-bold text-lg hidden sm:block">{subtestInfo.title}</h1>
        </div>
        <div className={`flex items-center gap-2 font-mono text-xl md:text-2xl font-bold bg-dark-900 border ${isLowTime ? 'border-red-500/50 text-red-500 animate-pulse' : 'border-dark-600 text-primary-400'} px-4 py-1.5 rounded-lg`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {formatTime(timeLeft)}
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT/TOP: Question View */}
        <main className="flex-1 flex flex-col bg-dark-900 relative overflow-y-auto w-full">
          <div className="max-w-4xl w-full mx-auto p-4 md:p-8 flex-1 pb-24">
            
            {/* Question Header */}
            <div className="flex justify-between items-center mb-6 border-b border-dark-700 pb-4">
              <span className="text-xl font-bold text-white bg-dark-800 px-4 py-1 rounded-lg border border-dark-700">Soal {currentIdx + 1}</span>
              <button 
                onClick={() => setDoubtful(p => ({...p, [currentIdx]: !p[currentIdx]}))}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border transition-colors text-sm font-medium ${doubtful[currentIdx] ? 'bg-amber-500/20 text-amber-500 border-amber-500/50' : 'bg-dark-800 text-gray-400 border-dark-600 hover:text-white'}`}
              >
                <svg className="w-4 h-4" fill={doubtful[currentIdx] ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                Tandai Ragu
              </button>
            </div>

            {/* Question Text */}
            <div className="text-lg md:text-xl leading-relaxed text-gray-100 mb-8 font-medium whitespace-pre-wrap">
              {currentQ.question}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {['A', 'B', 'C', 'D', 'E'].map((opt) => (
                <label key={opt} className={`group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${answers[currentIdx] === opt ? 'bg-primary-900/30 border-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-1 ring-primary-500' : 'bg-dark-800/50 border-dark-700 hover:border-dark-500 hover:bg-dark-800'}`}>
                  <div className="flex h-6 items-center">
                    <div className={`flex items-center justify-center w-6 h-6 rounded border font-semibold text-sm transition-colors ${answers[currentIdx] === opt ? 'bg-primary-600 border-primary-600 text-white' : 'border-dark-500 text-gray-400 group-hover:border-gray-400'}`}>
                      {opt}
                    </div>
                  </div>
                  <div className="text-gray-300 group-hover:text-gray-100 flex-1 leading-relaxed">
                    {currentQ.options[opt]}
                  </div>
                </label>
              ))}
            </div>
            
          </div>
          
          {/* Bottom Action Bar */}
          <div className="fixed sm:absolute bottom-0 w-full sm:w-auto sm:right-0 sm:left-0 sm:static bg-dark-800/90 backdrop-blur-md border-t border-dark-700 p-4 md:px-8 mt-auto flex justify-between gap-4 z-20">
            <button 
              className="px-6 py-2.5 rounded-lg font-medium bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white disabled:opacity-50 transition-colors"
              onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
              disabled={currentIdx === 0}
            >
              ← Sebelumnya
            </button>
            
            {currentIdx === questions.length - 1 ? (
              <button 
                className="px-8 py-2.5 rounded-lg font-bold bg-green-600 text-white hover:bg-green-500 shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-all"
                onClick={() => submitTest(false)}
              >
                Selesai & Kumpulkan
              </button>
            ) : (
              <button 
                className="px-8 py-2.5 rounded-lg font-bold bg-primary-600 text-white hover:bg-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                onClick={() => setCurrentIdx(p => Math.min(questions.length - 1, p + 1))}
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </main>

        {/* RIGHT: Navigation Sidebar */}
        <aside className="hidden md:flex flex-col w-80 bg-dark-800 border-l border-dark-700 shrink-0">
          <div className="p-4 border-b border-dark-700 font-semibold text-gray-300 flex justify-between items-center bg-dark-900/50">
            <span>Navigasi Soal</span>
            <span className="text-xs bg-dark-700 px-2 py-1 rounded text-gray-400 font-mono">{questions.length} Total</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => {
                let statusClass = 'bg-dark-700 text-gray-400 border-dark-600 hover:border-gray-500'; // Default un-answered
                if (answers[i]) {
                  statusClass = 'bg-green-600/20 text-green-400 border-green-600'; // Answered
                }
                if (doubtful[i]) {
                  statusClass = 'bg-amber-500/20 text-amber-500 border-amber-500'; // Doubtful overrides fully answered visually, but keeps answer state logically
                }
                if (currentIdx === i) {
                  statusClass += ' ring-2 ring-primary-500 ring-offset-2 ring-offset-dark-800 scale-105'; // Active state
                }

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-11 w-full rounded-md border font-medium text-sm flex items-center justify-center transition-all ${statusClass}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Legend */}
          <div className="p-4 border-t border-dark-700 bg-dark-900/50 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-3 h-3 rounded-sm bg-green-600/20 border border-green-600 block"></span> Sudah Dijawab
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-3 h-3 rounded-sm bg-dark-700 border border-dark-600 block"></span> Belum Dijawab
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-3 h-3 rounded-sm bg-amber-500/20 border border-amber-500 block"></span> Ragu-Ragu
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
