export interface Resi {
  status: string;
  courier: string;
  awb: string;
  history: History[];
}

export interface History {
  id: string;
  step: string;
  desc: string;
}
