"use strict";
const ENDPOINT = "NBA.json";
class NBAPlayers {
    constructor() {
        this.fetchTeams();
    }
    fetchTeams() {
        fetch(ENDPOINT)
            .then((res) => res.json())
            .then((data) => {
            this.displayTeams(data.teams);
        });
    }
    displayTeams(teams) {
        const container = document.querySelector("#output");
        teams.forEach((team) => {
            const oneTeamDiv = document.createElement("div");
            oneTeamDiv.classList.add("oneTeam");
            const teamName = document.createElement("h2");
            teamName.textContent = team.name;
            oneTeamDiv.appendChild(teamName);
            team.players.forEach((player) => {
                const onePlayerDiv = document.createElement("div");
                onePlayerDiv.classList.add("onePlayer");
                const onePlayerName = document.createElement("h4");
                onePlayerName.textContent = `${player.firstName} ${player.lastName}`;
                const infoButton = document.createElement("a");
                infoButton.href = player.googleSearch;
                infoButton.target = "_blank";
                infoButton.textContent = "About Player";
                onePlayerDiv.append(onePlayerName, infoButton);
                oneTeamDiv.appendChild(onePlayerDiv);
            });
            container === null || container === void 0 ? void 0 : container.appendChild(oneTeamDiv);
        });
    }
}
const nbaPlayers = new NBAPlayers();
