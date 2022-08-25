import { pastDate } from "./utils/helpers";

export let todoBaseData = [
  {
    id: 0,
    title: "To buy milk",
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`,
    isCompleted: false,
    createdAt: pastDate(),
    completedAt: null,
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 1,
    title: "Fill the car",
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`,
    isCompleted: false,
    createdAt: pastDate(),
    completedAt: new Date(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 2,
    title: "Read the book",
    description: `Lorem ipsum dolor sit amet, consectetur 
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`,
    isCompleted: false,
    createdAt: pastDate(),
    completedAt: new Date(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 3,
    title: "Fix the plumbing in the country",
    description: `Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu`,
    isCompleted: false,
    createdAt: pastDate(),
    completedAt: new Date(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 4,
    title: "Fix the plumbing in the country",
    description: `Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu`,
    isCompleted: true,
    createdAt: pastDate(),
    completedAt: pastDate(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 5,
    title: "Make list of family members",
    description: `Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu`,
    isCompleted: true,
    createdAt: pastDate(),
    completedAt: pastDate(),
    isDeleted: false,
    deletedAt: null,
  },
  {
    id: 6,
    title: "Buy party decorations",
    description: `Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu`,
    isCompleted: true,
    createdAt: pastDate(),
    completedAt: pastDate(),
    isDeleted: true,
    deletedAt: pastDate(),
  },
  {
    id: 7,
    title: "Buy watermelon and corn",
    description: `Lorem ipsum dolor sit amet, consectetur irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu`,
    isCompleted: true,
    createdAt: pastDate(),
    completedAt: pastDate(),
    isDeleted: true,
    deletedAt: pastDate(),
  },
];
