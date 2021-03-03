const Comments = require('./comments');

let comments;
let mockCommentsData = [
  {
    "id": 1,
    "date": "2019-04-23T22:26:43.511Z",
    "name": "Dawud Esparza",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
    "likes": 33
  },
  {
    "id": 2,
    "date": "2019-04-23T22:26:43.511Z",
    "name": "Dawud Esparza",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
    "likes": 33
  }
];

describe('Comments', () => {
  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(mockCommentsData),
      });

      comments = new Comments();
      document.body.innerHTML = '<ul class="article__comments-list"><div class="article__comments-num"></div><div class="article__comments-sort">Sort: <a class="sort__likes">Likes</a> | <a class="sort__date">Newest</a></div></ul>';
  });
  

  test("comments exists", () => {
    expect(Comments).toBeDefined();
  });

  test("hasDOMLoaded", () => {
    const hasDOMLoaded = jest.spyOn(comments, 'hasDOMLoaded');
    comments.hasDOMLoaded();
    expect(hasDOMLoaded).toHaveBeenCalled();
  });

  test("getCommentsData", async () => {
    const getCommentsData = jest.spyOn(comments, 'getCommentsData');
    await comments.getCommentsData();
    expect(getCommentsData).toHaveBeenCalled();
  });

  test("commentHTMLMarkup", () => {
    const commentHTMLMarkup = jest.spyOn(comments, 'commentHTMLMarkup');
    comments.commentHTMLMarkup(mockCommentsData);
    expect(commentHTMLMarkup).toHaveBeenCalled();
  });

  test("appendComments", () => {
    const appendComments = jest.spyOn(comments, 'appendComments');
    comments.appendComments(mockCommentsData);
    expect(appendComments).toHaveBeenCalled();
  });

  test("sortBy", () => {
    const sortBy = jest.spyOn(comments, 'sortBy');
    const appendComments = jest.spyOn(comments, 'appendComments');
    comments.sortBy(mockCommentsData);
    expect(sortBy).toHaveBeenCalled();
    document.querySelector('.sort__date').click();
    expect(appendComments).toHaveBeenCalled();
    document.querySelector('.sort__likes').click();
    expect(appendComments).toHaveBeenCalled();
  });

  test("clearComments", () => {
    const clearComments = jest.spyOn(comments, 'clearComments');
    console.log(document.querySelector('.article__comments-num').children);
    comments.clearComments();
    expect(clearComments).toHaveBeenCalled();
    expect(document.querySelector('.article__comments-num').innerHTML).toBe('');
  });

});