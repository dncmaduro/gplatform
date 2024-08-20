export type MemberDetailCard = {
  name: string;
  imageLink: string;
  position: string;
  team: string;
  activities: [
    {
      duration: string;
      position: string;
    },
  ];
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    instagram?: string;
  };
};
