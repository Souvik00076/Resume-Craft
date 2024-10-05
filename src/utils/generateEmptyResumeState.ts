import { TResumeState } from "../@types";

export const generateEmptyResumeState = (): TResumeState => ({
  experience: [
    {
      company: "",
      description: "",
      worktitle: "",
      tags: "",
      yearfrom: "",
      yearto: "",
      present: false,
    },
  ],
  course: [
    {
      name: "",
      provider: "",
    },
  ],
  education: [
    {
      degree: "",
      grade: "",
      university: "",
      yearfrom: "",
      yearto: "",
      gradetype: "percentage",
    },
  ],
  personal: {
    technicalskill: [
      {
        skill: "",
        rate: "",
      },
    ],
    interest: [
      {
        hobbie: "",
      },
    ],
    name: "",
    lastName: "",
    date: "",
    email: "",
    mob: "",
    city: "",
    country: "",
    profilePhoto: "",
    title: "",
    summary: "",
  },
  projects: [
    {
      name: "",
      tech: "",
      des: "",
      link: "",
    },
  ],
  links: {
    linkedin: "",
    github: "",
    portfolio: "",
  },
});
