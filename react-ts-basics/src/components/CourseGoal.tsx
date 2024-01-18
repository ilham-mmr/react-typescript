import { FC, PropsWithChildren } from 'react';

// first approach with interface
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// second approach with PropsWithChildren
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// third approach with FC
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDeleteGoal: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  id,
  title,
  children,
  onDeleteGoal,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
