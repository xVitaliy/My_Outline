import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import AppDrawer from "./components/AppDrawer";
import { useState } from "react";


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
