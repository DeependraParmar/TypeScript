import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext } from "../App";

type InputValType = string | number;

const Box = <T extends InputValType>({label, value, setter}: {label: string, value: T, setter: Dispatch<SetStateAction<T>>}) => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    alert(theme);
  return (
    <>
        <form>
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => setter(e.target.value as T)} />
            <button onClick={toggleTheme}>Submit</button>
        </form>
    </>
  )
}

export default Box;
