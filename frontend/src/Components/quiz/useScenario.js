import { useState, useEffect } from 'react';
import { breakingNewsStages, healthBeautyStages } from './quizData';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

const TOPIC_TO_ID = {
  breakingNews: 'breaking_news',
  healthBeauty: 'health_hoax',
};

const FALLBACK_STAGES = {
  breakingNews: breakingNewsStages,
  healthBeauty: healthBeautyStages,
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
      : breakingNewsStages[0].imageSrc;

  return scenario.data.decisions.map((decision, i) => {
    const isLast = i === scenario.data.decisions.length - 1;
    const prev = scenario.data.decisions[i - 1];
    const officialText = prev?.fixed_reveal_after ?? null;
    const nextIndex = i + 1;

    return {
      id: decision.id,
      imageSrc: officialText ? null : topicImg,
      officialText,
      questionBoxes: [{ id: 'q1', text: decision.prompt }],
      options: decision.options.map((option, j) => ({
        id: option.id,
        label: `${option.id}.`,
        text: option.result_text ? `${option.text} ${option.result_text}` : option.text,
        colorClass: COLOR_CLASSES[j % COLOR_CLASSES.length],
        // Hanya option di decision terakhir yang menentukan ending
        endingRoute: isLast && option.ending_type ? `/ending${option.ending_type}` : undefined,
        nextStageIndex: isLast && option.ending_type ? undefined : nextIndex,
      })),
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