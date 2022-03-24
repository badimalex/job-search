import MainLayout from "../layouts/main";
import ResumeItem from "../components/ResumeItem";
import SelectLevel from "../components/SelectLevel";
import SelectTags from "../components/SelectTags";
import ExperienceFilter from "../components/ExperienceFilter";
import { useResumes } from "../init/useResumes";

/*
  /resumes GET
  => [{}, {}]

  /resumes?tags[]=php&tags[]=react

  /resumes

  {
    tags: ['react', 'php'],
    experience: 27,
    level: 'senior'
  }
*/

export default function Expenses() {
  const { list, search, onUpdateLevel, onUpdateTags } = useResumes();

  return (
    <MainLayout>
      <SelectLevel selectedLevel={search.level} onUpdateLevel={onUpdateLevel} />
      <SelectTags selectedTags={search.tags} onUpdateTags={onUpdateTags} />
      <ExperienceFilter />

      {list.map(resume => (
        <ResumeItem key={resume.id} {...resume} />
      ))}
    </MainLayout>
  );
}
