export enum Level {
  Junior = 'Junior',
  Middle = 'Middle',
  Senior = 'Senior',
}

export default interface Resume {
  id: number;
  name: string;
  experience: number;
  level: keyof typeof Level;
  tags: string[];
}

export type FilterType = {
  experience?: number;
  level: keyof typeof Level | '';
  tags: string[];
};
