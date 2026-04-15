import {
  CategoryHealthIcon,
  CategoryHomeIcon,
  CategoryMarketingIcon,
  CategoryScienceIcon,
  CategoryTechnologyIcon,
} from "@/icons/categories";
import { CategoryType } from "@/types";

const mainCategoryConfig: CategoryType[] = [
  {
    id: "",
    title: "Home",
    slug: "/",
    icon: CategoryHomeIcon,
  },
  {
    id: "a1b2c3d4-0001-0001-0001-000000000001",
    title: "Science",
    slug: "science",
    icon: CategoryScienceIcon,
  },
  {
    id: "a1b2c3d4-0002-0002-0002-000000000002",
    title: "Health",
    slug: "health",
    icon: CategoryHealthIcon,
  },
  {
    id: "a1b2c3d4-0003-0003-0003-000000000003",
    title: "Marketing",
    slug: "marketing",
    icon: CategoryMarketingIcon,
  },
  {
    id: "a1b2c3d4-0004-0004-0004-000000000004",
    title: "Technology",
    slug: "technology",
    icon: CategoryTechnologyIcon,
  },
];

export default mainCategoryConfig;
