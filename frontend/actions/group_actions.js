import * as APIUtil from "../util/api_util_group";

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups,
  };
};

const receiveGroup = (group) => {
  return {
    type: RECEIVE_GROUP,
    group,
  };
};

const removeGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    groupId,
  };
};

/*
1. `requestGroups`
2. `requestGroup(groupId)`
3. `createGroup(group)`
4. `updateGroup(group)`
5. `deleteGroup(groupId)`
*/

export const requestGroups = () => (dispatch) => {
  return APIUtil.fetchGroups().then((groups) =>
    dispatch(receiveGroups(groups))
  );
};

export const requestGroup = (groupId) => (dispatch) => {
  return APIUtil.fetchGroup(groupId).then((group) =>
    dispatch(receiveGroup(group))
  );
};

export const creategroup = (group) => (dispatch) => {
  return APIUtil.createGroup(group).then((group) =>
    dispatch(receiveGroup(group))
  );
};

export const updategroup = (group) => (dispatch) => {
  return APIUtil.updateGroup(group).then((group) =>
    dispatch(receiveGroup(group))
  );
};

export const deletegroup = (groupId) => (dispatch) => {
  return APIUtil.deleteGroup(groupId).then(() =>
    dispatch(removeGroup(groupId))
  );
};
