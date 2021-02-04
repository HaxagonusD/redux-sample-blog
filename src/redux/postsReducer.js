import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

const getPosts = () => {
  return {
    type: "posts/getPosts",
  };
};

const getPostsSucessful = (payload) => {
  return {
    type: "posts/getPostsSucessful",
    payload,
  };
};

const getPostsFailure = () => {
  return {
    type: "posts/getPostsFailure",
  };
};

export function fetchPosts() {
  return async function (dispatch) {
    dispatch(getPosts());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(getPostsSucessful(data));
    } catch (error) {
      console.log(error);
      dispatch(getPostsFailure());
    }
  };
}

export default function postsReducer(state = initialState, action) {
  const lookUpTable = {
    "posts/getPosts": function () {
      return { ...state, loading: true };
    },
    "posts/getPostsSucessful": function () {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hasError: false,
      };
    },
    "posts/getPostsFailure": function () {
      return { ...state, hasError: true };
    },
  };
  return lookUpTable[action.type] ? lookUpTable[action.type]() : state;
}
