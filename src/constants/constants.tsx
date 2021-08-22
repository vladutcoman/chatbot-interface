import { Message, Personality } from "../types/types";
import rihanna from '../assets/images/rihanna.jpeg';
import cent from '../assets/images/50cent.jpeg';

export const RIRI_FIRST_MESSAGE: Message = {
  key: 0,
  image: rihanna,
  type: "other",
  message: "How cand I help you?",
};

export const CENT_FIRST_MESSAGE: Message = {
  key: 0,
  image: cent,
  type: "other",
  message: "How cand I help you?",
};

export const PERSONALITIES_MAP: {[key: string]: string} = {
  [rihanna]: 'Rihanna',
  [cent]: '50 Cent'
};

export const DEFAULT_PERSONALITY: Personality = {
  name: PERSONALITIES_MAP[rihanna],
  image: rihanna
};

//TODO: Update api url
export const API_URL = "";

