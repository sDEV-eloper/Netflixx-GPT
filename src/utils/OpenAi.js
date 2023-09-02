import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constant';

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser:true
});
