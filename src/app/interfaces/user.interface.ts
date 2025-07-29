export interface UserInterface {
  id: number;
  username: string;
}

export interface UserAuthInterface {
  token: string;
  user: UserInterface;
}