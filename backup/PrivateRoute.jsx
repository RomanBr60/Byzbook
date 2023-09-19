import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "../styles/style.css";
  
export default function PrivateRoute ({ children, privateAttr = true, ...rest }) {
    const user = useSelector((state) => state.user);
    return (
      <Route
        {...rest}
        render={() => {
          return ((user.role === 'admin') === privateAttr)  ? (
            children
          ) : (
            <p style={{marginTop: "160px"}}>ERROR</p>
          );
        }}
      />
    );
}
  