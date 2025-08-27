import { PostItem } from "./PostCard";

  const isValidLink = (link: string | undefined) => {
    return link && link.trim() !== "" && link !== "#";
  };

  function getImageUrl(post: PostItem): string | null {
    // Prefer explicit thumbnail if present
    if (post.thumbnail) return post.thumbnail;
    if (post.description) {
      try {
        const match = post.description.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/i);
        if (match && match[1]) return match[1];
      } catch {}
    }
    return null;
  }
  
  function getPlainExcerpt(description?: string, maxLen = 140) {
    if (!description) return "";
    // Strip HTML tags and collapse whitespace
    const text = description
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen).trim() + "…";
  }
  
  function formatDate(input?: string) {
    if (!input) return "";
    const d = new Date(input);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  export { formatDate, getImageUrl, getPlainExcerpt, isValidLink };
