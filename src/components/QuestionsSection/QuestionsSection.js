import { useCallback, useEffect, useState } from "react";

import fetchData from "../../api";

import FilterList from "../FilterList";
import ResetButton from "../ResetButton";

const searchParams = new URLSearchParams(new URL(window.location.href).search);

function QuestionsSection() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState(null);
  const [questionsForRender, setQuestionsForRender] = useState([]);

  useEffect(() => {
    const data = fetchData();
    const parsedData = JSON.parse(data);
    setQuestions(parsedData);
  }, []);

  useEffect(() => {
    getParamsFromUrl();
  }, []);

  const filterQuestions = useCallback(() => {
    setQuestionsForRender(() => {
      return questions.filter((question) => {
        if (filter?.q || filter?.pos || filter?.co) {
          return (
            question.title.includes(filter.q) ||
            checkPositions(filter.pos, question.positions) ||
            checkCompanies(filter.co, question.companies)
          );
        }

        return true;
      });
    });
  }, [filter?.co, filter?.pos, filter?.q, questions]);

  useEffect(() => {
    if (filter) {
      filterQuestions();
    }
  }, [filter, filterQuestions]);

  function getParamsFromUrl() {
    let data = {};

    for (let value of searchParams) {
      if (value[0] === "co" || value[0] === "pos") {
        value[1] = value[1].split(",");
      }
      data = { ...data, [value[0]]: value[1] };
    }
    setFilter(data);
  }

  function checkPositions(filterPos, questionPos) {
    return filterPos?.every((pos) => questionPos.includes(pos));
  }

  function checkCompanies(filterCo, questionCo) {
    return filterCo?.every((co) => questionCo.includes(co));
  }

  return (
    <>
      {filter && <FilterList filter={filter} />}
      {questionsForRender.length !== 0
        ? questionsForRender.map((question) => (
            <p key={question.title}>{question.title}</p>
          ))
        : questions.map((question) => (
            <p key={question.title}>{question.title}</p>
          ))}
      <ResetButton />
    </>
  );
}

export default QuestionsSection;
