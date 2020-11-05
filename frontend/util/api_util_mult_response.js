export const fetchMultresponses = () =>
  $.ajax({
    url: "/api/mult_responses",
    method: "GET",
  });

export const fetchMultresponse = (mult_responseId) =>
  $.ajax({
    url: `/api/mult_responses/${mult_responseId}`,
    method: "GET",
  });

export const createMultresponse = (mult_response) =>
  $.ajax({
    url: `/api/mult_responses`,
    method: "POST",
    data: { mult_response },
  });

// mult_response = {question_options_id: 1}
