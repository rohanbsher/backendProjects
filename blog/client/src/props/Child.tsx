interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
	{color}
	<button onClick={onClick}>Click Me</button>
	</div>;
};

// Another way to define a function component in TypeScript
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
	{color}
	<button onClick={onClick}>Click Me</button>
	</div>;
};
