interface User {
  firstName: string;
  lastName: string;
  age: number;
  isValid: boolean;
}

export function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}
