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

export const createResponse = (response) =>
  $.ajax({
    url: `/api/responses`,
    method: "POST",
    data: { response },
  });

// mult_response = {question_options_id: 1}
