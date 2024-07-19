/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "NBA.json";

type Team = {
  id: number;
  name: string;
  players: Player[];
};

type Player = {
  firstName: string;
  lastName: string;
  googleSearch: string;
};

class NBAPlayers {
  constructor() {
    this.fetchTeams();
  }

  fetchTeams() {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data: { teams: Team[] }) => {
        this.displayTeams(data.teams);
      });
  }

  displayTeams(teams: Team[]) {
    const container = document.querySelector("#output") as HTMLDivElement;

    teams.forEach((team: Team) => {
      // console.log(team);
      const oneTeamDiv = document.createElement("div") as HTMLDivElement;
      oneTeamDiv.classList.add("oneTeam");

      const teamName = document.createElement("h2");
      teamName.textContent = team.name;
      oneTeamDiv.appendChild(teamName);

      team.players.forEach((player: Player) => {
        const onePlayerDiv = document.createElement("div") as HTMLDivElement;
        onePlayerDiv.classList.add("onePlayer");

        const onePlayerName = document.createElement("h4");
        onePlayerName.textContent = `${player.firstName} ${player.lastName}`;

        const infoButton = document.createElement("a") as HTMLAnchorElement;
        infoButton.href = player.googleSearch;
        infoButton.target = "_blank";
        infoButton.textContent = "About Player";

        onePlayerDiv.append(onePlayerName, infoButton);
        oneTeamDiv.appendChild(onePlayerDiv);
      });

      container?.appendChild(oneTeamDiv);
    });
  }
}

const nbaPlayers = new NBAPlayers();
