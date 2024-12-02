export class Profile {
  personalID: string;
  surnamePerson: string;
  namePerson: string;
  occupationType: string;

  constructor(
    surnamePerson: string,
    namePerson: string,
    occupationType: string
  ) {
    this.personalID = window.self.crypto.randomUUID();
    this.surnamePerson = surnamePerson;
    this.namePerson = namePerson;
    this.occupationType = occupationType;
  }
}
