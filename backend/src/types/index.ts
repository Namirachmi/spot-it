export type BoothCategory = 'health' | 'ai_media' | 'fake_quote' | 'clickbait' | 'emergency'

export interface BoothQuestion {
  id: string
  category: BoothCategory
  format: 'truth_false'
  claim: { text: string; image_url: string | null }
  is_hoax: boolean
  explanation: string
}

export interface BoothQuestionSwipe {
  id: string
  category: BoothCategory
  format: 'swipe'
  options: { id: 'left' | 'right'; image_url: string; is_real: boolean }[]
  explanation: string
}

export type Question = BoothQuestion | BoothQuestionSwipe

export interface Topic {
  id: string
  name: string
  description: string
}

export interface Scenario {
  id: string
  topic: string
  title: string
  thumbnail_url: string | null
  data: {
    setup: { post_text: string; likes: number; comments: number; shares: number }
    decisions: {
      id: string
      prompt: string
      options: {
        id: string
        text: string
        result_text: string | null
        ending_type?: 'safe' | 'neutral' | 'risky'
        // Option non-terminal yang MELOMPATI keputusan berikutnya (branching):
        // arahkan ke id decision lain. Tanpa field ini, frontend lanjut ke
        // decision berikutnya secara berurutan.
        next_decision_id?: string
      }[]
      fixed_reveal_after?: string
    }[]
    ending: { reveal_points: string[]; takeaway: string }
  }
}

export interface ScenarioListItem {
  id: string
  title: string
  thumbnail_url: string | null
}

export interface SurveyResponse {
  session_id: string
  responses: { question: string; answer: string }[]
}
