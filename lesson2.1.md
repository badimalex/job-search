// http://google.com/api/v1/resumes
// http://google.com/api/v1/resumes?salary=199&currency=euro

// http://google.com/api/v1/resumes?salary=199&currency=euro

// http://google.com/api/v1/resumes?currency=euro


// 1. // http://google.com/api/v1/resumes?salary=199&currency=''
// 1. // http://google.com/api/v1/resumes?salary=199&currency=euro

const fetchResume = (data = {}) => {
  return fetch(`http://google.com/api/v1/resumes`, data)
}

// resumes.ts
const initialState= {
  list: []
}

const resumes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESUME':
        return {
          list: action.list
        }
      break;

    default:
      return state;
      break;
  }
}

const useResumes = () => {
  const [search, setSearch] = React.useState({
    salary: 0,
    currency: ''
  })

  const { list } = useSelector(state=>state.resumes)

  React.useEffect(() => {
    fetchResume().then(data=>dispatch({
      type: 'SET_RESUME',
      list: data.body
    }))
  }, [])

  const handleChangeSalary = (value) => {
    setSearch({
      ...search,
      salary: value
    })
    fetchResume(search).then(data=>dispatch({
      type: 'SET_RESUME',
      list: data.body
    }))
  }

  const handleChangeCurrency = (value) => {
    setSearch({
      ...search,
      currency: value
    })
    fetchResume(search).then(data=>dispatch({
      type: 'SET_RESUME',
      list: data.body
    }))
  }

  return {
    list
  }

}

const App = () => {
  const {list} = useResumes()

  return <div>
    Header
    <input placeholder="ЗП" onChange={(e) => {
      handleChangeSalary(e.target.value)
    }} />

    <select onChange={(e) => {
      handleChangeCurrency(e.target.value)
    }} >
      <option value="euro">Euro</option>
      <option value="rub">Rub</option>
    </select>

    <select onChange={(e) => {
    }} >
      <option value="php">PHP</option>
      <option value="react">React</option>
    </select>

    {
      data.map(item=><p>{item.name}</p>)
    }


    Footer
  </div>
}

