export const fetchQuestionoptions = () =>
  $.ajax({
    url: "api/question_options",
    method: "GET",
  });

export const fetchQuestionoption = (question_optionId) =>
  $.ajax({
    url: `/api/question_options/${question_optionId}`,
    method: "GET",
  });

export const updateQuestionoption = (question_option) =>
  $.ajax({
    url: `/api/question_options/${question_option.id}`,
    method: "PATCH",
    data: { question_option },
  });
