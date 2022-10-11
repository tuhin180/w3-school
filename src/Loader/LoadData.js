export const LoadData = async () => {
  const programs = await fetch("https://openapi.programming-hero.com/api/quiz");
  const programsData = await programs.json();

  return programsData;
};
