function toDateOnly(value) {
  if (!value) return null;
  return String(value).slice(0, 10);
}

function toParagraphs(content) {
  if (Array.isArray(content)) return content;
  if (!content) return [];

  return String(content)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function normalizeCategory(category) {
  return category ? String(category).toLowerCase() : 'general';
}

// 백엔드 DTO 필드명이 확정되면 이 함수의 alias만 정리하면 됩니다.
export function normalizeArticle(article) {
  const sourceUrl =
    article.sourceUrl ??
    article.originalUrl ??
    article.original_link ??
    article.url ??
    article.link ??
    null;

  return {
    id:
      article.id ??
      article.articleId ??
      article.article_id ??
      `${article.title ?? 'article'}-${sourceUrl ?? article.createdAt ?? ''}`,
    category: normalizeCategory(article.category),
    title: article.title ?? '',
    department:
      article.department ??
      article.author ??
      article.sourceName ??
      article.siteName ??
      article.organization ??
      '경북대학교',
    createdAt:
      toDateOnly(
        article.createdAt ??
          article.uploaded_at ??
          article.publishedAt ??
          article.postedAt ??
          article.date,
      ) ?? '',
    deadline: toDateOnly(article.deadline ?? article.deadlineAt),
    views: article.views ?? article.viewCount ?? 0,
    keywords: article.keywords ?? article.tags ?? [],
    summary: article.summary ?? article.aiSummary ?? article.contents ?? '',
    content: toParagraphs(article.contents ?? article.content ?? article.body),
    imageUrl: article.image_url ?? article.imageUrl ?? null,
    sourceUrl,
  };
}

export async function fetchArticles({ cursor, search, signal } = {}) {
  const params = new URLSearchParams();

  if (cursor != null) params.set('cursor', cursor);
  if (search?.trim()) params.set('search', search.trim());

  const query = params.toString();
  const response = await fetch(`/api/articles${query ? `?${query}` : ''}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`공지 목록을 불러오지 못했습니다. (${response.status})`);
  }

  const payload = await response.json();
  if (payload.result !== 'SUCCESS' || !payload.data) {
    throw new Error('공지 목록 응답 형식이 올바르지 않습니다.');
  }

  return {
    items: (payload.data.items ?? []).map(normalizeArticle),
    hasNext: Boolean(payload.data.hasNext),
    nextCursor: payload.data.nextCursor ?? null,
  };
}
