import { createHighlighter } from 'shiki'

// `createHighlighter` is async, it initializes the internal and
// loads the themes and languages specified.
const highlighter = createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['typescript', 'php'],
})

export async function highlight(code: string, lang: string, theme: 'github-dark' | 'github-light') {
    const instance = await highlighter
    return instance.codeToHtml(code, {
        lang: lang,
        theme: theme,
    })
}