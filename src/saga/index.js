import { takeLatest, all } from "redux-saga/effects"
import { PostTypes } from "../redux/post-redux"
import postSaga from "./post-saga"

export default function* rootSagas() {
  yield all([takeLatest(PostTypes.POST_REQUEST, postSaga.getPost)])
}
