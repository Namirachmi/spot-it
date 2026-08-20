import { useState, useEffect } from 'react';
import { breakingNewsStages, healthBeautyStages, emergencyAlertStages } from './quizData';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

const TOPIC_TO_ID = {
  breakingNews: 'breaking_news',
  healthBeauty: 'health_hoax',
  emergencyAlert: 'emergency_alert',
};

const FALLBACK_STAGES = {
  breakingNews: breakingNewsStages,
  healthBeauty: healthBeautyStages,
  emergencyAlert: emergencyAlertStages,
};

const COLOR_CLASSES = ['BtnPink', 'BtnTeal', 'BtnPurple'];

// Adapt satu decision dari API ({ id, prompt, options, fixed_reveal_after })
// ke bentuk stage yang dipakai quizTemplate (questionBoxes / options / officialText).
// Reveal dari decision sebelumnya muncul sebagai officialText di stage berikutnya
// (mengikuti pola UI lama: jawab dulu, baru lihat fakta resmi).
function buildStages(scenario, topicKey) {
  const topicImg =
    topicKey === 'healthBeauty'
      ? healthBeautyStages[0].imageSrc
      : topicKey === 'emergencyAlert'
        ? breakingNewsStages[0].imageSrc
        : breakingNewsStages[0].imageSrc;

  // Resolve id decision → index stage, untuk dukungan branching (next_decision_id).
  const decisionIndexById = new Map(
    scenario.data.decisions.map((d, idx) => [d.id, idx]),
  );

  return scenario.data.decisions.map((decision, i) => {
    const prev = scenario.data.decisions[i - 1];
    const officialText = prev?.fixed_reveal_after ?? null;
    const nextIndex = i + 1;

    return {
      id: decision.id,
      imageSrc: officialText ? null : topicImg,
      officialText,
      questionBoxes: [{ id: 'q1', text: decision.prompt }],
      options: decision.options.map((option, j) => {
        // Terminal = option membawa ending_type (bukan sekadar decision terakhir),
        // supaya branching ke decision lain tetap bisa diakhiri di tengah alur.
        const isTerminalOption = option.ending_type != null;
        const branchedNext =
          option.next_decision_id != null
            ? (decisionIndexById.get(option.next_decision_id) ?? nextIndex)
            : nextIndex;

        return {
          id: option.id,
          label: `${option.id}.`,
          text: option.result_text ? `${option.text} ${option.result_text}` : option.text,
          colorClass: COLOR_CLASSES[j % COLOR_CLASSES.length],
          endingRoute: isTerminalOption ? `/ending${option.ending_type}` : undefined,
          nextStageIndex: isTerminalOption ? undefined : branchedNext,
        };
      }),
    };
  });
}

// Fetch scenario dari backend; kalau API gagal/error/non-200, diam-diam
// pakai data statis dari quizData.js — user tidak boleh sadar ada fallback.
export function useScenario(topicKey) {
  const [stages, setStages] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const topicId = TOPIC_TO_ID[topicKey];
        if (!topicId) throw new Error('Unknown topic');

        const listRes = await fetch(`${API_BASE}/api/scenarios/${topicId}`);
        if (!listRes.ok) throw new Error('Scenario list fetch failed');
        const list = await listRes.json();
        if (!Array.isArray(list) || list.length === 0) throw new Error('No scenario for topic');

        const detailRes = await fetch(`${API_BASE}/api/scenario/${list[0].id}`);
        if (!detailRes.ok) throw new Error('Scenario detail fetch failed');
        const scenario = await detailRes.json();

        if (!cancelled) setStages(buildStages(scenario, topicKey));
      } catch {
        if (!cancelled) setStages(FALLBACK_STAGES[topicKey] ?? null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [topicKey]);

  return stages;
}