const qol_options = [
  { "value": 1, "label": "I feel like nothing is going right and I'm often frustrated or disappointed." },
  { "value": 2, "label": "My life has its moments, but I mostly feel stuck or unsatisfied." },
  { "value": 3, "label": "Things are okay. I have ups and downs, but nothing too extreme." },
  { "value": 4, "label": "I feel proud of the progress I've made, with only minor frustrations here and there." },
  { "value": 5, "label": "I'm extremely happy with my life and wouldn't change much at all." }
];

const qualityOfLife = {
  "version": "1.0",
  "title": "Are you okay?",
  "intro": "Answer 10 questions honestly.",
  "score_range": [1, 5],
  "questions": [
    { "id": "Q1", "parameter": "overall_life_satisfaction", "text": "Reflecting on your achievements and path, how do you feel about where you are in life right now?", "options_ref": "qol_options" },
    { "id": "Q2", "parameter": "positive_emotions", "text": "How often do you experience joy, peace, or moments of true happiness in your day-to-day life?", "options_ref": "qol_options" },
    { "id": "Q3", "parameter": "social_connections", "text": "How connected and supported do you feel by people in your life (friends, family, partner, colleagues)?", "options_ref": "qol_options" },
    { "id": "Q4", "parameter": "gratitude", "text": "When good things happen, how often do you notice and feel grateful?", "options_ref": "qol_options" },
    { "id": "Q5", "parameter": "purpose_meaning", "text": "Do your daily activities and overall life feel purposeful?", "options_ref": "qol_options" },
    { "id": "Q6", "parameter": "autonomy_freedom", "text": "How much freedom and control do you feel you have in choosing your own path?", "options_ref": "qol_options" },
    { "id": "Q7", "parameter": "resilience", "text": "When life throws challenges your way, how do you handle them?", "options_ref": "qol_options" },
    { "id": "Q8", "parameter": "self_compassion", "text": "After a personal setback (mistake, failure, disappointment), how do you treat yourself?", "options_ref": "qol_options" },
    { "id": "Q9", "parameter": "balance_engagement", "text": "How balanced and engaging does your daily routine feel?", "options_ref": "qol_options" },
    { "id": "Q10", "parameter": "physical_wellbeing", "text": "How does your physical health affect your mood, energy, and happiness?", "options_ref": "qol_options" }
  ],
  "parameters": [
    { "id": "overall_life_satisfaction", "name": "Overall Life Satisfaction", "description": "Global evaluation of your current life path and achievements.", "guidance": { "low": "Focus on stabilizing basics and clarifying one short-term goal. Consider speaking with a trusted person or a professional for support.", "medium": "Identify what's missing. Set 1–2 value-aligned goals and schedule next actions.", "high": "Maintain momentum with regular gratitude and quarterly goal reviews." } },
    { "id": "positive_emotions", "name": "Positive Emotions", "description": "Frequency of joy, peace, and contentment.", "guidance": { "low": "Try daily mood tracking and schedule one pleasant activity (10–20 minutes) per day.", "medium": "Increase savoring: note 3 good moments each evening and share one with someone.", "high": "Protect habits that generate joy; teach or model them to others." } },
    { "id": "social_connections", "name": "Social Connections and Support", "description": "Sense of belonging, support, and relationship quality.", "guidance": { "low": "Reach out to one safe person or join a low-pressure group; limit isolation.", "medium": "Schedule regular check-ins and express appreciation to strengthen bonds.", "high": "Deepen reciprocity and uphold healthy boundaries to sustain connection." } },
    { "id": "gratitude", "name": "Gratitude", "description": "Awareness and appreciation of positives.", "guidance": { "low": "Start a 1-line daily gratitude note; keep it simple and consistent.", "medium": "Do '3 good things' three times per week; text one thank-you weekly.", "high": "Practice expressive gratitude (notes or brief reflections) to amplify wellbeing." } },
    { "id": "purpose_meaning", "name": "Purpose and Meaning", "description": "Clarity and motivation from personally meaningful aims.", "guidance": { "low": "Explore values (e.g., list top 5 values) and test one small, aligned action.", "medium": "Run small experiments (2–4 weeks) toward interests; review fit and energy.", "high": "Align calendar with purpose; prune low-value commitments." } },
    { "id": "autonomy_freedom", "name": "Freedom to Choose (Autonomy)", "description": "Perceived control over life decisions.", "guidance": { "low": "Make a 'circle of control' list; set one boundary this week.", "medium": "Practice assertive communication in one specific situation.", "high": "Commit to one bold, value-aligned choice; review outcomes." } },
    { "id": "resilience", "name": "Resilience", "description": "Capacity to cope and bounce back from challenges.", "guidance": { "low": "Assemble a coping toolkit (breathing, grounding, support contact); prioritize sleep.", "medium": "Use cognitive reframes and break problems into next actions.", "high": "Seek growth challenges deliberately and reflect on lessons learned." } },
    { "id": "self_compassion", "name": "Self-Compassion", "description": "Kindness toward yourself during difficulty.", "guidance": { "low": "Replace harsh self-talk with a supportive script you’d use for a friend.", "medium": "Practice 'common humanity': remind yourself that mistakes are human.", "high": "Integrate brief compassion practices (e.g., hand on heart, kind phrases)." } },
    { "id": "balance_engagement", "name": "Daily Balance and Engagement", "description": "Sustainable mix of responsibilities and restorative activities.", "guidance": { "low": "Do a time audit; protect one non-negotiable recharge block weekly.", "medium": "Batch tasks and add buffer time to reduce spillover stress.", "high": "Alternate deep work with intentional play; reassess balance monthly." } },
    { "id": "physical_wellbeing", "name": "Physical Wellbeing", "description": "Energy, sleep, movement, and health routines that impact mood.", "guidance": { "low": "Prioritize medical guidance as needed; start a simple sleep and movement routine.", "medium": "Stack habits (e.g., walk after meals, consistent bedtime).", "high": "Periodize training, nutrition, and recovery; monitor for overreach." } }
  ],
  "scoring": {
    "total_min": 10,
    "total_max": 50,
    "interpretation": "Higher scores indicate stronger overall wellbeing across the 10 dimensions.",
    "per_parameter_thresholds": { "low": [1, 2], "medium": [3], "high": [4, 5] }
  },
  "results": [
    { "type": "Struggling", "score_range": [10, 19], "description": "You may be facing challenges in emotional wellbeing, balance, or self-compassion. Feeling overwhelmed, disconnected, or stuck is tough—but recognizing it is a powerful first step.", "suggestions": [ "Reach out for support: confide in someone you trust or consider a mental health professional.", "Focus on small wins: set one tiny, achievable goal (e.g., a 10-minute walk or one gratitude note).", "Try grounding practices: deep breathing, brief meditation, or journaling to create space for change.", "Keep steps small and consistent; progress does not need to be fast." ], "safety_note": "If you are in immediate crisis or thinking of harming yourself, seek urgent local help or contact your local emergency number." },
    { "type": "Finding stability", "score_range": [20, 29], "description": "You’re navigating ups and downs with some instability in areas like balance, purpose, or resilience.", "suggestions": [ "Build a gentle routine: consistent wake/sleep times or a 5-minute gratitude practice.", "Identify strengths you already have and expand from them.", "Explore what’s missing: decide one thing to drop or delegate to free up energy.", "Track one area for two weeks to notice patterns and adjust." ] },
    { "type": "Growing and balancing", "score_range": [30, 39], "description": "You have a solid base with strengths in resilience, self-compassion, or emotional wellbeing. Purpose or deeper balance may still fluctuate.", "suggestions": [ "Deepen connection: schedule meaningful conversations and express appreciation.", "Boost self-reflection: ask what would make an ‘okay’ area more fulfilling.", "Lean into hobbies or growth activities that align with your values.", "Celebrate progress to reinforce motivation." ] },
    { "type": "Thriving", "score_range": [40, 45], "description": "Strong purpose, resilience, and balance support your wellbeing. You’re in a great place to keep growing.", "suggestions": [ "Pay it forward: mentor, encourage, or perform small acts of kindness.", "Stay grounded: continue mindfulness, gratitude, and periodic self-check-ins.", "Embrace new challenges: try a new hobby, volunteer role, or stretch goal." ] },
    { "type": "Flourishing", "score_range": [46, 50], "description": "You’re living with deep purpose, meaningful connections, and balanced self-care. Your habits align with your values.", "suggestions": [ "Challenge yourself: learn a new skill, travel, or lead a community initiative.", "Inspire others by sharing strategies that worked for you.", "Stay consistent and adaptable: adjust routines as life changes to sustain momentum." ] }
  ],
  "follow_up_prompts": [ "Which question made you reflect the most and why?", "What is one small step you can take this week to improve your score by 1 point in any area?", "What brings you joy that you can schedule in the next 48 hours?", "Who is one person you could connect with or thank today?" ]
};

export { qualityOfLife, qol_options };
