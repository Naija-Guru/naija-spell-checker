import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce(func: Function, delay: number) {
  let timeout: NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export async function asyncWrapper<T>(promise: Promise<T>) {
  try {
    const data = await promise;
    return [data, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
}
