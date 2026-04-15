export const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Royal Reels Direct" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Здесь будет текст материала: новости, обзоры или аналитика. Замените этот абзац на свой контент.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Структура" }],
    },
    {
      type: "bulletList",
      attrs: { tight: true },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Краткий лид и основная мысль.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Факты, контекст и выводы по теме.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "При необходимости — иллюстрации и ссылки на источники.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
