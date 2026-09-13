// Minimal markdown-to-JSX renderer for blog content authored in code
// (data/blogs.js) — not for arbitrary/user-submitted input. Supports the
// subset actually used in posts: ## and ### headings, * bullet lists,
// **bold** text, and paragraphs.

function parseInline(text, keyPrefix) {
    return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

export function renderMarkdown(content) {
    const lines = content.split("\n");
    const blocks = [];
    let currentList = null;
    let paragraphBuffer = [];

    const flushParagraph = () => {
        const text = paragraphBuffer.join(" ").trim();
        if (text) blocks.push({ type: "p", text });
        paragraphBuffer = [];
    };
    const flushList = () => {
        if (currentList) {
            blocks.push(currentList);
            currentList = null;
        }
    };

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (line === "") {
            flushParagraph();
            flushList();
        } else if (line.startsWith("### ")) {
            flushParagraph();
            flushList();
            blocks.push({ type: "h3", text: line.slice(4) });
        } else if (line.startsWith("## ")) {
            flushParagraph();
            flushList();
            blocks.push({ type: "h2", text: line.slice(3) });
        } else if (line.startsWith("* ")) {
            flushParagraph();
            if (!currentList) currentList = { type: "ul", items: [] };
            currentList.items.push(line.slice(2));
        } else {
            flushList();
            paragraphBuffer.push(line);
        }
    }
    flushParagraph();
    flushList();

    return blocks.map((block, i) => {
        if (block.type === "h2") {
            return (
                <h2 key={i} className="mb-4 mt-10 text-xl font-bold text-brand-950">
                    {parseInline(block.text, i)}
                </h2>
            );
        }
        if (block.type === "h3") {
            return (
                <h3 key={i} className="mb-3 mt-6 text-lg font-bold text-brand-950">
                    {parseInline(block.text, i)}
                </h3>
            );
        }
        if (block.type === "ul") {
            return (
                <ul key={i} className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-600">
                    {block.items.map((item, j) => (
                        <li key={j}>{parseInline(item, `${i}-${j}`)}</li>
                    ))}
                </ul>
            );
        }
        return (
            <p key={i} className="mb-5 text-[15px] leading-relaxed text-slate-600">
                {parseInline(block.text, i)}
            </p>
        );
    });
}