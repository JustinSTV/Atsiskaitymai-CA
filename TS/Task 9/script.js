"use strict";
const TEAMS_ENDPOINT = "teams.json";
const PLAYERS_ENDPOINT = "players.json";
const outputDiv = document.querySelector("#output");
class NBAPlayers {
    constructor() {
        this.fetchTeams();
    }
    fetchTeams() {
        fetch(TEAMS_ENDPOINT)
            .then((res) => res.json())
            .then((data) => {
            data.teams.forEach((oneTeam) => {
                const oneTeamDiv = document.createElement("div");
                oneTeamDiv.classList.add("oneTeam");
                const teamName = document.createElement("h2");
                teamName.textContent = oneTeam.teamName;
                const abbreviation = document.createElement("p");
                abbreviation.textContent = `Abbreviation: ${oneTeam.abbreviation}`;
                const simpleName = document.createElement("p");
                simpleName.textContent = `Simple name: ${oneTeam.simpleName}`;
                const location = document.createElement("p");
                location.textContent = `Location: ${oneTeam.location}`;
                const playersInfoButton = document.createElement("button");
                playersInfoButton.textContent = "Players";
                playersInfoButton.addEventListener("click", () => {
                    this.createAndShowModal(oneTeam.id);
                });
                oneTeamDiv.append(teamName, abbreviation, simpleName, location, playersInfoButton);
                outputDiv === null || outputDiv === void 0 ? void 0 : outputDiv.append(oneTeamDiv);
            });
        });
    }
    fetchPlayers(teamId, modalContent) {
        fetch(PLAYERS_ENDPOINT)
            .then((res) => res.json())
            .then((data) => {
            const teamPlayers = data.players.filter((player) => player.teamId === teamId);
            teamPlayers.forEach((player) => {
                const onePlayerName = document.createElement("h4");
                onePlayerName.textContent = `${player.firstName} ${player.lastName}`;
                modalContent.appendChild(onePlayerName);
            });
        });
    }
    createAndShowModal(teamId) {
        const modal = document.createElement("dialog");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.addEventListener("click", () => {
            modal.close();
            modal.remove();
        });
        modal.append(modalContent, closeButton);
        document.body.appendChild(modal);
        this.fetchPlayers(teamId, modalContent);
        modal.showModal();
    }
}
new NBAPlayers();
