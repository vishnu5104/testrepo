// types.ts or a similar file
export interface User {
  name: string;
  race: string;
  // Add other fields if necessary
}

export interface GetUsersResponse {
  data: User[];
}
