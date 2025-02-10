import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { CourseCard } from "./components/Courses/CourseCard";

const App = () => {
  const course = { title: "React", level: "Начальный", duration: "8 недель", price: "1500" };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CourseCard course={course} onSelect={() => console.log("Выбрано")} />
      </div>
    </ThemeProvider>
  );
};

export default App;
