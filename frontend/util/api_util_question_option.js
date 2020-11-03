// export const fetchOptions = (questionId) => (

//   $.ajax({
//     url: `/api/questions/${questionId}/question_options`,
//     method: "GET",
//   })
// );

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
