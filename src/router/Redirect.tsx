import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}

export default Redirect;
