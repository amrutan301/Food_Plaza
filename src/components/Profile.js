import { useEffect, useState } from "react";

const Profile = () => {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState({
		name: "Amruta",
		login: "amrutan301",
		bio: "",
		location: "",
		html_url: "https://github.com/amrutan301",
		avatar_url: "",
		followers: 0,
		following: 0,
	});
	useEffect(() => {
		console.log("Function useEffect");
		const getUserData = async () => {
			try {
				const data = await fetch(
					"https://api.github.com/users/amrutan301"
				);
				const json = await data.json();
				console.log(json);
				if (json.created_at) {
					setUser(json);
				}
			} catch (err) {
				console.log(err);
			}
		};
		getUserData();
	}, []);
	console.log("Function Render");
	return (
		<div className="profile-page">
			<h1>Profile Page</h1>
			<div className="profile-home">
				<div>
					<h3>
						{user.name} ({user.login})
					</h3>
					<h4>
						FOLLOWERS: {user.followers || "0"} || FOLLOWING:{" "}
						{user.following || "0"}
					</h4>
					<h4>{user.bio}</h4>
					<h4>{user.location}</h4>
					<a href={user.html_url} target="_blank">
						Github Link
					</a>
				</div>
				<div>
					<img src={user.avatar_url} />
				</div>
			</div>
			<button className="countBtn" onClick={() => setCount(count + 1)}>
				Count: {count}
			</button>
		</div>
	);
};
export default Profile;
