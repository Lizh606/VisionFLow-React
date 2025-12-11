
import { Language } from '../types';
import { en } from './en';
import { zh } from './zh';

export const translations: Record<Language, typeof en> = {
  en,
  zh,
};
