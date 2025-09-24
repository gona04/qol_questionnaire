const qualityOfLife = {
  "version": "1.0",
  "title": "Are you okay?",
  "intro": "Answer 10 questions honestly.",
  "questions": [
    { "id": "Q1", "parameter": "overall_life_satisfaction", "text": "Reflecting on your achievements and path, how do you feel about where you are in life right now?" },
    { "id": "Q2", "parameter": "positive_emotions", "text": "How often do you experience joy, peace, or moments of true happiness in your day-to-day life?" },
    { "id": "Q3", "parameter": "social_connections", "text": "How connected and supported do you feel by people in your life (friends, family, partner, colleagues)?" },
    { "id": "Q4", "parameter": "gratitude", "text": "When good things happen, how often do you notice and feel grateful?" },
    { "id": "Q5", "parameter": "purpose_meaning", "text": "Do your daily activities and overall life feel purposeful?" },
    { "id": "Q6", "parameter": "autonomy_freedom", "text": "How much freedom and control do you feel you have in choosing your own path?" },
    { "id": "Q7", "parameter": "resilience", "text": "When life throws challenges your way, how do you handle them?" },
    { "id": "Q8", "parameter": "self_compassion", "text": "After a personal setback (mistake, failure, disappointment), how do you treat yourself?" },
    { "id": "Q9", "parameter": "balance_engagement", "text": "How balanced and engaging does your daily routine feel?" },
    { "id": "Q10", "parameter": "physical_wellbeing", "text": "How does your physical health affect your mood, energy, and happiness?" }
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
  "follow_up_prompts": [ "Which question made you reflect the most and why?", "What is one small step you can take this week to improve your score by 1 point in any area?", "What brings you joy that you can schedule in the next 48 hours?", "Who is one person you could connect with or thank today?" ]
};

module.exports = { qualityOfLife };
