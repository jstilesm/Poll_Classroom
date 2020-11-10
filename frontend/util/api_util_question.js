// 1. `fetchQuestions()`
// 2. `fetchQuestion(questionId)`
// 3. `createQuestion(question)`
// 4. `updateQuestion(question)`
// 5. `deleteQuestion(questionId)`

export const fetchQuestions = () =>
  $.ajax({
    url: "/api/questions",
    method: "GET",
  });

export const fetchQuestion = (questionId) =>
  $.ajax({
    url: `/api/questions/${questionId}`,
    method: "GET",
  });
export const createQuestion = (question) => {
  question = Object.assign({}, question);
  question.question_options_attributes = question.question_options;
  delete question.question_options;
  return $.ajax({
    url: "/api/groups/1/questions",
    method: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({ question }),
  });
};

export const updateQuestion = (question) =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "PATCH",
    data: { question },
  });

export const deleteQuestion = (questionId) =>
  $.ajax({
    url: `/api/questions/${questionId}`,
    method: "DELETE",
  });
