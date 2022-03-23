1 создать шаблон для страниц. (пример Main) https://github.com/badimalex/job-search/blob/master/src/layouts/main.tsx


2 создать страницу для специлистов
  (прим https://github.com/badimalex/job-search/blob/master/src/pages/resumes.tsx)
  (подключить редьюсер, хук, вытащить специалистов по адресу /resumes)
  вывести список специалистов
    карточка специалист включает в себя
    имя, аватар,  квалификаця, тэги знания (html, css, react, php), стаж (лет)

  создать файл с версткой в папке pages/resumes.tsx
    верстка содержит вызов специалистов из хука useResumes
    и бежит по нему с отрисовкой карточки специалиста
    типа list.map(item=> <ResumeItem ... )
    затипизировать ResumeItem, пример карточки:

    |аватар|имя пользователя (Стаж (8 лет))
            -----------------
            квалификаця (junior/senior/middle),
            Тэги(html,css,php)

  кастомный хук init/useResumes.ts (прим https://github.com/badimalex/job-search/blob/master/src/init/useResumes.ts)
    1.селектором вытягиваем и этот же список ретерним в хуке
    2. вешаем эффект react.useEffect и вытягиваем по адресу https://my-job-api-778.herokuapp.com/resumes и вытягиваем список резюме, и тут же диспатчим в редьюсер

  сделать редьюсер init/resumes.ts (прим https://github.com/badimalex/job-search/blob/master/src/init/resumes.ts)
    просто обрабатывает диспатч из кастомного хука и ложит список специалистов в стор

3 инпут для поиска
  добавить просто в шапку страницы pages/resumes.tsx инпут поиска

4 маккет фильтров по специалистам https://career.habr.com/resumes (фильтр по квалификация, тэги навыки, стаж)
   добавить справа колонку-сайдбар и в ней просто вывести компоненты из муи
   квалификация - import Select from '@mui/material/Select';
   тэги - import Select from '@mui/material/Select';
   стаж - import TextField from '@mui/material/TextField';

5 фильтр по специальностям (доработка useResumes хука)
  фильтрация происходит на бэке, пример запроса получение резюме по двум тэгам
  https://my-job-api-778.herokuapp.com/resumes?tags[]=php&tags[]=html
  пример запроса на получение по тэгам+квалификации
  https://my-job-api-778.herokuapp.com/resumes?tags[]=php&tags[]=html&level=Senior

  соотв. нам нужно построить объект фильтра чтобы его отправить в параметрах.
  тоесть вот это ?tags[]=php&tags[]=html&level=Senior нужно отправить из фронта

  заводим в кастомном хуке useResumes под это дело объект
  search,setSearch по умолчаниею {
    tags: [],
    level: ''
  }
  состояние по умолчанию понадобится нам в самих компонентах как состояние фильтра.

  пробрасываем состояния по умолчанию из хука в компонент страницы сначала

  return {
    ...что то там
    list,
    search

  }

  и в компоненте страницы проидываем в компоненты фильтра

  <SelectLevel
    ...
    value={search.level}


  тоже самое для всех остальныъ
  tags={search.tags} итд.

  переписываем компоненты фильтров избавляемся от состояний которые шли по умолчанию из mui (useState)

  удаляем
   const [level, setLevel] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  и вытягиваем наше состояние из пропс его же скармливаем компоненту


  дальше
  создаем функции обновления фильтра в хуке которые мы пробросим в каждый из компонентов фильтра

  const handleChangeLevel
  const handleChangeTags
  const handleChangeExperice

  что делает данная функция
  на примере handleChangeLevel

    const handleChangeLevel = (value) = { // 1 получить значение
     const newFilter = { //  строим новый объек фильтра
       ...search,
       level: value
     }
     setSearch(newFilter) // изменили состояние, чтобы компонент фильтра перересовался и было видно что выбрано пользователем
     и дальше делаем запрос на получение новых резюме учитывай данные фильтра
     fetchResumes(newFilter).then(res=>dispatch(setResumes(res.data))) // функцию fetchResumes стоит доработать с учетом параметров фильтрации пример (https://github.com/badimalex/job-search/blob/master/src/api/queries.ts#L23)
    ! все, после выполнения запроса данные задиспатчатся  в стор, и list возвращаемый из хука изменится, после изменения list, произойдет автоматическая перересовка компонента страницы и у нас выведутся карточки резюме которые соответтвуют фильтру.
    }

6. по аналогии со страницей резюме, оживить фильтры вакансий на главной странице.

  какие у нас есть фильтра на главноей
  1 сфера деятельности (бэкенд/фронтенд и тд)
  https://my-job-api-778.herokuapp.com/?activity[]=front&activity[]=backend

  2 квалификация + сфера деятельности
  https://my-job-api-778.herokuapp.com/?activity[]=front&activity[]=backend&level[]=senior&level[]=middle

  3 ЗП
  https://my-job-api-778.herokuapp.com/?salary=2000

  4. валюта
  https://my-job-api-778.herokuapp.com/?salary=2000&currency=eur

  с чего начать.

  1. повторяем пункт 5 для резюме, только там где был запрос на резюме
  https://my-job-api-778.herokuapp.com/resumes
  у нас будет запрос который был для главноей
  https://my-job-api-778.herokuapp.com/

  2. дорабатываем хук useJobs вместо useREsumes.
