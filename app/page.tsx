import Hero from "./Hero";
import NavBar from "./NavBar";
import ProfileContainer from "./ProfileContainer";

export default function Home() {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<main>
				<Hero header="Marilyn Rifkin, LCSW" subHeader="New York | Connecticut | Florida" />
				<ProfileContainer />
			</main>
		</>
	);
}
