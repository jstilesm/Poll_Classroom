export const login = (visitor) =>
  $.ajax({
    url: "/api/visitors",
    method: "POST",
    data: { visitor },
  });
