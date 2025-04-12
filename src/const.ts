export const AppRoute = {
  Main: '/',
  Adopt: '/adopt',
  Services: '/services',
  Stories: '/stories',
  Login: '/login',
  ViewMorePets: '/view-more-pets',
  ViewMoreSickPets: '/sick-pets',
  AboutPet: '/about-pet',
  AboutSickPet: '/sick-pet',
  AboutOneStory: '/story',
  ViewMoreServices: '/view-more-services',
  AboutSpecialist: '/services/specialist', // Добавьте эту константу
  PetCard: '/pet-card',
  Error404: '/404'
} as const;


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
