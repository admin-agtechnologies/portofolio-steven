// src/components/ui/SkillTag.tsx

interface SkillTagProps {
  name: string;
}

const SkillTag = ({ name }: SkillTagProps) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-3 rounded-lg text-sm">
      {name}
    </div>
  );
};

export default SkillTag;