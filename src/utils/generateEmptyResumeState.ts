import { ResumeState } from "../@types";

export const generateEmptyResumeState = (): ResumeState => ({
  experience: [],
  course: [],
  education: [],
  personal: {
    technicalskill: [],
    interest: [],
    name: "",
    lastname: "",
    date: "",
    email: "",
    mob: "",
    city: "",
    country: "",
    image: "",
    title: "",
    quote: "",
  },
  project: [],
  links: {
    linkedin: "",
    github: "",
    portfolio: "",
  },
});
