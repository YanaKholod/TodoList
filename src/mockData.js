import { pastDate } from "./utils/helpers";

export let todoBaseData = [
  {
    id: 15,
    title: "To buy milk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: false,
    createdAt: pastDate(-12),
    completedAt: pastDate(-11),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 47,
    title: "Fill the car",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam",
    isCompleted: false,
    createdAt: pastDate(-9),
    completedAt: pastDate(-8),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 2,
    title: "Read the book",
    description:
      "Lorem ipsum dolor sit amet, consectetur ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: false,
    createdAt: pastDate(-8),
    completedAt: pastDate(-7),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 3,
    title: "Clean house",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: false,
    createdAt: pastDate(-10),
    completedAt: pastDate(-9),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 4,
    title: "Fix the plumbing in the country",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-3),
    completedAt: pastDate(-2),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 5,
    title: "Make list of family members",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore e",
    isCompleted: true,
    createdAt: pastDate(-6),
    completedAt: pastDate(-5),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 6,
    title: "Make list of family dogs",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-11),
    completedAt: pastDate(-10),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 7,
    title: "Make family weeding",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-7),
    completedAt: pastDate(-6),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 8,
    title: "Buy party decorations",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-13),
    completedAt: pastDate(-12),
    isDeleted: true,
    deletedAt: pastDate(-11),
  },
  {
    id: 9,
    title: "Buy watermelon and corn",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-5),
    completedAt: pastDate(-4),
    isDeleted: true,
    deletedAt: pastDate(-3),
  },
  {
    id: 10,
    title: "Buy crunches in market",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: true,
    createdAt: pastDate(-15),
    completedAt: pastDate(-14),
    isDeleted: true,
    deletedAt: pastDate(-13),
  },
  {
    id: 11,
    title: "Buy weeding decorations",
    description:
      "Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
    isCompleted: false,
    createdAt: pastDate(-18),
    completedAt: pastDate(-17),
    isDeleted: true,
    deletedAt: pastDate(-16),
  },
];
