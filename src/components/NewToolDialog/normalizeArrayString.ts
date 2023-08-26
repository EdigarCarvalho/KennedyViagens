export function normalizeArrayString(input: string): string[] {
    return input
      .split(/[ ,#]+/)
      .filter(tag => tag !== '')
      .map(tag => tag.replace(/^#/, ''));
  }