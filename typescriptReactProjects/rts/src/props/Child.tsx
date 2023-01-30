interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Hi there! This is child with color {color}</div>;
};
