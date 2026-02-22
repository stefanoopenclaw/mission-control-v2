import { format } from 'date-fns';

export function formatTaskDate(date: Date): string {
  return format(date, 'MMM dd, yyyy');
}