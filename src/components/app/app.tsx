import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import AdoptPage from "../../pages/adopt-page/adopt-page";
import Error404Page from "../../pages/error404-page/error404-page";
import LoginPage from "../../pages/login-page/login-page";
import ServicesPage from "../../pages/services-page/services-page";
import StoriesPage from "../../pages/stories-page/stories-page";
import ViewMorePetsPage from "../../pages/viewMorePets-page/viewMorePets-page";
import ViewMoreSickPetsPage from "../../pages/viewMoreSickPets-page/viewMoreSickPets-page";
import AboutPetForAdopt from "../../pages/aboutPetForAdopt/aboutPetForAdopt";
import AboutSickPet from "../../pages/aboutSickPet/aboutSickPet";
import UserStoriesSection from "../userStoriesSection/userStoriesSection";
import AboutOneStory from "../../pages/aboutOneStory/aboutOneStory";
import ViewMoreServices from "../../pages/viewMoreServices/viewMoreServices";
import AboutOneSpecialist from "../../pages/aboutOneSpecialist/aboutOneSpecialist";
import PetCardPage from "../../pages/petCardPage/petCardPage";
import { AppRoute } from "../../const";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* Основные маршруты */}
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Adopt} element={<AdoptPage />} />
        <Route path={AppRoute.Services} element={<ServicesPage />} />
        <Route path={AppRoute.Stories} element={<StoriesPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />

        {/* Маршруты для питомцев */}
        <Route path={AppRoute.ViewMorePets} element={<ViewMorePetsPage />} />
        <Route path={AppRoute.AboutPet} element={<AboutPetForAdopt />} />
        <Route
          path={`${AppRoute.AboutPet}/:id`}
          element={<AboutPetForAdopt />}
        />

        {/* Маршруты для больных питомцев */}
        <Route
          path={AppRoute.ViewMoreSickPets}
          element={<ViewMoreSickPetsPage />}
        />
        <Route
          path={`${AppRoute.AboutSickPet}/:id`}
          element={<AboutSickPet />}
        />

        {/* Маршруты для историй */}
        <Route
          path={`${AppRoute.AboutOneStory}/:id`}
          element={<AboutOneStory />}
        />

        {/* Маршруты для специалистов */}
        <Route
          path={AppRoute.ViewMoreServices}
          element={<ViewMoreServices />}
        />
        <Route
          path={`${AppRoute.AboutSpecialist}/:id`}
          element={<AboutOneSpecialist />}
        />

        {/* Маршрут для карточки питомца пользователя */}
        <Route path={`${AppRoute.PetCard}/:id`} element={<PetCardPage />} />

        {/* Дефолтные маршруты */}
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
