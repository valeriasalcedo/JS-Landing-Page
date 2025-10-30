import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function useRouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const show = setTimeout(() => setLoading(true), 120);

    const hide = setTimeout(() => setLoading(false), 900);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [location]);

  return loading;
}
