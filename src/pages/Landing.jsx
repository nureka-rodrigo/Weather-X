import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <img
                className="h-16 w-auto dark:invert animate-pulse"
                src="/logo.svg"
                alt="Landing Logo"
            />
        </div>
    );
};

export default LandingPage;