import { createContext } from "react";

const UserContext = createContext({
	user: { name: "Demo", email: "demo@example.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
