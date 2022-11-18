import { Component } from '@angular/core';
import { ApiService } from '../../api/apiservice.component';

//import { NbaTeam } from 'src/models/nbaTeam.model';
//import { OwnerTeam } from 'src/models/ownerTeam.model';

import { map, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './league.html',
  styleUrls: ['../fantasyLeague.styles.scss']
})
export class LeagueComponent {
  constructor(
    private _apiService: ApiService
  ) {}

  // currentSeason = 2022;
  // today = formatDate(new Date(), 'MM/dd/yyy', 'en');
  // owners = new Array<OwnerTeam>();
  // nbaTeams;
  // places = [ '1st', '2nd', '3rd', '4th', '5th', '6th' ];
  // isLoading = false;

  // async ngOnInit() {
  //   this.isLoading = true;
  //   await this.getTeams();
  //   debugger;
  //   await this.setupUsers();
  //   this.getData();
  // }

  // async getData() {
  //   (await this._apiService.getNBARecords()).subscribe(response => this.setupTeamData(response));
  // }

  // async getTeams() {
  //   (await this._apiService.getNBATeams()).subscribe(res => {
  //     this.nbaTeams = res});
  // }

  // setupTeamData(data) {
  //   debugger;
  //   this.owners.forEach((owner: OwnerTeam) => {
  //     owner?.teams?.forEach(team => {
  //       var teamRecord = data.find(t => t.team['nickname'] === team?.name);
  //       team.conferenceStanding = teamRecord.conference.rank;
  //       team.divisionStanding = teamRecord.division.rank;
  //       team.logo = teamRecord.team.logo;
  //       team.wins = teamRecord.win.total;
  //       team.losses = teamRecord.loss.total;
  //       team.awayWins = teamRecord.win.away;
  //       team.homeWins = teamRecord.win.home;
  //       team.awayLosses = teamRecord.loss.away;
  //       team.homeLosses = teamRecord.loss.home;
  //       team.winStreak = teamRecord.winStreak;
  //       team.streak = teamRecord.streak;
  //     })
  //     owner.totalWins = this._getTotals(owner.teams, 'wins');
  //     owner.totalLosses = this._getTotals(owner.teams, 'losses');
  //     owner.totalHomeWins = this._getTotals(owner.teams, 'homeWins');
  //     owner.totalAwayWins = this._getTotals(owner.teams, 'awayWins');
  //     owner.totalAwayLosses = this._getTotals(owner.teams, 'awayLosses');
  //     owner.totalHomeLosses = this._getTotals(owner.teams, 'homeLosses');
  //   });
  //   this.owners.sort((a, b) => a?.totalWins! > b?.totalWins! ? -1 : a?.totalWins! < b?.totalWins! ? 1 : 0);
  //   this.owners.forEach((owner, index) => {
  //     owner.gamesBack = (index < 2 ) ? "" : owner.totalWins === this.owners[index - 1].totalWins ? ', next place: Tied'  : `, next place: ${this.owners[index - 1]?.totalWins! - owner?.totalWins!}`;
  //     owner.gamesBackFirst = (index === 0) ? "" : `Behind First: ${this.owners[0]?.totalWins! - owner?.totalWins!}`;
  //   })

  // }

  // setupUsers(): void {
  //   this.owners.push(new OwnerTeam({ ownerName: 'Josh', year: this.currentSeason, teamList: [ 'Grizzlies', 'Clippers', 'Suns', 'Raptors', 'Spurs' ]}, this.nbaTeams));
  //   this.owners.push(new OwnerTeam({ ownerName: 'Kenny', year: this.currentSeason, teamList: [ 'Bucks', 'Heat', 'Timberwolves', 'Hornets', 'Pistons' ]}, this.nbaTeams));
  //   this.owners.push(new OwnerTeam({ ownerName: 'Corey', year: this.currentSeason, teamList: [ 'Warriors', 'Nuggets', 'Hawks', 'Wizards', 'Pacers' ]}, this.nbaTeams));
  //   this.owners.push(new OwnerTeam({ ownerName: 'Andy', year: this.currentSeason, teamList: [ 'Celtics', 'Cavaliers', 'Pelicans', 'Knicks', 'Kings' ]}, this.nbaTeams));
  //   this.owners.push(new OwnerTeam({ ownerName: 'Robbie', year: this.currentSeason, teamList: [ 'Lakers', 'Mavericks', 'Nets', 'Trail Blazers', 'Thunder' ]}, this.nbaTeams));
  //   this.owners.push(new OwnerTeam({ ownerName: 'Evan', year: this.currentSeason, teamList: [ 'Bulls', '76ers', 'Magic', 'Jazz', 'Rockets' ]}, this.nbaTeams));
  // }

  // private _getTotals(array, property) {
  //   var sum = array.reduce((accumulator, object) => {
  //     return accumulator + object[property];
  //   }, 0);
  //   return sum;
  // }
}
