export function goTo(link: string): void {
  if (typeof window !== "undefined") {
    window.open(link, "_blank");
  }
}
