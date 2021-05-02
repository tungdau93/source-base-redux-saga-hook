import { put, call } from "redux-saga/effects"
import postActions from "../redux/post-redux"
// import axios from "axios"
import { get } from "../services/api.ts"

const postSagas = {
  *getPost(action) {
    try {
      const listPost = yield call(() => {
        return get("posts")
      })

      if (listPost.status === 200) {
        yield put(
          postActions.getPostSucceed({
            listPost: listPost.data,
            errorMessage: "Succeed!",
          })
        )
      } else {
        yield put(postActions.postFailed("Lỗi mẹ rồi"))
      }
    } catch (error) {
      yield put(postActions.postFailed(error))
    }
  },
}

export default postSagas
