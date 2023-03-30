export type Character = { name: string };

export const StarWarsCharacter: React.FC<Character> = ({ name }) => (
  <div>
    Person from the Star War People - <em>{name}</em>
  </div>
);
