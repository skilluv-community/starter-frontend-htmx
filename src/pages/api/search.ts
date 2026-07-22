import type { APIRoute } from 'astro';

const CORPUS = [
  'apple',
  'apricot',
  'banana',
  'blueberry',
  'cherry',
  'grape',
  'kiwi',
  'lemon',
  'mango',
  'orange',
  'papaya',
  'passion fruit',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'raspberry',
  'strawberry',
  'watermelon'
];

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c] as string);
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const raw = (form.get('q') ?? '').toString().trim().toLowerCase();
  const matches = raw ? CORPUS.filter((w) => w.includes(raw)).slice(0, 10) : CORPUS.slice(0, 10);

  const body = matches.length
    ? matches
        .map(
          (m) =>
            `<li class="border border-slate-800 rounded px-3 py-1">${escapeHtml(m)}</li>`
        )
        .join('')
    : '<li class="text-slate-500 italic">No match.</li>';

  return new Response(body, { headers: { 'content-type': 'text/html; charset=utf-8' } });
};
