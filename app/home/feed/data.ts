import { BibeDto } from "@/utils/types";

export const fakeBibes = [
  {
    userId: "12345",
    displayName: "Sarah Jones",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003203474-c278f8fda11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFybyx8MTB8fGJpaXJhfGVufDB8fDB8fA%3D%3D", // Woman with short brown hair
    title: "Meeting Notes - Marketing Team",
    todos: [
      {
        description: "Discuss upcoming social media campaign",
        isCompleted: true,
      },
      {
        description: "Finalize website update timeline",
        isCompleted: false,
      },
    ],
    date: "3h", // Hardcoded relative time
  },
  {
    userId: "54321",
    displayName: "David Lee",
    avatarUrl:
      "https://images.unsplash.com/photo-1593642532842-98d8edec7f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFybyx8MTB8fG1hbFxeaW4!&ixrest=UR&q=man&auto=format&fit=crop&w=800&h=600&gravity=center", // Man with glasses and a beard
    title: "Personal errands",
    todos: [
      {
        description: "Pick up groceries at the supermarket",
        isCompleted: false,
      },
      {
        description: "Drop off dry cleaning",
        isCompleted: false,
      },
      {
        description: "Return library books",
        isCompleted: true,
      },
    ],
    date: "8hr", // Hardcoded relative time
  },
  {
    userId: "98765",
    displayName: "Emily Rodriguez",
    avatarUrl:
      "https://images.unsplash.com/photo-1614674476937-a6a7b5c9d3a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFybyx8MTB8fGJpaXJhfGVufDB8fDB8fA%3D%3D", // Woman with long brown hair and glasses
    title: "Project Proposal Outline",
    todos: [
      {
        description: "Define project goals and objectives",
        isCompleted: false,
      },
      {
        description: "Identify target audience and stakeholders",
        isCompleted: false,
      },
      {
        description: "Develop project timeline and budget",
        isCompleted: true,
      },
    ],
    date: "12hr", // Hardcoded relative time
  },
  {
    userId: "37218",
    displayName: "Michael Brown",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-a3f7d43e498f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFybyx8MTB8fG1lbnxlbnwwfDB8fDB8fA%3D%3D", // Man with a beard and a black shirt
    title: "Gym Workout",
    todos: [
      {
        description: "Complete 3 sets of bench press",
        isCompleted: false,
      },
      {
        description: "20 minutes of cardio",
        isCompleted: false,
      },
      {
        description: "Stretching routine",
        isCompleted: true,
      },
    ],
    date: "10/05/24", // Hardcoded date format (assuming today is May 10, 2024)
  },
];
