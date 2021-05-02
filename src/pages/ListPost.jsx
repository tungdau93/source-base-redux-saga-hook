import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PostTypes from "../redux/post-redux"

function ListPost() {
  const dispatch = useDispatch()
  const listPost = useSelector((state) => state.post)
  // console.log(listPost)

  useEffect(() => {
    dispatch(PostTypes.postRequest())
  }, [])

  return (
    <div>
      <div>List Post</div>
      <div>{listPost.errorMessage}</div>
      <div>
        {listPost.listPost.map((item) => {
          return <div key={item.id}>{item.title}</div>
        })}
      </div>
    </div>
  )
}

export default ListPost
