const listHelper = require("../utils/list_helper");

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
];

const listWithOneBlog = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  }
];

describe("total likes", () => {
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });

  test("when list has only one blog equals the like of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(36);
  });
});

describe("favorite blog", () => {
  test("should return undefined if no blogs in array", () => {
    expect(listHelper.favoriteBlog([])).toEqual(undefined);
  });

  test("should return most liked blog", () => {
    const expected = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    };

    const { title, author, likes } = listHelper.favoriteBlog(blogs);
    const result = { title, author, likes };

    expect(result).toEqual(expected);
  });
});

describe("author with most blogs", () => {
  test("should return undefined if no blogs in array", () => {
    expect(listHelper.mostBlogs([])).toEqual(undefined);
  });

  test("should return author and blogs for array with just one blog", () => {
    const result = listHelper.mostBlogs(listWithOneBlog);
    const expected = {
      author: listWithOneBlog[0].author,
      blogs: listWithOneBlog.length
    };
    expect(result).toEqual(expected);
  });

  test("should return author with most blogs and count of blogs", () => {
    const result = listHelper.mostBlogs(blogs);
    const expected = {
      author: "Robert C. Martin",
      blogs: 3
    };
    expect(result).toEqual(expected);
  });
});

describe("author with most likes", () => {
  test("should return undefined if no blogs in array", () => {
    expect(listHelper.mostLikes([])).toEqual(undefined);
  });

  test("should return author and likes if just one blog", () => {
    const result = listHelper.mostLikes(listWithOneBlog);
    const expected = {
      author: listWithOneBlog[0].author,
      likes: listWithOneBlog[0].likes
    };
    expect(result).toEqual(expected);
  });

  test("should return author with most total likes", () => {
    const result = listHelper.mostLikes(blogs);
    const expected = {
      author: "Edsger W. Dijkstra",
      likes: 17
    };
    expect(result).toEqual(expected);
  });
});

module.exports = { initialBlogs: blogs };
