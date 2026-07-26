import type { BoothCategory, Question } from '../types/index.js'

function isCorrect(question: Question, answer: boolean | 'left' | 'right'): boolean {
  if (question.format === 'truth_false') {
    return answer === question.is_hoax
  }
  const option = question.options.find((o: { id: string }) => o.id === answer)
  return option?.is_real === true
}

export function calculateLevel(score: number): string {
  if (score <= 1) return 'Awas, gampang kemakan hoax'
  if (score <= 3) return 'Lumayan, tapi masih ada celah'
  return 'Jago spot hoax'
}

export interface ScoringResult {
  score: number
  level: string
  weak_categories: BoothCategory[]
  notes: string[]
}

export function scoreAnswers(
  questions: Question[],
  answers: { question_id: string; answer: boolean | 'left' | 'right' }[],
): ScoringResult {
  let score = 0
  const weakCategories: BoothCategory[] = []
  const notes: string[] = []

  for (const ans of answers) {
    const question = questions.find((q) => q.id === ans.question_id)
    if (!question) continue

    if (isCorrect(question, ans.answer)) {
      score++
    } else {
      weakCategories.push(question.category)
      notes.push(question.explanation)
    }
  }

  return { score, level: calculateLevel(score), weak_categories: weakCategories, notes }
}
