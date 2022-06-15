//Classes

class LeagueNBA {
  //Não tem necessidade de definir as propriedades aqui:
  // public club: string,
  // public players: string,
  // public city: string,
  // private avaliable: boolean

  //função constructor esta tipando os dados
  constructor(
    public club: string,
    public players: string,
    public city: string,
    private avaliable: boolean, //Pode ser acessada somente pela própria classe.
    protected wage: number //Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.
  ) {
    //Não há necessidade de inicializar as propriedades aqui:
    this.club = club;
    this.players = players;
    this.city = city;
    this.avaliable = avaliable;
    this.wage = wage;
  }
  //Função para poder ver os dados da classe
  retornaDados() {
    //Função para poder acessar os dados 'Private' e 'Protected'
    return `Podera jogar a proxima partida...... ${this.avaliable}
      Quanto ele vai ganhar........ ${this.wage}`;
  }
}
// atribuindo a classe LeagueNBA a uma variavel
const team1 = new LeagueNBA('Celtic', 'Jason Tatum', 'Boston', true, 500);
const team2 = new LeagueNBA('Warriors', 'Steph Curry', 'San Francisco', true, 800);

//Alguns exemplos de como ver os dados das classes.
console.log(team1.club, team1.players, team1.city);
console.log(team2.club, team2.players, team2.city);

console.log(`O principal jogador do Celtics é ${team1.players}`);
console.log(`O principal jogador do Warriors é ${team2.players}`);

console.log(team1.retornaDados());

//Exemplo de classe 'filha'
class Color extends LeagueNBA {
  constructor(
    public colorsShirt: string,
    club: string,
    players: string,
    city: string,
    avaliable: boolean,
    wage: number
  ) {
    super(club, players, city, avaliable, wage);
    this.colorsShirt = colorsShirt;
  }
  retornaDados2() {
    //Função para poder acessar os dados 'Private' e 'Protected'
    return `A cor da camisa é..... ${this.colorsShirt}
    Quanto ele vai ganhar........ ${this.wage}`;
  }
}
const team3 = new Color ('Verde','Celtic', 'Al Horford', 'Boston', true,  500 )
console.log(team3);
console.log(team3.retornaDados2());

