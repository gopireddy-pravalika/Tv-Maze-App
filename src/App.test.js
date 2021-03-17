import App from './App';
import ReactDOM from "react-dom";

it('renders without crashing', () => {
 /*  render(<App />); */
  const div =document.createElement("div");
  ReactDOM.render(<App/> ,div)
 /*  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
