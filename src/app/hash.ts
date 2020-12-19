export async function hash(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const hashBytes = await crypto.subtle.digest('SHA-1', bytes);
  return Array.from(new Uint8Array(hashBytes))
    .map((b) => b.toString(16))
    .join('');
}
