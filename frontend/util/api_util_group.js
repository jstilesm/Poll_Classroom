// 1. `fetchgroups`
// 2. `fetchGroup(groupId)`
// 3. `createGroup(group)`
// 4. `updateGroup(group)`
// 5. `deleteGroup(groupId)`

export const fetchGroups = () =>
  $.ajax({
    url: "api/groups",
    method: "GET",
  });

export const fetchGroup = (groupId) =>
  $.ajax({
    url: `api/groups/${groupId}`,
    method: "GET",
  });

export const createGroup = (group) =>
  $.ajax({
    url: "api/groups",
    method: "POST",
    data: { group },
  });

export const updateGroup = (group) =>
  $.ajax({
    url: `api/groups/${group.id}`,
    method: "PATCH",
    data: { group },
  });

export const deleteGroup = (groupId) =>
  $.ajax({
    url: `api/groups${groupId}`,
    method: "DELETE",
  });
