import { Size } from '../../types/middlewareTypes';

export const formatProductSize = (sizes?: Size[] | null): string | null => {
  if (!sizes?.length) {
    return 'NOSZ';
  }
  return sizes.map((size) => `${size.region.toUpperCase()} ${size.value}`).join(', ');
};
