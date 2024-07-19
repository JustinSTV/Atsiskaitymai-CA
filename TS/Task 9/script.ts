/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = "teams.json";
const PLAYERS_ENDPOINT = "players.json";

const outputDiv = document.querySelector("#output");

type AllTeams = {
  id: number;
  abbreviation: string;
  teamName: string;
  simpleName: string;
  location: string;
};

type Player = {
  firstName: string;
  lastName: string;
  id: number;
  teamId: number;
};

class NBAPlayers {
  constructor() {
    this.fetchTeams();
  }

  fetchTeams() {
    fetch(TEAMS_ENDPOINT)
      .then((res) => res.json())
      .then((data: { teams: AllTeams[] }) => {
        data.teams.forEach((oneTeam: AllTeams) => {
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

          oneTeamDiv.append(
            teamName,
            abbreviation,
            simpleName,
            location,
            playersInfoButton
          );
          outputDiv?.append(oneTeamDiv);
        });
      });
  }

  fetchPlayers(teamId: number, modalContent: HTMLDivElement) {
    fetch(PLAYERS_ENDPOINT)
      .then((res) => res.json())
      .then((data: { players: Player[] }) => {
        const teamPlayers = data.players.filter(
          (player) => player.teamId === teamId
        );

        teamPlayers.forEach((player: Player) => {
          const onePlayerName = document.createElement("h4");
          onePlayerName.textContent = `${player.firstName} ${player.lastName}`;

          modalContent.appendChild(onePlayerName);
        });
      });
  }

  createAndShowModal(teamId: number) {
    const modal = document.createElement("dialog") as HTMLDialogElement;
    const modalContent = document.createElement("div") as HTMLDivElement;
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("button") as HTMLButtonElement;
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      modal.close();
      modal.remove();
    });

    // modalContent.appendChild(closeButton);
    modal.append(modalContent, closeButton);
    document.body.appendChild(modal);

    this.fetchPlayers(teamId, modalContent);
    modal.showModal();
  }
}

new NBAPlayers();
