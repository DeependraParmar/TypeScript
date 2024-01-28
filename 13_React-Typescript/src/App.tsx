import { FormEvent, ReactNode, createContext, useState } from "react"
import Box from "./components/Box";

interface Person{
  name: string,
  age: number,
}

type ThemeType = 'light' | 'dark';
interface ThemeContextType{
  theme: ThemeType,
  toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

function App() {
  const [user, setUser] = useState<Person>();
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    setUser({name: "", age: 0});
  }
  return (
    <ThemeProvider>
      <form onSubmit={submitHandler}>
        <input type="text" value={user?.name || ""} onChange={(e) => setUser((prev) => ({...prev!, name: e.target.value}))} placeholder="Name here" /> <br />
        <input type="number" value={user?.age || ""} onChange={(e) => setUser((prev) => ({...prev!, age: Number(e.target.value)}))} placeholder="Age here"  /> <br />
        <button type="submit">Submit</button>
      </form> <br /><br />

      <Box label="hello" value={'hello'} setter={() => {}} />
    </ThemeProvider>
  )
}

export default App
