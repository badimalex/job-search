// http://google.com/api/v1/resumes
// http://google.com/api/v1/resumes?salary=199&currency=euro

// http://google.com/api/v1/resumes?salary=199&currency=euro

// http://google.com/api/v1/resumes?currency=euro

// 1. // http://google.com/api/v1/resumes?salary=199&currency=''
// 1. // http://google.com/api/v1/resumes?salary=199&currency=euro

const fetchResume = (data = {}) => {
  return fetch(`http://google.com/api/v1/resumes`, data);
};

/*
/index.tsx

/store/index.ts

/reducers/
  jobs.ts
  resumes.ts
  users.ts

/helpers
  formaMoney.ts
  userName.ts

/pages
  main.ts
  resumes.ts
  vacancies.ts

/components
1.
  Footer
  Header
  VacancySearchInput.ts
  ResumeSearchInput.ts
2.
  /ui
    Footer
    Header
    Sidebar
  /vacancies
    SearchINput
    SortSelect
    TagsSelect
  /resumes
    SearchInput
    SortSelect
    TagsSelect
    SalaryInput

*/

// resumes.ts
export const SET_RESUME = 'SET_RESUME';

const initialState = {
  list: [],
};

type State = {
  list: Resume[];
};

const resumes = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_RESUME:
      return {
        list: action.list,
      };
      break;

    default:
      return state;
      break;
  }
};

type Resume = {
  id: number;
  name: string;
};

type setResumeAction = {
  type: typeof SET_RESUME;
  list: Resume[];
};

type Action = setResumeAction;

const setResumes = (body: Resume[]): Action => {
  return {
    type: SET_RESUME,
    list: body,
  };
};

type SearchType = {
  salary: number;
  currency: string;
};

type State = {
  list: Resume[];
  handleChangeCurrency(value: number): void;
  handleChangeSalary(value: string): void;
};

const useResumes = (): State => {
  const [search, setSearch] = React.useState<SearchType>({
    salary: 0,
    currency: '',
  });

  const { list } = useSelector<AppState, ResumeState>((state) => state.resumes);

  React.useEffect(() => {
    fetchResume().then((data) => dispatch(setResumes(data.body)));
  }, []);

  const handleChangeSalary = (value: number) => {
    setSearch({
      ...search,
      salary: value,
    });
    fetchResume(search).then((data) => dispatch(setResumes(data.body)));
  };

  const handleChangeCurrency = (value: string) => {
    setSearch({
      ...search,
      currency: value,
    });
    fetchResume(search).then((data) => dispatch(setResumes(data.body)));
  };

  return {
    handleChangeSalary,
    handleChangeCurrency,
    list,
  };
};

const App = () => {
  const { list } = useResumes();

  return (
    <div>
      Header
      <input
        placeholder="ЗП"
        onChange={(e) => {
          handleChangeSalary(e.target.value);
        }}
      />
      <select
        onChange={(e: InputEvent) => {
          handleChangeCurrency(e.target.value);
        }}
      >
        <option value="euro">Euro</option>
        <option value="rub">Rub</option>
      </select>
      <select onChange={(e: SelectEvent) => {}}>
        <option value="php">PHP</option>
        <option value="react">React</option>
      </select>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
      Footer
    </div>
  );
};
