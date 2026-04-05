export const examConfig = [
  { id: "subtest1", title: "Verbal Logical Reasoning", questions: 25, minutes: 18, color: "bg-blue-600" },
  { id: "subtest2", title: "Number Sequence", questions: 25, minutes: 27, color: "bg-indigo-600" },
  { id: "subtest3", title: "Word Classification", questions: 25, minutes: 9, color: "bg-violet-600" },
  { id: "subtest4", title: "Diagram Reasoning", questions: 25, minutes: 19, color: "bg-purple-600" },
  { id: "subtest5", title: "Tes AKHLAK (SJT)", questions: 90, minutes: 30, color: "bg-fuchsia-600" },
  { id: "subtest6", title: "Tes Wawasan Kebangsaan (TWK)", questions: 10, minutes: 10, color: "bg-rose-600" },
  { id: "subtest7", title: "Bahasa Inggris", questions: 100, minutes: 90, color: "bg-teal-600" },
  { id: "subtest8", title: "Learning Agility", questions: 50, minutes: 30, color: "bg-cyan-600" }
];

export const getQuestions = (subtestId) => {
  switch (subtestId) {
    case 'subtest1': return require('../data/subtest1.js');
    case 'subtest2': return require('../data/subtest2.js');
    case 'subtest3': return require('../data/subtest3.js');
    case 'subtest4': return require('../data/subtest4.js');
    case 'subtest5': return require('../data/subtest5.js');
    case 'subtest6': return require('../data/subtest6.js');
    case 'subtest7': return require('../data/subtest7.js');
    case 'subtest8': return require('../data/subtest8.js');
    default: return [];
  }
};
