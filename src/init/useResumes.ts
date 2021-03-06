import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../api/queries";
import { Level } from "../types/Resume";
import { ResumeState, setResumes } from "./resumes";
import { AppState } from "./rootReducer";
import Resume from "../types/Resume";

export type FilterType = {
  experience?: number;
  level: keyof typeof Level | "";
  tags: string[];
};

type Props = {
  onUpdateLevel(value: keyof typeof Level): void;
  onUpdateTags(value: string[]): void;
  search: FilterType;
  list: Resume[];
};

export const useResumes = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<FilterType>({
    tags: [],
    level: ""
  });

  const { list } = useSelector<AppState, ResumeState>(state => state.resumes);

  React.useEffect(() => {
    getResumes().then(res => {
      dispatch(setResumes(res.data));
    });
  }, [dispatch]);

  const onUpdateLevel = (levelValue: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: levelValue
    };
    setSearch(newSearch);
    getResumes(newSearch).then(res => {
      dispatch(setResumes(res.data));
    });
  };

  const onUpdateTags = (tags: []) => {
    const newSearch = {
      ...search,
      tags: tags
    };
    setSearch(newSearch);
    getResumes(newSearch).then(res => {
      dispatch(setResumes(res.data));
    });
  };

  return {
    onUpdateTags,
    onUpdateLevel,
    search,
    list
  };
};
