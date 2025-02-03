import { Link } from "react-router";

const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Details", path: "/details" },
];

export const Nav = () => {
    return (
        <div className="bg-slate-400 py-2 px-4 text-xl mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                {/* Brand Name */}
                <span className="text-purple-600 font-bold text-lg">
                    Movie Diary
                </span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
                {navLinks.map((link) => (
                    <div
                        className="p-1 rounded-md hover:bg-slate-300 hover:text-purple-600 text-slate-600"
                        key={link.path}
                    >
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
