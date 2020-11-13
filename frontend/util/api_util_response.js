export const fetchResponses = () =>
  $.ajax({
    url: "/api/responses",
    method: "GET",
  });

export const fetchResponse = (responseId) =>
  $.ajax({
    url: `/api/responses/${responseId}`,
    method: "GET",
  });

// mult_response = {question_options_id: 1}
