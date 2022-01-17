export interface FieldType {
  name: string;
  position: number;
}

export interface FormationField {
  players: Array<FieldType | undefined>;
}
