import Notes from "../pages/Notes/Notes";

export const ROUTES = {
  NOTES: "notes",
  CIRCLES: "circles",
  TIMELINE: "timeline",
};

export const routes = [
  {
    path: "notes",
    component: Notes,
  },
  {
    path: "circles",
    component: Notes,
  },
  {
    path: "timeline",
    component: Notes,
  },
];
