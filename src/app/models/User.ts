interface IUser {
  name: string;
  age: number;
}

export default class User {
  name = "Caio Nunes";
  age = 22;

  toJSON(): IUser {
    return {
      name: this.name,
      age: this.age,
    };
  }
}
