/**
 * Formats text by capitalizing first letter and replacing underscores with spaces
 */
export const formatText = (text: string): string => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  return text.replace(/_/g, ' ').charAt(0).toUpperCase() + text.replace(/_/g, ' ').slice(1);
};
