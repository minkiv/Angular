export interface User {
  name: string;
  maSV: string;
  age: number;
  gender: string;
}
export interface IUser {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}
export interface Role {
  _id: string;
}
