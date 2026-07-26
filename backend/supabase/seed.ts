import { createClient } from '@supabase/supabase-js'

process.loadEnvFile('.env.local')

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey)

const topics = [
  { id: 'breaking_news', name: 'Breaking News', description: 'Berita heboh yang viral duluan sebelum sempat diverifikasi.' },
  { id: 'ai_or_real', name: 'AI or Real?', description: 'Foto atau video — asli, atau hasil AI?' },
  { id: 'health_hoax', name: 'Health Hoax', description: 'Klaim kesehatan yang kedengarannya meyakinkan, padahal keliru.' },
  { id: 'emergency_alert', name: 'Emergency Alert', description: 'Info darurat atau bencana yang belum tentu resmi.' },
]

const questions = [
  {
    id: 'health-02',
    category: 'health',
    format: 'truth_false',
    content: {
      claim: { text: 'Minum air rebusan daun sirsak terbukti sembuhkan kanker stadium 4!', image_url: null },
    },
    is_hoax: true,
    explanation: 'Klaim tanpa studi klinis pendukung, ciri umum hoax kesehatan.',
  },
  {
    id: 'ai-01',
    category: 'ai_media',
    format: 'swipe',
    content: {
      options: [
        { id: 'left', image_url: 'https://placehold.co/400x400?text=AI+Generated', is_real: false },
        { id: 'right', image_url: 'https://placehold.co/400x400?text=Real+Photo', is_real: true },
      ],
    },
    explanation: 'Foto kiri hasil AI — perhatikan detail jari dan bayangan yang tidak konsisten.',
  },
  {
    id: 'quote-01',
    category: 'fake_quote',
    format: 'truth_false',
    content: {
      claim: {
        text: '"Saya tidak pernah mengatakan bahwa vaksin menyebabkan autisme." — dr. Andrew Wakefield, 2010',
        image_url: null,
      },
    },
    is_hoax: false,
    explanation: 'Wakefield memang tidak pernah mengatakan itu. Tapi klaim yang beredar luas justru sebaliknya — ia menyebut vaksin MMR terkait autisme di studi palsunya tahun 1998.',
  },
  {
    id: 'click-01',
    category: 'clickbait',
    format: 'swipe',
    content: {
      options: [
        { id: 'left', image_url: 'https://placehold.co/400x400?text=Clickbait+Thumbnail', is_real: false },
        { id: 'right', image_url: 'https://placehold.co/400x400?text=Actual+News', is_real: true },
      ],
    },
    explanation: 'Thumbnail kiri pakai ekspresi wajah berlebihan dan teks kuning — ciri khas clickbait. Judul asli berita jauh lebih moderat.',
  },
  {
    id: 'emerg-01',
    category: 'emergency',
    format: 'truth_false',
    content: {
      claim: {
        text: 'UPDATE: Pemerintah umumkan status darurat nasional — lockdown total mulai besok! Segera share ke semua grup keluarga!',
        image_url: null,
      },
    },
    is_hoax: true,
    explanation: 'Info darurat resmi selalu keluar dari kanal resmi (BNPB, BMKG, Kemkominfo), bukan dari pesan berantai yang minta di-share.',
  },
]

const scenarios = [
  {
    id: 'breaking-news-01',
    topic: 'breaking_news',
    title: 'Gempa Megathrust Malam Ini?',
    thumbnail_url: null,
    data: {
      setup: {
        post_text: 'Jakarta diprediksikan gempa megathrust malam ini!',
        likes: 100000,
        comments: 49000,
        shares: 60000,
      },
      decisions: [
        {
          id: 'decision_1',
          prompt: 'What will you do first?',
          options: [
            { id: 'A', text: 'Comment percaya & ikut share juga', result_text: 'Postingan makin nyebar, 200 orang lain ikut share dalam 10 menit.' },
            { id: 'B', text: 'Ignore aja, lanjut scroll', result_text: 'Kamu lanjut scroll, tapi notifikasi grup keluarga mulai rame soal ini.' },
            { id: 'C', text: 'Kurang yakin, cek dulu sumbernya', result_text: 'Kamu klik nama akun — ternyata akun anonim tanpa rekam jejak jelas.' },
          ],
        },
        {
          id: 'decision_2',
          prompt: 'Temen chat: "eh ini real gak?"',
          options: [
            { id: 'A', text: '"Iya gw liat juga, kayaknya bener"', result_text: null },
            { id: 'B', text: '"Jangan percaya dulu, cek akunnya"', result_text: null },
            { id: 'C', text: '"Banyak yang like/komen, pasti bener"', result_text: null },
          ],
          fixed_reveal_after: 'Official disaster agency: "No official warning has been issued."',
        },
        {
          id: 'decision_3',
          prompt: 'What will you do now?',
          options: [
            { id: 'A', text: 'Do nothing', result_text: 'Hoax terus nyebar tanpa koreksi.' },
            { id: 'B', text: 'Hapus bukti share, tapi diem aja', result_text: 'Kamu aman, tapi orang lain masih percaya hoax-nya.' },
            { id: 'C', text: 'Warn everyone & koreksi diri sendiri', result_text: 'Beberapa orang di grup jadi ikutan cek ulang informasinya.' },
          ],
        },
      ],
      ending: {
        reveal_points: [
          'Klaim bencana tanpa sumber resmi (BMKG/BNPB)',
          'Akun penyebar anonim/tidak kredibel',
          'Jumlah like/share tinggi bukan indikator kebenaran',
          'Lembaga resmi belum konfirmasi apa pun',
        ],
        takeaway: 'Sebelum panik atau share, cek dulu ke sumber resmi.',
      },
    },
  },
]

async function seed() {
  console.log('Seeding topics...')
  const { error: tErr } = await supabase.from('topics').upsert(topics, { onConflict: 'id' })
  if (tErr) { console.error('Topic error:', tErr); return }

  console.log('Seeding booth questions...')
  const { error: qErr } = await supabase.from('booth_questions').upsert(questions, { onConflict: 'id' })
  if (qErr) { console.error('Question error:', qErr); return }

  console.log('Seeding scenarios...')
  const { error: sErr } = await supabase.from('scenarios').upsert(scenarios, { onConflict: 'id' })
  if (sErr) { console.error('Scenario error:', sErr); return }

  console.log('Seed complete!')
}

seed()
