import { RootState } from '../../store';

export const selectAccordionStatus = (state: RootState): boolean => state.accordion.isOpen;
