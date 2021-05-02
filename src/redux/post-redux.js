import { createReducer, createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  postRequest: [""],
  getPostSucceed: ["post"],
  postFailed: ["error"],
})

export const PostTypes = Types

export const INITIAL_STATE = {
  listPost: [],
  errorMessage: "test message",
}

export const postRequest = (state) => {
  return {
    ...state,
  }
}

export const getPostSucceed = (state, { post }) => {
  return {
    ...state,
    listPost: post.listPost,
    errorMessage: post.errorMessage,
  }
}

export const postFailed = (state, { error }) => {
  return {
    ...state,
    errorMessage: error,
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [PostTypes.POST_REQUEST]: postRequest,
  [PostTypes.GET_POST_SUCCEED]: getPostSucceed,
  [PostTypes.POST_FAILED]: postFailed,
})

export default Creators
