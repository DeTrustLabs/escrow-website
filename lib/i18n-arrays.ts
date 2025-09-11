// Utility helpers for safely extracting arrays from next-intl loaded messages

export function getMessageArray(
  messages: string | Record<string, string> | undefined,
  path: string
): string[] {
  if (!messages) return []
  const segments = path.split(".")
  let cur = messages
  for (const seg of segments) {
    if (cur && typeof cur === "object" && seg in cur) {
      cur = cur[seg]
    } else {
      return []
    }
  }
  return Array.isArray(cur) ? cur : []
}
