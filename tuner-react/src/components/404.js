import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FourOFour = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/songs");
    }, 5000);
  }, [navigate]);

  return (
    <section className="fourOFour">
      <h1>404 song or link not found!</h1>
      <h3>Please check the URL and try again.</h3>
      <h5>You will be redirected back to songs in 5 seconds.</h5>
    </section>
  );
};

export default FourOFour;
