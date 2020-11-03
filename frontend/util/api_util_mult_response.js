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
