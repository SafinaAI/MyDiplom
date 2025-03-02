// тут прописаны типы данных для переменных животных готовых к усыновлению

export type PetsForAdopt = {
  id: string;
  name: string;
  image: string;
  type: string;
  gender: string;
  age: string;
  city: string;
  curator: string;
  hospice: string;
  description: string;
  additionalImages: string[];
};
