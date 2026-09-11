export interface AudienceGroup {
  id: string;
  title: string;
}

export const audienceGroups: AudienceGroup[] = [
  { id: "students", title: "Students" },
  { id: "developers", title: "Developers" },
  { id: "researchers", title: "Researchers" },
  { id: "educators", title: "Educators" },
  { id: "enthusiasts", title: "Quantum Enthusiasts" },
  { id: "beginners", title: "Beginners" },
];

export const requirements = {
  required: [
    "Details will be announced soon. Check back for updates!"
  ],
  recommended: [
    "Details will be announced soon. Check back for updates!"
  ]
};
