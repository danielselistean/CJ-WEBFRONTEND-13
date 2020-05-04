
const fetchApi = new FetchApi("http://localhost:3000")

const containerPosts = document.getElementById('posts');



async function displayPosts() {
  const posts = await fetchApi.getPosts();
  const postsDOM = posts.map(post => post.render());

  console.log(postsDOM);

  postsDOM.forEach(console.log)

  postsDOM.forEach(postDOM => {
    containerPosts.appendChild(postDOM)
  })
}

displayPosts();




/*
    {
        "id": "3",
        "author": "Cosmin",
        "title": "Eu joc minicraft",
        "text": " Contrary to popular belief, Lorem Ipsum is not simply random text. It\n          has roots in a piece of classical Latin literature from 45 BC, making\n          it over 2000 years old. Richard McClintock, a Latin professor at\n          Hampden-Sydney College in Virginia, looked up one of the more obscure\n          Latin words, consectetur, from a Lorem Ipsum passage, and going\n          through the cites of the word in classical literature, discovered the\n          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and\n          1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and\n          Evil) by Cicero, written in 45 BC. This book is a treatise on the\n          theory of ethics, very popular during the Renaissance. The first line\n          of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in\n          section 1.10.32. The standard chunk of Lorem Ipsum used since the\n          1500s is reproduced below for those interested. Sections 1.10.32 and\n          1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also\n          reproduced in their exact original form, accompanied by English\n          versions from the 1914 translation by H. Rackham.",
        "date": "12/03/2020"
    },

*/