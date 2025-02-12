import { GOAL_TYPES, GOALS } from '@/types/goal';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLabelByValue(value: string, type: string) {
  switch(type) {
    case GOALS.TYPE:
      return GOAL_TYPES.find(type => type.value === value)?.label;
    default:
      return "Unknown";
  }
}