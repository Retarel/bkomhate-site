
import { Timestamp } from "firebase/firestore";

export interface Codeword {
  id: string;
  word: string;
  isUsed: boolean;
  usedMessage: string;
  introText: string;
  createdAt: Timestamp;
  viewCount: number;
}
