export interface UserAuthModel {
  token: string;
}

export interface UserModel {
  id: number;
  fullname: string;
  email: string;
  dob: string;
  auth: UserAuthModel;
}
