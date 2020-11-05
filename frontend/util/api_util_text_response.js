export const fetchTextresponses = () =>
  $.ajax({
    url: "/api/text_responses",
    method: "GET",
  });

export const fetchTextresponse = (text_responseId) =>
  $.ajax({
    url: `/api/text_responses/${text_responseId}`,
    method: "GET",
  });

export const createTextresponse = (text_response) =>
  $.ajax({
    url: `/api/text_responses`,
    method: "POST",
    data: { text_response },
  });
