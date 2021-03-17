import HomePage from './homePage';
import ReactDOM from "react-dom";

it('renders without crashing', () => {
  const div =document.createElement("div");
  ReactDOM.render(<HomePage/> ,div)
 
});
