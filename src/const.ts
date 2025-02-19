const AppRoute = {
  Main: "/",
  Login: "/login",
  Adopt: "/adopt",
  Services: "/services",
  Stories: "/stories",
  Error404: "/error404",
  ViewMorePets: "/viewMorePetsPage",
  ViewMoreSickPetsPage: "/viewMoreSickPetsPage",
  AboutPet: "/pet/:id", 
} as const;
export { AppRoute };

// const AuthorizationStatus = {
//   Auth: "AUTH",
//   NoAuth: "NO_AUTH",
//   Unknown: "UNKNOWN",
// };

// export { AppRoute, AuthorizationStatus };

// export interface Achievement {
//   icon: string;
//   count: string;
//   description: string;
// }


//Данные для достижения
export const achievementData: Achievement[] = [
  {
    icon: "public/icons/section3_icon1.svg",
    count: "500+",
    description: "животных обрели свой дом",
  },
  {
    icon: "public/icons/section3_icon2.svg",
    count: "200+",
    description: "спасены от эвтаназии",
  },
  {
    icon: "public/icons/section3_icon3.svg",
    count: "3млн+",
    description: "вернулись домой",
  },
  {
    icon: "public/icons/section3_icon4.svg",
    count: "1000000+",
    description: "пожертвований",
  },
];
