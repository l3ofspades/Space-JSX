function App ()
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];


	// assign a random status to each space phenomenon
	const observations = spacePhenomena.map(phenomenon => {
		const randomStatus = observationStatuses[Math.floor(Math.random() * observationStatuses.length)];
		return { ...phenomenon, status: randomStatus };
	});
	return (
		<div style={{ fontFamily : "sans-serif", padding: "1rem" }}>
			<h2> Space Observation Dashboard</h2>
			{observations.map(item => (
				<div key={item.id} style={{marginBottom: "1rem"}}>
					<strong>{item.emoji} {item.name}</strong>: {item.status}
					{item.status === "🚀 Prime for Study" && (
						<p style={{ color: "green", fontWeight: "bold" }}>
							Great opportunity for further research!
						</p>	
			)}
			
		</div>
			))}
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
