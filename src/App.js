import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import AppDrawer from "./components/AppDrawer";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import StartPage from "./components/StartPage";
import FormikPage from "./components/Formik/FormikPage";

function App() {
    // Drawer open/close
    const [ open, setOpen ] = useState(false)

    return (
        <div className="App">
            <Header setOpen={ setOpen } />
            <AppDrawer open={ open } setOpen={ setOpen } />
            <Main />

        </div>
    );
}

export default App;
