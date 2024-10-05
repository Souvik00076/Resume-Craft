export interface BackendResponseType<T> extends Response {
  success: boolean;
  message: string;
  data?: T;
}

export type TExperience = {
  company: string;
  description: string;
  worktitle: string;
  tags: string;
  yearfrom: string;
  yearto: string;
  present: boolean;
};

export type TCourse = {
  name: string;
  provider: string;
};

export type TEducation = {
  degree: string;
  grade: string;
  university: string;
  yearfrom: string;
  yearto: string;
  gradetype: "percentage" | "GPA"; // Adjust as needed
};

export type TTechnicalSkill = {
  skill: string;
  rate: string;
};

export type TPersonal = {
  technicalskill: TTechnicalSkill[];
  interest: { hobbie: string }[];
  name: string;
  lastName: string;
  date: string;
  email: string;
  mob: string;
  city: string;
  country: string;
  profilePhoto: string;
  title: string;
  summary: string;
};
export type TProject = {
  name: string;
  tech: string;
  des: string;
  link: string;
};
// Define the state type
export type TResumeState = {
  experience: TExperience[];
  course: TCourse[];
  education: TEducation[];
  personal: TPersonal;
  projects: TProject[];
  links: { [key: string]: string };
};
