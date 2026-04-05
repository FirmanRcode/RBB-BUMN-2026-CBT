'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { examConfig, getQuestions } from '@/lib/examConfig';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function ResultScreen() {
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('summary'); // 'summary' or subtestId
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'skipped' | 'wrong_skipped'>('all');

  useEffect(() => {
    const data = sessionStorage.getItem('examResults');
    if (!data) {
      router.push('/');
      return;
    }
    
    const parsedData = JSON.parse(data);
    
    // Process results to include correct/wrong counts
    const processedResults = parsedData.map((res: any) => {
      const configInfo = examConfig.find(e => e.id === res.subtestId);
      const qsData = getQuestions(res.subtestId);
      
      let correct = 0;
      let wrong = 0;
      let skipped = 0;
      
      const detailedAnswers = qsData.map((q: any, i: number) => {
        const userAnswer = res.answers[i];
        if (!userAnswer) {
          skipped++;
          return { ...q, userAnswer: null, status: 'skipped' };
        }
        
        if (userAnswer === q.answer) {
          correct++;
          return { ...q, userAnswer, status: 'correct' };
        } else {
          wrong++;
          return { ...q, userAnswer, status: 'wrong' };
        }
      });
      
      // Calculate score based on weight. Here we assume 1 correct = 100/total
      // If we had custom weights, it would go here.
      const score = Math.round((correct / res.totalQuestions) * 100);
      
      return {
        ...res,
        title: configInfo?.title || res.subtestId,
        correct,
        wrong,
        skipped,
        score,
        detailedAnswers
      };
    });
    
    setResults(processedResults);
  }, [router]);

  if (!results.length) return <div className="min-h-screen bg-dark-900 flex items-center justify-center text-white">Loading Results...</div>;

  const totalQuestions = results.reduce((acc, curr) => acc + curr.totalQuestions, 0);
  const totalCorrect = results.reduce((acc, curr) => acc + curr.correct, 0);
  const averageScore = Math.round((totalCorrect / totalQuestions) * 100);

  // BUMN Passing Grade Logic (Contoh simulasi: tiap sub-tes minimal 65)
  const isLulus = results.length > 0 && results.every(r => r.score >= 65);

  const radarData = results.map(r => {
    let shortName = r.title.replace(/Sub-tes \d+: /i, '').split(' ')[0]; // Shorten to first word for chart
    if (shortName === 'Tes') shortName = 'AKHLAK';
    if (shortName === 'Wawasan') shortName = 'TWK';
    return {
      subject: shortName,
      skor: r.score,
      fullMark: 100,
    };
  });

  const renderSummary = () => (
    <div className="animate-fade-in text-gray-200">
      
      {/* Action Buttons (Print / Save PDF) */}
      <div className="flex justify-end mb-4 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 border border-dark-600 px-4 py-2 rounded-lg font-medium transition-colors text-sm text-gray-300 hover:text-white"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Export PDF / Cetak Rapor
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Big Score Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-primary-900/40 to-indigo-900/40 border border-primary-500/30 rounded-2xl p-8 text-center relative overflow-hidden backdrop-blur-sm print:break-inside-avoid">
          <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-primary-500/10 rounded-full blur-[80px] -rotate-45"></div>
          
          <div className="absolute top-4 right-4">
            <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border ${isLulus ? 'border-green-500 text-green-400 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-red-500 text-red-400 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.3)]'}`}>
              {isLulus ? 'MEMENUHI PASSING GRADE' : 'TIDAK LULUS'}
            </span>
          </div>

          <h2 className="text-xl text-primary-200 font-medium tracking-wide mb-2 mt-4">SKOR AKUMULASI KESELURUHAN</h2>
          <div className="flex justify-center items-end gap-2 mb-4">
            <span className="text-7xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{averageScore}</span>
            <span className="text-2xl text-primary-300 font-medium pb-2">/100</span>
          </div>
          
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center bg-dark-900/50 px-6 py-3 rounded-xl border border-dark-700">
              <div className="text-green-400 font-bold text-2xl">{totalCorrect}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Benar</div>
            </div>
            <div className="text-center bg-dark-900/50 px-6 py-3 rounded-xl border border-dark-700">
              <div className="text-red-400 font-bold text-2xl">{results.reduce((a,c) => a+c.wrong, 0)}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Salah</div>
            </div>
            <div className="text-center bg-dark-900/50 px-6 py-3 rounded-xl border border-dark-700">
              <div className="text-gray-400 font-bold text-2xl">{results.reduce((a,c) => a+c.skipped, 0)}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Kosong</div>
            </div>
          </div>
        </div>

        {/* Radar Chart Card */}
        <div className="bg-dark-800/60 border border-dark-700 rounded-2xl p-4 flex flex-col items-center justify-center print:hidden">
          <h3 className="font-bold text-primary-300 mb-2">Analisis Kemampuan (Radar)</h3>
          <div className="w-full h-64 -mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#4B5563', fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }} />
                <Radar name="Skor" dataKey="skor" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Breakdown per Subtest */}
      <div className="grid gap-4 print:break-inside-avoid">
        <h3 className="text-lg font-bold text-white mb-2 px-2 uppercase tracking-widest border-b border-dark-700 pb-2">Rincian Performa Sub-Tes</h3>
        {results.map((res, i) => (
          <div key={i} className="bg-dark-800/60 border border-dark-700 rounded-xl p-5 hover:border-dark-500 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-white flex items-center gap-3">
                {res.title}
                {res.score >= 65 ? 
                  <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full uppercase">Lulus</span> : 
                  <span className="text-[10px] bg-red-500/20 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full uppercase">Gagal</span>
                }
              </h4>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded">✓ {res.correct} Benar</span>
                <span className="text-red-400 font-medium bg-red-500/10 px-2 py-0.5 rounded">✗ {res.wrong} Salah</span>
                <span className="text-gray-500 font-medium bg-gray-500/10 px-2 py-0.5 rounded">○ {res.skipped} Kosong</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-dark-700 pt-4 md:pt-0 md:pl-6 print:border-none">
              <div className="text-right w-16">
                <div className={`text-2xl font-bold ${res.score >= 65 ? 'text-green-400' : 'text-red-400'}`}>{res.score}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Score</div>
              </div>
              <button 
                onClick={() => setActiveTab(res.subtestId)}
                className="print:hidden ml-auto md:ml-4 px-4 py-2 bg-dark-700 hover:bg-primary-600 active:scale-95 hover:text-white rounded-lg text-sm font-bold transition-all text-primary-300 border border-dark-600 hover:border-primary-500"
              >
                Lihat Pembahasan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetails = (subtestId: string) => {
    const res = results.find(r => r.subtestId === subtestId);
    if (!res) return null;

    let displayAnswers = res.detailedAnswers;
    if (filterMode === 'wrong') {
      displayAnswers = res.detailedAnswers.filter((q: any) => q.status === 'wrong');
    } else if (filterMode === 'skipped') {
      displayAnswers = res.detailedAnswers.filter((q: any) => q.status === 'skipped');
    } else if (filterMode === 'wrong_skipped') {
      displayAnswers = res.detailedAnswers.filter((q: any) => q.status === 'wrong' || q.status === 'skipped');
    }

    return (
      <div className="animate-fade-in space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-dark-800 p-4 rounded-xl border border-dark-700 sticky top-0 z-10 shadow-lg">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => { setActiveTab('summary'); setFilterMode('all'); }}
              className="flex items-center justify-center p-2 rounded-lg bg-dark-700 text-gray-300 hover:text-white hover:bg-dark-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <div className="h-8 w-px bg-dark-700 hidden md:block"></div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white leading-tight">{res.title}</h2>
              <p className="text-xs text-primary-400 font-mono">Mode Pembahasan</p>
            </div>
          </div>
          
          {/* Review Filters */}
          <div className="flex overflow-auto gap-2 text-xs md:text-sm print:hidden pb-1 md:pb-0">
            <button 
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${filterMode === 'all' ? 'bg-primary-600 border-primary-500 text-white' : 'bg-dark-900 border-dark-600 text-gray-400 hover:bg-dark-700'}`}
            >
              Semua Soal
            </button>
            <button 
              onClick={() => setFilterMode('wrong_skipped')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${filterMode === 'wrong_skipped' ? 'bg-amber-600 border-amber-500 text-white' : 'bg-dark-900 border-dark-600 text-gray-400 hover:bg-dark-700'}`}
            >
              Salah & Kosong
            </button>
            <button 
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${filterMode === 'wrong' ? 'bg-red-600/80 border-red-500 text-white' : 'bg-dark-900 border-dark-600 text-gray-400 hover:bg-dark-700'}`}
            >
              Hanya Salah
            </button>
          </div>
        </div>

        {displayAnswers.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
            <p className="text-xl font-bold text-gray-300">Hebat!</p>
            <p>Tidak ada soal yang salah dalam kategori ini.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {displayAnswers.map((q: any) => (
              <div key={q.id} className={`bg-dark-800 rounded-xl p-6 md:p-8 border-l-4 shadow-sm print:break-inside-avoid ${
                q.status === 'correct' ? 'border-l-green-500' : 
                q.status === 'wrong' ? 'border-l-red-500' : 'border-l-gray-500'
              }`}>
                {/* Question */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="shrink-0 bg-dark-700 text-gray-300 px-3 py-1 rounded-md font-mono text-sm border border-dark-600 shadow-inner">Soal {q.id}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    q.status === 'correct' ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 
                    q.status === 'wrong' ? 'bg-red-500/20 text-red-400 border border-red-500/20' : 'bg-gray-500/20 text-gray-400 border border-gray-500/20'
                  }`}>
                    {q.status === 'correct' ? 'BENAR' : q.status === 'wrong' ? 'SALAH' : 'KOSONG'}
                  </span>
                </div>
                
                <div className="text-lg text-gray-100 whitespace-pre-wrap mb-6 font-medium leading-relaxed">
                  {q.question}
                </div>

                {/* Options display - highlights user's and correct answer */}
                <div className="space-y-2 mb-8">
                  {['A', 'B', 'C', 'D', 'E'].map(opt => {
                    if (!q.options[opt]) return null;
                    
                    let optStyle = "border-dark-700 text-gray-400";
                    let bgStyle = "bg-dark-900";
                    let icon = null;
                    
                    if (opt === q.answer) {
                      optStyle = "border-green-500 text-white font-bold ring-1 ring-green-500/50";
                      bgStyle = "bg-green-500/10";
                      icon = <span className="text-green-500 bg-green-500/20 rounded-full w-5 h-5 flex items-center justify-center shrink-0">✓</span>;
                    } else if (opt === q.userAnswer) { 
                      optStyle = "border-red-500/50 text-red-300 line-through opacity-80";
                      bgStyle = "bg-red-500/10";
                      icon = <span className="text-red-500 bg-red-500/20 rounded-full w-5 h-5 flex items-center justify-center shrink-0">✗</span>;
                    }

                    return (
                      <div key={opt} className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${optStyle} ${bgStyle}`}>
                        <div className="shrink-0 w-6 font-mono text-sm mt-0.5">{opt}.</div>
                        <div className="flex-1">{q.options[opt]}</div>
                        {icon && <div>{icon}</div>}
                      </div>
                    )
                  })}
                </div>

                {/* Explanations & TRICKS */}
                <div className="bg-dark-900 rounded-xl p-5 border border-dark-700 space-y-4 shadow-inner">
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Pembahasan / Kunci
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-dark-600 pl-4 ml-1">{q.explanation}</p>
                  </div>
                  
                  {q.trick && (
                    <div className="mt-4 bg-primary-900/10 p-5 rounded-lg border border-primary-500/30 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                      <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                        Quick Hack / Trick Instan
                      </h4>
                      <p className="text-primary-200/90 font-medium text-sm md:text-base leading-relaxed tracking-wide italic">"{q.trick}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark-900 print:bg-white p-4 md:p-8 overflow-y-auto print:text-black">
      <div className="max-w-4xl mx-auto pb-20 print:max-w-none print:pb-0">
        
        {/* Header Title */}
        <div className="mb-10 text-center animate-slide-in">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-bold tracking-widest mb-4 print:hidden">
            SUMMARY REPORT
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 mb-2 print:text-black print:from-black print:to-black">
            HASIL TRYOUT CBT RBB BUMN 2026
          </h1>
          <p className="text-gray-400 print:text-gray-800">Review performa Anda secara mendalam dan pelajari *trick* instan untuk tes BUMN asli.</p>
        </div>

        {activeTab === 'summary' ? renderSummary() : renderDetails(activeTab)}

        {/* Global Action Bottom Print Hidden */}
        {activeTab === 'summary' && (
          <div className="mt-12 text-center print:hidden border-t border-dark-700 pt-8">
            <button 
              onClick={() => {
                const isConfirmed = confirm("Data hasil ujian akan dihapus dari memori layar ini. Lanjutkan?");
                if(isConfirmed) {
                  sessionStorage.removeItem('examResults');
                  router.push('/');
                }
              }}
              className="px-8 py-4 bg-dark-800 hover:bg-red-900/30 hover:border-red-500/50 text-gray-400 hover:text-red-400 font-bold rounded-xl border border-dark-600 transition-all uppercase tracking-widest text-sm shadow-sm"
            >
              Hapus Data Sesi & Kembali Studi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
