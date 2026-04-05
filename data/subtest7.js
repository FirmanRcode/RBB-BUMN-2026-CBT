// Sub-Tes 7: Bahasa Inggris - 100 soal (90 menit) -> Basic reading & structure dunia kerja.
// Saat ini menggunakan 10 soal contoh
const subtest7 = [
  {
    id: 1,
    question: "The director required that all staff members _______ their evaluation forms by Friday.",
    options: {
      A: "submit",
      B: "to submit",
      C: "submits",
      D: "submitting",
      E: "submitted"
    },
    answer: "A",
    explanation: "This is the subjunctive mood. Verbs like require, suggest, demand, insist take a bare infinitive (base form of the verb) in the 'that' clause regardless of the subject.",
    trick: "Look for verbs expressing urgency/importance (demand, require, ask). The following verb is ALWAYS V1 without 'to' or '-s' (e.g., require that he DO, not does)."
  },
  {
    id: 2,
    question: "We apologize for the inconvenience, but the elevator is currently _______ repair.",
    options: {
      A: "on",
      B: "at",
      C: "under",
      D: "in",
      E: "with"
    },
    answer: "C",
    explanation: "The correct preposition to indicate that something is actively being fixed or worked on is 'under' (under repair, under construction).",
    trick: "Collocation: memorize 'under repair', 'under construction', 'under consideration'."
  },
  {
    id: 3,
    question: "If the marketing team had launched the campaign earlier, we _______ higher sales this quarter.",
    options: {
      A: "will secure",
      B: "secured",
      C: "had secured",
      D: "would secure",
      E: "would have secured"
    },
    answer: "E",
    explanation: "Conditional Sentence Type 3 (past unreal). Pattern: If + Past Perfect (had launched), Subject + would/could/might + have + Past Participle (would have secured).",
    trick: "If you see 'had V3' in the if-clause, find 'would have V3' in the main clause."
  },
  {
    id: 4,
    question: "The new software is considerably more efficient _______ the previous version we used.",
    options: {
      A: "than",
      B: "then",
      C: "from",
      D: "as",
      E: "to"
    },
    answer: "A",
    explanation: "Comparative adjectives (more efficient) are followed by 'than'. 'Then' is for time.",
    trick: "More/less/-er + than. Different + from. Similar + to. As + adjective + as."
  },
  {
    id: 5,
    question: "Please ensure that the confidential documents are kept _______ a secure location.",
    options: {
      A: "in",
      B: "on",
      C: "at",
      D: "to",
      E: "by"
    },
    answer: "A",
    explanation: "We keep things 'in a location' when referring to a container or enclosed space.",
    trick: "'In a location/drawer/file', 'On a desk', 'At the office'."
  },
  {
    id: 6,
    question: "The CEO was very impressed _______ the final presentation delivered by the interns.",
    options: {
      A: "of",
      B: "by",
      C: "with",
      D: "about",
      E: "for"
    },
    answer: "C",
    explanation: "The correct collocation is 'impressed with' or 'impressed by'. Between the choices, 'with' is commonly used when referring to things/performances.",
    trick: "Impressed + with/by. (Both are correct, but 'with' is very common for objects/actions)."
  },
  {
    id: 7,
    question: "Neither the manager nor the employees _______ satisfied with the new overtime policy.",
    options: {
      A: "is",
      B: "are",
      C: "was",
      D: "has",
      E: "have"
    },
    answer: "B",
    explanation: "In 'neither... nor...' structures, the verb agrees with the subject closest to it. Here, 'employees' is plural, so we use 'are' (or 'were', but 'are' fits the present context).",
    trick: "Neither A nor B -> Verb follows B. Either A or B -> Verb follows B."
  },
  {
    id: 8,
    question: "The company's revenue has grown steadily _______ its establishment in 2015.",
    options: {
      A: "since",
      B: "for",
      C: "during",
      D: "from",
      E: "in"
    },
    answer: "A",
    explanation: "Present perfect continuous/simple ('has grown') with a specific starting point in time ('establishment in 2015') requires the preposition 'since'.",
    trick: "Since + starting point (2015, yesterday). For + duration (10 years, 3 months)."
  },
  {
    id: 9,
    question: "Due to the economic downturn, several branches will be forced to _______ some staff members.",
    options: {
      A: "lay down",
      B: "lay over",
      C: "lay out",
      D: "lay off",
      E: "lay aside"
    },
    answer: "D",
    explanation: "Phrasal verb meaning to terminate employment, usually for economic reasons, is 'lay off'.",
    trick: "Lay off = fire/make redundant (business English essential). Lay out = arrange."
  },
  {
    id: 10,
    question: "_______ the heavy rain, the outdoor team building event proceeded as scheduled.",
    options: {
      A: "Because",
      B: "Although",
      C: "Despite",
      D: "Even though",
      E: "However"
    },
    answer: "C",
    explanation: "A preposition showing contrast is needed before a noun phrase ('the heavy rain'). 'Despite' or 'In spite of' is correct. 'Although/Even though' require a full clause (S+V).",
    trick: "Despite + Noun Phrase. Although + S + V. Don't use 'Despite of'."
  },
  {
    id: 11,
    question: "The board of directors _______ to discuss the merger proposal tomorrow morning.",
    options: {
      A: "are meeting",
      B: "is meeting",
      C: "has met",
      D: "meets",
      E: "meeting"
    },
    answer: "B",
    explanation: "Collective nouns like 'board', 'team', or 'committee' take a singular verb when acting as a single unit.",
    trick: "Board, Committee, Team, Staff = Treat as Singular Unit -> uses 'is' or 'has'."
  },
  {
    id: 12,
    question: "We need someone who is proficient _______ Excel and can handle large databases.",
    options: {
      A: "on",
      B: "at",
      C: "in",
      D: "with",
      E: "for"
    },
    answer: "C",
    explanation: "The correct preposition to follow 'proficient' is 'in'.",
    trick: "Collocation: Proficient IN, Good AT, Capable OF."
  },
  {
    id: 13,
    question: "If I _______ you, I would negotiate the salary before signing the contract.",
    options: {
      A: "am",
      B: "was",
      C: "were",
      D: "had been",
      E: "would be"
    },
    answer: "C",
    explanation: "Subjunctive mood for unreality/advice (Second Conditional). We always use 'were' for all subjects (I, he, she, it).",
    trick: "If I WERE you... never use 'was' in a conditional 'If I...' sentence expressing advice/imagination."
  },
  {
    id: 14,
    question: "The manager divided the project tasks _______ the five members of the team.",
    options: {
      A: "between",
      B: "among",
      C: "into",
      D: "with",
      E: "for"
    },
    answer: "B",
    explanation: "'Among' is used when dividing something for three or more people/things. 'Between' is strictly for two.",
    trick: "2 people = Between. 3 or more people = Among."
  },
  {
    id: 15,
    question: "_______ having a strict deadline, the team managed to submit the report flawlessly.",
    options: {
      A: "Although",
      B: "In spite of",
      C: "Because of",
      D: "However",
      E: "Furthermore"
    },
    answer: "B",
    explanation: "'In spite of' is followed by a gerund (having) or noun phrase. 'Although' needs a subject and verb.",
    trick: "In spite of / Despite + V-ing/Noun. Although / Even though + S + V."
  },
  {
    id: 16,
    question: "The company announced a significant increase in quarterly profits, _______ boosted its stock price instantly.",
    options: {
      A: "that",
      B: "which",
      C: "what",
      D: "who",
      E: "whose"
    },
    answer: "B",
    explanation: "'Which' is used as a relative pronoun to refer to the entire preceding clause (the announcement of profit increase).",
    trick: "Comma + which refers to the whole previous sentence. 'That' cannot be used after a comma in non-defining clauses."
  },
  {
    id: 17,
    question: "Please do not hesitate to contact customer support should you _______ any further assistance.",
    options: {
      A: "require",
      B: "requires",
      C: "required",
      D: "requiring",
      E: "to require"
    },
    answer: "A",
    explanation: "'Should you require' is an inversion of 'If you should require' (Conditional Type 1). The verb must be in base form.",
    trick: "Should + S + V1 (Base form). It's a formal way of saying 'If you need'."
  },
  {
    id: 18,
    question: "The HR department has implemented a new policy _______ aims to improve employee well-being.",
    options: {
      A: "who",
      B: "whom",
      C: "whose",
      D: "that",
      E: "where"
    },
    answer: "D",
    explanation: "'That' is used as a relative pronoun for things (a new policy) acting as the subject of the clause.",
    trick: "Policy (Thing) -> That / Which. Person -> Who / Whom."
  },
  {
    id: 19,
    question: "Seldom _______ such an innovative approach to marketing in this industry.",
    options: {
      A: "we have seen",
      B: "have we seen",
      C: "we seeing",
      D: "we see",
      E: "we saw"
    },
    answer: "B",
    explanation: "When a sentence starts with a negative adverb (Seldom, Rarely, Never), the subject and auxiliary verb are inverted.",
    trick: "Negative opening word (Hardly, Seldom, Never) -> Verb comes BEFORE Subject (Aux + S + V)."
  },
  {
    id: 20,
    question: "The shipment was delayed _______ a major strike at the port.",
    options: {
      A: "due to",
      B: "because",
      C: "since",
      D: "as a result",
      E: "therefore"
    },
    answer: "A",
    explanation: "'Due to' is a preposition meaning 'caused by' and is followed by a noun phrase ('a major strike').",
    trick: "Due to + Noun. Because + S + V. 'Because of' is the same as 'Due to'."
  },
  {
    id: 21,
    question: "Not only _______ the quarterly targets, but they also exceeded annual expectations.",
    options: {
      A: "did they meet",
      B: "they met",
      C: "they do meet",
      D: "met they",
      E: "they have met"
    },
    answer: "A",
    explanation: "Inversion rule again: 'Not only' at the beginning of a sentence requires auxiliary inversion (did + subject + V1).",
    trick: "'Not only' at the start -> Auxiliary (do/does/did) + S + Verb."
  },
  {
    id: 22,
    question: "Mr. Harrison, _______ resignation was announced yesterday, has been with the company for 20 years.",
    options: {
      A: "who",
      B: "whom",
      C: "whose",
      D: "which",
      E: "that"
    },
    answer: "C",
    explanation: "'Whose' indicates possession (the resignation belongs to Mr. Harrison).",
    trick: "Possession check: If you can replace it with 'His/Her', use WHOSE. (His resignation)."
  },
  {
    id: 23,
    question: "By the time the investors arrive next Monday, we _______ the financial audit.",
    options: {
      A: "will complete",
      B: "complete",
      C: "are completing",
      D: "will have completed",
      E: "completed"
    },
    answer: "D",
    explanation: "'By the time' + future event requires Future Perfect (will have + V3) to show an action completed before that future time.",
    trick: "By the time / By next [Month/Year] -> use 'Will have V3'."
  },
  {
    id: 24,
    question: "The marketing director objected _______ the new advertising strategy proposed by the agency.",
    options: {
      A: "with",
      B: "at",
      C: "to",
      D: "for",
      E: "on"
    },
    answer: "C",
    explanation: "The verb 'object' is always followed by the preposition 'to' (object to something).",
    trick: "Collocation: Object TO, Opposed TO, Accustomed TO."
  },
  {
    id: 25,
    question: "Employees who work overtime are entitled _______ extra compensation.",
    options: {
      A: "for",
      B: "with",
      C: "to",
      D: "on",
      E: "at"
    },
    answer: "C",
    explanation: "The phrase 'entitled to' means having a rightful claim to something.",
    trick: "Collocation: Always 'Entitled TO' (berhak atas)."
  },
  {
    id: 26,
    question: "Read the memo: 'All staff must complete compliance training. Failure to do so will result in temporary suspension.' What is the main point?",
    options: {
      A: "Compliance training is optional.",
      B: "Staff will be fired if they miss the training.",
      C: "Training completion is mandatory to avoid disciplinary action.",
      D: "Suspension is a permanent punishment.",
      E: "Only new staff need the training."
    },
    answer: "C",
    explanation: "The memo states training is a 'must' (mandatory) and missing it leads to 'temporary suspension' (disciplinary action).",
    trick: "Reading comprehension: Match synonyms. 'Must' = mandatory. 'Result in suspension' = disciplinary action."
  },
  {
    id: 27,
    question: "We are looking forward _______ you at the annual general meeting next month.",
    options: {
      A: "to see",
      B: "seeing",
      C: "see",
      D: "to seeing",
      E: "saw"
    },
    answer: "D",
    explanation: "The phrase 'look forward to' is a prepositional phrase, so it must be followed by a noun or a gerund (V-ing).",
    trick: "'Look forward to' + V-ing. This is the most common trap in English tests!"
  },
  {
    id: 28,
    question: "_______ the recent fluctuations in the market, the company's core operations remain stable.",
    options: {
      A: "Regardless",
      B: "Notwithstanding",
      C: "Although",
      D: "Even if",
      E: "Furthermore"
    },
    answer: "B",
    explanation: "'Notwithstanding' functions as a preposition meaning 'in spite of'. 'Regardless' needs 'of'.",
    trick: "Notwithstanding = Despite = In spite of. If 'Regardless' is an option, it needs 'of' to be correct here."
  },
  {
    id: 29,
    question: "The supervisor recommended that the outdated software _______ immediately.",
    options: {
      A: "is replaced",
      B: "be replaced",
      C: "was replaced",
      D: "replaces",
      E: "to be replaced"
    },
    answer: "B",
    explanation: "Passive subjunctive: 'recommend that + subject + be + V3'. We use 'be' instead of is/are/am.",
    trick: "Suggest/Recommend that something BE DONE. Never 'is done' or 'are done'."
  },
  {
    id: 30,
    question: "She is highly regarded by her peers, _______ makes her an excellent candidate for the promotion.",
    options: {
      A: "who",
      B: "whom",
      C: "which",
      D: "that",
      E: "what"
    },
    answer: "C",
    explanation: "'which' refers to the entire situation presented in the main clause (the fact that she is highly regarded).",
    trick: "If referring back to a WHOLE situation/fact, use ', which'. Never use 'that' after a comma."
  },
  {
    id: 31,
    question: "X: How do you usually go to work?\nY: _______",
    options: {
      A: "Yes, thank you.",
      B: "I am fine, thanks.",
      C: "Yes, I do.",
      D: "By bus.",
      E: "On the street."
    },
    answer: "D",
    explanation: "The question 'How do you go to work?' asks about the method of transportation. 'By bus' is the only logical answer.",
    trick: "How (transportation) -> By [vehicle] or On foot."
  },
  {
    id: 32,
    question: "A: Would you mind passing me the stapler?\nB: _______",
    options: {
      A: "Yes, I would.",
      B: "No, not at all. Here you go.",
      C: "I don't mind it.",
      D: "Yes, please do.",
      E: "No, thanks."
    },
    answer: "B",
    explanation: "'Would you mind...' is a polite request. Answering 'No' means 'I do not mind' (I am happy to do it).",
    trick: "Would you mind...? -> Answer with 'No, not at all' to agree to the request."
  },
  {
    id: 33,
    question: "Manager: Have you finished the financial report yet?\nStaff: _______",
    options: {
      A: "I finish it yesterday.",
      B: "No, I didn't.",
      C: "Yes, I have already submitted it to your desk.",
      D: "Yes, I will finish it tomorrow.",
      E: "No, I have finished it."
    },
    answer: "C",
    explanation: "Present perfect 'Have you finished' matches with 'Yes, I have already...'.",
    trick: "Have you...? -> Yes, I have / No, I haven't."
  },
  {
    id: 34,
    question: "Client: Thank you for resolving the issue so quickly.\nAgent: _______",
    options: {
      A: "Never mind.",
      B: "Don't mention it. Happy to help.",
      C: "That is your problem.",
      D: "Yes, it was quick.",
      E: "I couldn't agree more."
    },
    answer: "B",
    explanation: "A polite professional response to 'Thank you' in customer service.",
    trick: "'Thank you' -> 'You're welcome', 'Don't mention it', 'My pleasure'."
  },
  {
    id: 35,
    question: "A: Are you available for a meeting at 3 PM?\nB: _______",
    options: {
      A: "I'm afraid I have another appointment then.",
      B: "Yes, I am meeting you.",
      C: "No, I am available.",
      D: "Of course, I cannot.",
      E: "I will be there yesterday."
    },
    answer: "A",
    explanation: "Polite refusal to an invitation/meeting request.",
    trick: "'I'm afraid...' is a polite way to say 'Unfortunately, no' in business English."
  },
  {
    id: 36,
    question: "Interviewer: Why did you leave your previous job?\nCandidate: _______",
    options: {
      A: "My boss was terrible.",
      B: "I hated the work hours.",
      C: "I am looking for new challenges and growth opportunities.",
      D: "Because I want your job.",
      E: "I was fired for coming late."
    },
    answer: "C",
    explanation: "In an interview, always frame reasons for leaving positively.",
    trick: "Job interview responses must always highlight 'growth', 'challenge', or 'opportunity'."
  },
  {
    id: 37,
    question: "Caller: Can I speak to Mr. Davis, please?\nReceptionist: _______",
    options: {
      A: "No, he is gone.",
      B: "Who are you?",
      C: "May I ask who is calling, please?",
      D: "Wait.",
      E: "He doesn't want to talk."
    },
    answer: "C",
    explanation: "Standard polite telephone etiquette to ask for the caller's identity.",
    trick: "'May I ask who is calling?' is the most polite phone standard."
  },
  {
    id: 38,
    question: "A: What do you think about the new office layout?\nB: _______",
    options: {
      A: "I think it's much more spacious and collaborative.",
      B: "I am thinking of going home.",
      C: "Yes, it is a layout.",
      D: "No, I don't think so.",
      E: "It is located downtown."
    },
    answer: "A",
    explanation: "Responding to a request for an opinion about a thing (the layout).",
    trick: "What do you think about [Noun]? -> Answer with an opinion adjective (spacious/good/bad)."
  },
  {
    id: 39,
    question: "Colleague A: I can't figure out how to use this new printer.\nColleague B: _______",
    options: {
      A: "That's too bad.",
      B: "Let me show you how it works.",
      C: "You must buy a new one.",
      D: "I don't know either, good luck.",
      E: "It is printing."
    },
    answer: "B",
    explanation: "Offering help when someone states a problem.",
    trick: "Problem statement -> Offer assistance ('Let me...', 'Can I help...')."
  },
  {
    id: 40,
    question: "A: Did you attach the invoice to the email?\nB: _______",
    options: {
      A: "Yes, I send it tomorrow.",
      B: "Oh, I completely forgot! I'll resend it right away.",
      C: "No, I attach it.",
      D: "Yes, it is an email.",
      E: "I am attaching the invoice yesterday."
    },
    answer: "B",
    explanation: "Acknowledging a mistake and offering an immediate solution.",
    trick: "Forgot something? -> Apologize/Acknowledge + 'I will do it right now/right away'."
  },
  {
    id: 41,
    question: "The marketing team has ______ a new strategy to increase sales this quarter.",
    options: {
      A: "come down with",
      B: "come up with",
      C: "come out of",
      D: "come into",
      E: "come across"
    },
    answer: "B",
    explanation: "Phrasal verb 'come up with' means to think of an idea or plan.",
    trick: "Idea/Plan/Strategy -> 'Come up with'."
  },
  {
    id: 42,
    question: "The CEO requested that the annual report ______ finished by next Monday.",
    options: {
      A: "is",
      B: "was",
      C: "be",
      D: "are",
      E: "to be"
    },
    answer: "C",
    explanation: "Subjunctive mood after 'request that'. The verb must be in absolute base form (be), not is/am/are.",
    trick: "Request/Demand that + Subject + BE (passive) or V1 (active)."
  },
  {
    id: 43,
    question: "I am completely exhausted. I ______ on this project for ten hours straight.",
    options: {
      A: "have been working",
      B: "am working",
      C: "was working",
      D: "had worked",
      E: "work"
    },
    answer: "A",
    explanation: "Present perfect continuous is used for an action that started in the past, continues to the present, and emphasizes duration.",
    trick: "'For [duration] straight' + present result ('am exhausted') -> Have been V-ing."
  },
  {
    id: 44,
    question: "If the company _____ a better benefits package, they wouldn't have high employee turnover now.",
    options: {
      A: "offers",
      B: "offered",
      C: "had offered",
      D: "has offered",
      E: "would offer"
    },
    answer: "B",
    explanation: "Mixed conditional or Type 2 conditional. 'wouldn't have [noun]' indicates present unreal consequence, so the condition should be past simple (offered).",
    trick: "If + Subject + V2, Subject + would + V1 (or noun)."
  },
  {
    id: 45,
    question: "The documents ______ you requested are on your desk.",
    options: {
      A: "what",
      B: "who",
      C: "whom",
      D: "which",
      E: "whose"
    },
    answer: "D",
    explanation: "Relative pronoun for things is 'which' or 'that'.",
    trick: "Noun (Thing) -> Which / That."
  },
  {
    id: 46,
    question: "Nobody in the office knows how to fix the server, ______?",
    options: {
      A: "do they",
      B: "don't they",
      C: "does he",
      D: "isn't it",
      E: "do we"
    },
    answer: "A",
    explanation: "Question tag: 'Nobody' is a negative pronoun, so the tag must be positive. The pronoun for 'nobody' in question tags is 'they'.",
    trick: "Nobody/Everyone/Somebody -> use 'they'. Since 'Nobody' is negative, tag is positive 'do they'."
  },
  {
    id: 47,
    question: "The client was so difficult to please ______ we almost lost the contract.",
    options: {
      A: "than",
      B: "that",
      C: "therefore",
      D: "because",
      E: "so"
    },
    answer: "B",
    explanation: "Correlative conjunction pair: 'so [adjective] that [clause]'.",
    trick: "So + Adjective + THAT + Clause = Sangat [Adjektif] sehingga..."
  },
  {
    id: 48,
    question: "You had better ______ the contract carefully before signing it.",
    options: {
      A: "to read",
      B: "reading",
      C: "read",
      D: "reads",
      E: "will read"
    },
    answer: "C",
    explanation: "'Had better' is a modal idiom and is always followed by a bare infinitive (Verb 1).",
    trick: "Had better + V1 (Tanpa to, tanpa -s, tanpa -ing)."
  },
  {
    id: 49,
    question: "The seminar ______ by Dr. Smith was highly informative.",
    options: {
      A: "conducts",
      B: "conducted",
      C: "conducting",
      D: "was conducted",
      E: "which conduct"
    },
    answer: "B",
    explanation: "Reduced relative clause (passive). 'The seminar (which was) conducted by...'",
    trick: "Noun + V3 + by... = Participle phrase pasif (yang di...)."
  },
  {
    id: 50,
    question: "We should avoid ______ sensitive corporate information on public Wi-Fi networks.",
    options: {
      A: "access",
      B: "to access",
      C: "accessing",
      D: "accessed",
      E: "from accessing"
    },
    answer: "C",
    explanation: "The verb 'avoid' is always followed by a gerund (verb-ing).",
    trick: "Verbs followed by Gerund: avoid, enjoy, mind, deny, postpone, finish."
  },
  {
    id: 51,
    question: "X: Excuse me, could you tell me where the boardroom is?\nY: _______",
    options: {
      A: "Yes, it is a boardroom.",
      B: "Certainly. Take the elevator to the 3rd floor, it's the first door on the right.",
      C: "I don't need a boardroom.",
      D: "No, you couldn't.",
      E: "The meeting starts at 9."
    },
    answer: "B",
    explanation: "Giving clear directions in response to a 'where' question.",
    trick: "Where is...? -> Answer with direction/location."
  },
  {
    id: 52,
    question: "Colleague: Let's discuss the project over lunch.\nYou: _______",
    options: {
      A: "That sounds like a great idea.",
      B: "I am eating lunch.",
      C: "No, let me.",
      D: "Yes, I like project.",
      E: "You should discuss it."
    },
    answer: "A",
    explanation: "Accepting a suggestion politely.",
    trick: "Let's... / How about... -> That sounds great / Good idea."
  },
  {
    id: 53,
    question: "Boss: Have you managed to fix the software bug?\nIT Staff: _______",
    options: {
      A: "No, the bug is a completely insect.",
      B: "Not yet, but I am currently running some tests to isolate the issue.",
      C: "I manage the software.",
      D: "Yes, I manages it.",
      E: "I don't like bugs."
    },
    answer: "B",
    explanation: "Providing a status update professionally indicating it's still in progress.",
    trick: "Ask for progress -> Give status + current action."
  },
  {
    id: 54,
    question: "A: Do you happen to know if there's a dress code for the networking event?\nB: _______",
    options: {
      A: "I like wearing dresses.",
      B: "Yes, it's business casual.",
      C: "No, I don't code.",
      D: "The event is networking.",
      E: "We are dressed."
    },
    answer: "B",
    explanation: "Answering a specific inquiry regarding guidelines/dress code.",
    trick: "Dress code -> Business formal, Business casual, Smart casual."
  },
  {
    id: 55,
    question: "A: I'm terribly sorry for missing the deadline.\nB: _______",
    options: {
      A: "It's okay, just make sure to update me next time before it's due.",
      B: "You are terrible.",
      C: "I am not sorry.",
      D: "Yes, the deadline missed.",
      E: "Why are you terribly?"
    },
    answer: "A",
    explanation: "Responding professionally to an apology from a coworker.",
    trick: "Apology -> Accept it + set future expectation ('just make sure to...')."
  },
  {
    id: 56,
    question: "The factory will ______ operations temporarily while the upgraded machinery is installed.",
    options: {
      A: "suspend",
      B: "suspending",
      C: "suspended",
      D: "suspension",
      E: "suspends"
    },
    answer: "A",
    explanation: "'Will' is a modal auxiliary verb, so it must be followed by a bare infinitive (Verb 1).",
    trick: "Will / Can / May / Must / Should + V1."
  },
  {
    id: 57,
    question: "______ the poor weather, the shipment arrived exactly on time.",
    options: {
      A: "Although",
      B: "In spite of",
      C: "Because",
      D: "However",
      E: "As"
    },
    answer: "B",
    explanation: "'the poor weather' is a noun phrase. To show contrast, use 'In spite of' or 'Despite'.",
    trick: "In spite of + Noun Phrase. (Same rule as question 15, reinforced concept)."
  },
  {
    id: 58,
    question: "He didn't receive the promotion, ______ he was the most qualified candidate.",
    options: {
      A: "because",
      B: "therefore",
      C: "even though",
      D: "so",
      E: "whatever"
    },
    answer: "C",
    explanation: "Contrast between 'not receiving' and 'being most qualified' requires 'even though' (followed by S+V).",
    trick: "Even though + Subject + Verb."
  },
  {
    id: 59,
    question: "Our competitors are releasing their product next week, so we need to expedite ______.",
    options: {
      A: "our",
      B: "us",
      C: "we",
      D: "ours",
      E: "our's"
    },
    answer: "D",
    explanation: "Instead of repeating 'our product', we use the possessive pronoun 'ours'.",
    trick: "Possessive pronoun (ours) stands alone. Possessive adjective (our) needs a noun."
  },
  {
    id: 60,
    question: "By this time next year, I ______ my master's degree in Business Administration.",
    options: {
      A: "will finish",
      B: "am finishing",
      C: "will have finished",
      D: "have finished",
      E: "finished"
    },
    answer: "C",
    explanation: "'By this time next year' is a marker for the future perfect tense.",
    trick: "By + future time -> Will have + V3."
  },
  {
    id: 61,
    question: "Unless the client ______ the new terms, we cannot proceed with the partnership.",
    options: {
      A: "accepts",
      B: "accept",
      C: "will accept",
      D: "accepted",
      E: "do not accept"
    },
    answer: "A",
    explanation: "'Unless' means 'If not'. In a Type 1 conditional, the 'unless' clause uses present simple.",
    trick: "Unless + Present Simple (Subject singular + V1s/es). Never put 'will' directly after 'unless'."
  },
  {
    id: 62,
    question: "The director told the staff ______ leave the meeting room until the presentation ended.",
    options: {
      A: "not",
      B: "to not",
      C: "not to",
      D: "don't",
      E: "no"
    },
    answer: "C",
    explanation: "Reported speech for negative imperatives: 'told someone NOT TO do something'.",
    trick: "Negative command -> Not to + V1."
  },
  {
    id: 63,
    question: "Hardly ______ the presentation when the power went out.",
    options: {
      A: "had he started",
      B: "he had started",
      C: "he started",
      D: "did he start",
      E: "has he started"
    },
    answer: "A",
    explanation: "Inversion rule with 'Hardly': Hardly + had + Subject + V3... when...",
    trick: "Hardly / Scarcely... WHEN... Requires inversion (had + S + V3)."
  },
  {
    id: 64,
    question: "The proposal ______ by the committee focuses heavily on sustainability.",
    options: {
      A: "approval",
      B: "approving",
      C: "approved",
      D: "approves",
      E: "was approved"
    },
    answer: "C",
    explanation: "Reduced relative clause passive. 'The proposal (which was) approved...'",
    trick: "Noun + V3 + by = Yang di..."
  },
  {
    id: 65,
    question: "If I ______ known about the meeting, I would have prepared a report.",
    options: {
      A: "have",
      B: "was",
      C: "had",
      D: "would",
      E: "did"
    },
    answer: "C",
    explanation: "Third conditional structure: If + Past Perfect (had V3).",
    trick: "If ... had V3 ..., ... would have V3."
  },
  {
    id: 66,
    question: "Read the text:\n'To all employees: Please be advised that the South elevator will be out of service for maintenance on Tuesday, October 12, from 9:00 AM to 2:00 PM. We apologize for the inconvenience and kindly request that you use the North elevator or the staircase during this time.'\n\nWhat is the main purpose of this notice?",
    options: {
      A: "To announce a permanent closure of an elevator.",
      B: "To inform staff about a temporary elevator maintenance schedule.",
      C: "To promote the use of staircases for health reasons.",
      D: "To complain about broken facilities.",
      E: "To apologize for a recent accident."
    },
    answer: "B",
    explanation: "The text clearly states the South elevator will be 'out of service' temporarily 'for maintenance'.",
    trick: "Look for keywords: 'out of service' + 'maintenance' + specific time frame = temporary schedule."
  },
  {
    id: 67,
    question: "Read the text:\n'To all employees: Please be advised that the South elevator will be out of service for maintenance on Tuesday, October 12, from 9:00 AM to 2:00 PM. We apologize for the inconvenience and kindly request that you use the North elevator or the staircase during this time.'\n\nWhen will the South elevator be available for use again?",
    options: {
      A: "Before 9:00 AM only.",
      B: "All day on Tuesday.",
      C: "After 2:00 PM on Tuesday.",
      D: "Wednesday morning.",
      E: "It is not mentioned."
    },
    answer: "C",
    explanation: "The outage lasts 'from 9:00 AM to 2:00 PM'. Therefore, it will be available after 2:00 PM.",
    trick: "Read the end time boundary."
  },
  {
    id: 68,
    question: "Read the text:\n'ABC Corp is pleased to announce its merger with XYZ Industries. This strategic alliance aims to expand our global market reach and enhance research capabilities. No immediate changes to daily operations are expected, but a town hall meeting will be held next Friday to address employee concerns.'\n\nWhat is the primary goal of the merger?",
    options: {
      A: "To reduce the number of employees.",
      B: "To expand global market reach and improve research.",
      C: "To change daily operations immediately.",
      D: "To hold more town hall meetings.",
      E: "To close XYZ Industries."
    },
    answer: "B",
    explanation: "The text states: 'This strategic alliance aims to expand our global market reach and enhance research capabilities.'",
    trick: "Synonym matching: 'goal' = 'aims to'."
  },
  {
    id: 69,
    question: "Read the text:\n'ABC Corp is pleased to announce its merger with XYZ Industries. This strategic alliance aims to expand our global market reach and enhance research capabilities. No immediate changes to daily operations are expected, but a town hall meeting will be held next Friday to address employee concerns.'\n\nWhat will happen next Friday?",
    options: {
      A: "The merger will be canceled.",
      B: "Daily operations will change.",
      C: "Employees will be fired.",
      D: "A meeting will take place to answer questions.",
      E: "XYZ Industries will move to a new office."
    },
    answer: "D",
    explanation: "The text says 'a town hall meeting will be held next Friday to address employee concerns.'",
    trick: "'Address concerns' = answer questions/discuss issues."
  },
  {
    id: 70,
    question: "Read the email:\n'Subject: Invoice #4029 Overdue\nDear Mr. Smith, this is a friendly reminder that invoice #4029 for the office supplies delivered last month was due on the 15th. Please process the payment at your earliest convenience to avoid a 5% late fee.'\n\nWhat is the sender asking Mr. Smith to do?",
    options: {
      A: "To return the office supplies.",
      B: "To pay an outstanding bill soon.",
      C: "To pay a 5% fee immediately.",
      D: "To deliver some office supplies.",
      E: "To cancel the invoice."
    },
    answer: "B",
    explanation: "'Invoice #4029... was due' and 'Please process the payment...'.",
    trick: "Invoice = bill. Process payment = pay the bill."
  },
  {
    id: 71,
    question: "Read the email:\n'Subject: Invoice #4029 Overdue\nDear Mr. Smith, this is a friendly reminder that invoice #4029 for the office supplies delivered last month was due on the 15th. Please process the payment at your earliest convenience to avoid a 5% late fee.'\n\nWhat consequence will occur if the payment is severely delayed?",
    options: {
      A: "The supplies will be confiscated.",
      B: "Mr. Smith will be sued.",
      C: "A 5% late penalty will be applied.",
      D: "The sender will cancel the order.",
      E: "The invoice will be forgiven."
    },
    answer: "C",
    explanation: "'...to avoid a 5% late fee.'",
    trick: "Look for 'consequence/penalty' = 'late fee'."
  },
  {
    id: 72,
    question: "Read the excerpt:\n'Due to the unseasonably heavy snowfall, Flight 449 to Chicago has been delayed by approximately three hours. Passengers are advised to remain in the departure lounge and listen for further announcements.'\n\nWhat caused the delay?",
    options: {
      A: "Mechanical issues.",
      B: "A strike by airport staff.",
      C: "Severe winter weather conditions.",
      D: "A missing pilot.",
      E: "Security clearance."
    },
    answer: "C",
    explanation: "'Unseasonably heavy snowfall' represents severe winter weather.",
    trick: "Snowfall = winter weather."
  },
  {
    id: 73,
    question: "Read the excerpt:\n'Due to the unseasonably heavy snowfall, Flight 449 to Chicago has been delayed by approximately three hours. Passengers are advised to remain in the departure lounge and listen for further announcements.'\n\nWhere should the passengers wait?",
    options: {
      A: "Inside the airplane.",
      B: "At the baggage claim.",
      C: "In the departure lounge.",
      D: "Outside the airport.",
      E: "At the ticket counter."
    },
    answer: "C",
    explanation: "'Passengers are advised to remain in the departure lounge...'",
    trick: "Scan for location keywords (where to wait/remain)."
  },
  {
    id: 74,
    question: "Read the memo:\n'As we transition to sustainable practices, we will no longer provide disposable plastic cups in the break room starting next month. Employees are encouraged to bring their own reusable mugs.'\n\nWhat is the new company policy?",
    options: {
      A: "Employees must drink water outside.",
      B: "The company will provide reusable mugs to everyone.",
      C: "Plastic cups will no longer be supplied at the office.",
      D: "Coffee is banned from the break room.",
      E: "Employees must recycle plastic cups."
    },
    answer: "C",
    explanation: "'We will no longer provide disposable plastic cups in the break room'.",
    trick: "No longer provide = stop supplying."
  },
  {
    id: 75,
    question: "Read the text:\n'Job Opening: Senior Graphic Designer. Requirements: At least 5 years of agency experience, proficiency with Adobe Creative Suite, and a strong portfolio demonstrating branding campaigns. Leadership experience is a plus, but not mandatory.'\n\nWhich of the following is NOT strictly required for the position?",
    options: {
      A: "5 years of agency experience.",
      B: "Proficiency with Adobe Creative Suite.",
      C: "A strong portfolio.",
      D: "Experience in leading a team.",
      E: "Demonstrated branding campaigns."
    },
    answer: "D",
    explanation: "'Leadership experience is a plus, but not mandatory.'",
    trick: "'Not mandatory' / 'A plus' = optional, not required."
  },
  {
    id: 76,
    question: "Read the message:\n'Hi Sarah, I'm stuck in heavy traffic on the I-90. I definitely won't make it to the 9 AM client briefing. Could you please lead the presentation? The slides are on the shared drive under 'Project Alpha'.' - John\n\nWhat is John asking Sarah to do?",
    options: {
      A: "To pick him up from the highway.",
      B: "To postpone the meeting to tomorrow.",
      C: "To conduct the presentation in his place.",
      D: "To create new slides for Project Alpha.",
      E: "To call the client and cancel."
    },
    answer: "C",
    explanation: "'Could you please lead the presentation?' implies asking her to conduct it in his place.",
    trick: "Lead = conduct/take charge of."
  },
  {
    id: 77,
    question: "From John's message: '...The slides are on the shared drive under 'Project Alpha'.' Where can Sarah find the necessary materials?",
    options: {
      A: "In John's physical desk drawer.",
      B: "In an email attachment John just sent.",
      C: "On the company's shared digital drive.",
      D: "With the client.",
      E: "At the reception area."
    },
    answer: "C",
    explanation: "'on the shared drive'.",
    trick: "Shared drive = digital/shared server."
  },
  {
    id: 78,
    question: "Read the policy:\n'Vacation requests must be submitted through the portal at least two weeks prior to the intended start date. Requests made with less than two weeks' notice will only be approved in cases of family emergency.'\n\nIf an employee wants to go on a holiday on July 20, by what date should they ideally submit the request?",
    options: {
      A: "July 20.",
      B: "July 19.",
      C: "July 10.",
      D: "Before or on July 6.",
      E: "After July 20."
    },
    answer: "D",
    explanation: "Two weeks prior to July 20 is July 6. They must submit at least two weeks prior.",
    trick: "Math in reading: 20 minus 14 days = 6."
  },
  {
    id: 79,
    question: "Under the same vacation policy, under what condition can a late request be approved?",
    options: {
      A: "If the employee offers to work overtime later.",
      B: "In the event of a family emergency.",
      C: "If the manager is feeling generous.",
      D: "If the employee has unused sick leave.",
      E: "Under no circumstances."
    },
    answer: "B",
    explanation: "'...approved in cases of family emergency.'",
    trick: "Scan for the exception ('only be approved in...')."
  },
  {
    id: 80,
    question: "Read the advertisement:\n'Upgrade your broadband today! Our new Platinum package offers lightning-fast speeds up to 1 Gbps, 24/7 priority customer support, and a free premium router for only $89/month. Sign up before Friday to waive the $50 installation fee.'\n\nHow can a customer avoid paying the installation cost?",
    options: {
      A: "By paying $89 extra.",
      B: "By calling priority support.",
      C: "By bringing their own router.",
      D: "By subscribing before Friday.",
      E: "By waiting until next week."
    },
    answer: "D",
    explanation: "'Sign up before Friday to waive the $50 installation fee.' ('Waive' means to not require payment).",
    trick: "Waive = avoid paying/free."
  },
  {
    id: 81,
    question: "Read the excerpt from an article:\n'The retail industry has seen a massive shift towards e-commerce over the past decade. Brick-and-mortar stores are increasingly adopting omnichannel strategies to survive. Physical stores now serve more as showrooms rather than the final point of purchase for many consumers.'\n\nWhat does the text imply strongly about physical stores (brick-and-mortar)?",
    options: {
      A: "They are completely bankrupt and closed.",
      B: "Their main function is shifting from pure sales to product display/experience.",
      C: "They are more profitable than e-commerce.",
      D: "They do not need internet connections.",
      E: "They refuse to adapt to e-commerce."
    },
    answer: "B",
    explanation: "'...serve more as showrooms rather than the final point of purchase...'",
    trick: "Showroom = a place to display/experience products before buying online."
  },
  {
    id: 82,
    question: "Read the text:\n'Please review the attached contract. Pay special attention to Clause 4 regarding intellectual property rights. If everything looks favorable, sign the last page and courier it back to our legal department by Thursday.'\n\nWhat must be done after signing the contract?",
    options: {
      A: "Scan and email it.",
      B: "Delete Clause 4.",
      C: "Send it via courier to the legal department.",
      D: "Call the legal department.",
      E: "Keep it in a local safe."
    },
    answer: "C",
    explanation: "'...sign the last page and courier it back to our legal department'.",
    trick: "Courier = send via delivery service."
  },
  {
    id: 83,
    question: "Read the review:\n'The Grand Hotel downtown offered impeccable service during our corporate retreat. The conference rooms were well-equipped, though the catering was somewhat mediocre and lacked vegetarian options.'\n\nHow does the reviewer feel about the food provided?",
    options: {
      A: "It was extraordinary.",
      B: "It was average and not very accommodating for vegetarians.",
      C: "It was the best part of the retreat.",
      D: "It caused food poisoning.",
      E: "There was no food provided at all."
    },
    answer: "B",
    explanation: "'...catering was somewhat mediocre and lacked vegetarian options.' Mediocre means average or not very good.",
    trick: "Vocabulary context: Mediocre = average/not special."
  },
  {
    id: 84,
    question: "Read the instruction manual:\n'To reset the device to factory settings, hold down the power and volume down buttons simultaneously for exactly 10 seconds until the logo flashes. Do not release the buttons if the screen merely turns black.'\n\nWhat indicates that the reset process is successfully initiated?",
    options: {
      A: "The screen turns black.",
      B: "The device makes a loud beep.",
      C: "The logo flashes.",
      D: "The volume increases.",
      E: "The power button gets warm."
    },
    answer: "C",
    explanation: "'...until the logo flashes.'",
    trick: "Wait 'until' = the trigger for the success."
  },
  {
    id: 85,
    question: "Read the instruction manual about resetting the device again. What should you do if the screen turns black before 10 seconds are up?",
    options: {
      A: "Release the buttons immediately.",
      B: "Press the volume up button.",
      C: "Keep holding the buttons down.",
      D: "Plug in the charger.",
      E: "Call customer service."
    },
    answer: "C",
    explanation: "'Do not release the buttons if the screen merely turns black.' This implies you must keep holding them.",
    trick: "Do not release = keep holding."
  },
  {
    id: 86,
    question: "Read the company update:\n'Starting Q3, we are pivoting our marketing focus from traditional print media to digital channels, specifically SEO and social media campaigns. This reallocation of our budget is expected to yield a higher ROI by targeting younger demographics.'\n\nWhat is the main reason for the shift in strategy?",
    options: {
      A: "Print media is too expensive now.",
      B: "The CEO dislikes reading magazines.",
      C: "To achieve a higher Return on Investment (ROI) by reaching young people.",
      D: "Because social media accounts are free to make.",
      E: "To avoid paying taxes."
    },
    answer: "C",
    explanation: "'...expected to yield a higher ROI by targeting younger demographics.'",
    trick: "ROI = Return on Investment. Demographic = Target audience (young people)."
  },
  {
    id: 87,
    question: "Read the sign:\n'AUTHORIZED PERSONNEL ONLY. All visitors must obtain a guest badge at the front desk and be escorted by an employee beyond this point.'\n\nIf a visitor wants to go past the sign, what two things must they have?",
    options: {
      A: "A passport and a ticket.",
      B: "A guest badge and an employee escort.",
      C: "An appointment and an ID card.",
      D: "A coffee and a laptop.",
      E: "A security uniform and a keycard."
    },
    answer: "B",
    explanation: "'obtain a guest badge... and be escorted by an employee'.",
    trick: "Scan for 'must obtain' and 'and be [verb]'."
  },
  {
    id: 88,
    question: "Read the health notice:\n'If you experience symptoms such as a high fever, continuous dry cough, or loss of taste, please do not come to the office. Notify HR immediately and schedule a telehealth consultation.'\n\nWhat is the very first thing an employee should do if they wake up with a high fever?",
    options: {
      A: "Go to the office to show HR.",
      B: "Stay home and go back to sleep.",
      C: "Take medicine and go to work.",
      D: "Stay home (do not come to the office) and notify HR.",
      E: "Go straight to the emergency room."
    },
    answer: "D",
    explanation: "The notice says 'please do not come to the office. Notify HR immediately...'",
    trick: "Step 1: Do not come. Step 2: Notify HR."
  },
  {
    id: 89,
    question: "Read the memo excerpt:\n'Despite the supply chain disruptions experienced globally, our warehouse managed to maintain strong inventory levels due to early bulk purchasing in January.'\n\nWhy did the warehouse not run out of stock?",
    options: {
      A: "Because supply chains were perfect.",
      B: "Because nobody bought their products.",
      C: "Because they bought a lot of stock early in the year.",
      D: "Because they manufacture everything in-house.",
      E: "Because the government subsidized them."
    },
    answer: "C",
    explanation: "'...due to early bulk purchasing in January.' Bulk purchasing implies buying a lot at once.",
    trick: "Bulk = large amount/a lot."
  },
  {
    id: 90,
    question: "Read the short dialogue:\nTom: Did you manage to get a hold of the supplier?\nJane: Yes, but their lead time has increased to 6 weeks. We will have to push back our launch date.\nWhat does 'lead time' most likely refer to?",
    options: {
      A: "The time spent on a phone call.",
      B: "The time it takes to deliver goods after an order is placed.",
      C: "The duration of the product launch party.",
      D: "The time it takes to sign a contract.",
      E: "The operating hours of the supplier."
    },
    answer: "B",
    explanation: "In business context, 'lead time' is the latency between the initiation and completion of a process (like ordering and receiving goods).",
    trick: "Lead time (Business English) = Waktu tunggu / Waktu pemrosesan."
  },
  {
    id: 91,
    question: "Which of the following sentences uses the passive voice correctly?",
    options: {
      A: "The report was written by the consultant last week.",
      B: "The consultant was wrote the report last week.",
      C: "The report wrote the consultant last week.",
      D: "The report is written by the consultant last week.",
      E: "The consultant written the report last week."
    },
    answer: "A",
    explanation: "Passive voice structure: Subject (target) + Be (was) + Verb 3 (written) + by Agent.",
    trick: "Passive in past tense = was/were + Verb 3."
  },
  {
    id: 92,
    question: "Choose the correct preposition:\n'The new headquarters is located _______ the intersection of Main Street and 5th Avenue.'",
    options: {
      A: "in",
      B: "on",
      C: "at",
      D: "into",
      E: "from"
    },
    answer: "C",
    explanation: "'At' is used for specific pinpoint locations or intersections.",
    trick: "Intersection/Specific point -> At. Street name only -> On. City/Country -> In."
  },
  {
    id: 93,
    question: "Identify the error in the sentence:\n'Each of the team members have received a commemorative plaque for their hard work.'",
    options: {
      A: "Each",
      B: "of the",
      C: "have received",
      D: "for their",
      E: "hard work"
    },
    answer: "C",
    explanation: "'Each of [plural noun]' is treated as singular. The verb should be 'has received'.",
    trick: "Each / Every / Neither / Either -> ALWAYS Singular verb (has, is, does)."
  },
  {
    id: 94,
    question: "Choose the correct word to fill the blank:\n'The board members _______ agreed to the terms without any further debate.'",
    options: {
      A: "unanimously",
      B: "anonymously",
      C: "hesitantly",
      D: "arguing",
      E: "barely"
    },
    answer: "A",
    explanation: "If they agreed 'without any further debate', it means everyone agreed. 'Unanimously' means fully in agreement.",
    trick: "Unanimous = 100% agreement. (Don't confuse with 'anonymous' which means unnamed)."
  },
  {
    id: 95,
    question: "Customer: Is there any warranty on this laptop?\nSalesman: Yes, it comes with a two-year _______ covering parts and labor.",
    options: {
      A: "insurance",
      B: "receipt",
      C: "guarantee",
      D: "brochure",
      E: "manual"
    },
    answer: "C",
    explanation: "A 'guarantee' or warranty covers parts and labor.",
    trick: "Warranty is a synonym for Guarantee."
  },
  {
    id: 96,
    question: "If the company _____ to expand into Asia, it would need a massive capital injection.",
    options: {
      A: "were",
      B: "was",
      C: "is",
      D: "has",
      E: "had"
    },
    answer: "A",
    explanation: "Second conditional ('would need' in main clause) and subjunctive mood for unreality uses 'were' for all subjects ('If the company were...').",
    trick: "If + Subject + WERE + to infinitive, ... would + V1."
  },
  {
    id: 97,
    question: "Read the news snippet:\n'The central bank has raised interest rates by 0.5% in an effort to curb inflation. However, analysts warn this could slow down the housing market significantly.'\nWhat is the expected negative side effect of the bank's action?",
    options: {
      A: "Inflation will increase.",
      B: "The central bank will close.",
      C: "Real estate (housing) sales might decelerate.",
      D: "Interest rates will drop.",
      E: "Analysts will lose their jobs."
    },
    answer: "C",
    explanation: "'...this could slow down the housing market significantly.'",
    trick: "Slow down = decelerate. Housing market = Real estate."
  },
  {
    id: 98,
    question: "What does the phrase 'to curb inflation' mean in the text?",
    options: {
      A: "To encourage inflation.",
      B: "To measure inflation.",
      C: "To control or reduce inflation.",
      D: "To create inflation.",
      E: "To ignore inflation."
    },
    answer: "C",
    explanation: "To 'curb' something means to restrain or keep it in check.",
    trick: "Vocabulary context: Curb = control/reduce/restrain."
  },
  {
    id: 99,
    question: "The supervisor asked him _______ the forms before leaving the office.",
    options: {
      A: "submit",
      B: "submitting",
      C: "to submit",
      D: "submitted",
      E: "submits"
    },
    answer: "C",
    explanation: "The verb pattern is 'ask [object] to do [something]'.",
    trick: "Ask / Tell / Want + Object + TO Infinitive."
  },
  {
    id: 100,
    question: "Congratulations! You have reached the final question. To complete a professional email respectfully, which sign-off is most appropriate?",
    options: {
      A: "See ya later,",
      B: "Peace out,",
      C: "Sincerely,",
      D: "Love,",
      E: "Whatever,"
    },
    answer: "C",
    explanation: "'Sincerely' or 'Best regards' are the standard professional email sign-offs.",
    trick: "Formal business letter/email ALWAYS ends with Sincerely, Yours faithfully, or Best regards."
  }
];

module.exports = subtest7;
