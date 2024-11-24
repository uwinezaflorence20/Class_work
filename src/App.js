import React from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import CurrentDate from "./Components/CurrentDate";
import Button from "./Components/Button";
import HobbiesList from './Components/HobbiesList';
import ProfileCard from "./Components/ProfileCards";
import "./App.css";
import ToggleButton from "./Components/ToggleButton";
import Counter from './Components/Counter';
import HoverBox from "./Components/HoverBox";
import FormSubmit from "./Components/FormSubmit";
import DropdownMenu from "./Components/DropdownMenu";
import LoginForm from "./Components/LoginForm";
import ControlledForm from "./Components/ControlledForm";
import ValidateForm from "./Components/ValidateForm";
import MultiStepForm from "./Components/MultiStepForm";
import CheckboxForm from "./Components/CheckBoxForm";

// Router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import Blog from './Components/Blog';
import BlogPost from './Components/BlogPost';
import NotFound from './Components/NotFound';
import ParentComponent from "./Components/ParentComponent";
import ParentComponent2 from "./Components/ParentComponent2";
import ParentComponent3 from "./Components/ProductComponent3";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <WelcomeMessage />
      <CurrentDate />
      <hr />
      <div className="button">
        <Button text="Click Me" color="blue" onClick={handleClick} />
        <Button text="Submit" color="green" onClick={handleClick} />
        <HobbiesList />
      </div>
      <div>
        <ProfileCard name="John Doe" age={28} email="john@example.com" />
        <ProfileCard name="Jane Smith" age={32} email="jane@example.com" />
      </div>
      <ToggleButton />
      <Counter />
      <HoverBox />
      <FormSubmit />
      <DropdownMenu />
      <LoginForm />
      <ControlledForm />
      <ValidateForm />
      <MultiStepForm />
      <CheckboxForm />

      {/* React Router Setup */}
      <Router>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} /> {/* For undefined routes */}
        </Routes>
      </Router>

      <ParentComponent/>
      <ParentComponent2/>
      <ParentComponent3/>
    </div>
  );
}

export default App;
