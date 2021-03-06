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

const mockDocument = '<ul class="article__comments-list"><div class="article__comments-num"></div><div class="article__comments-sort">Sort: <a class="sort__likes">Likes</a> | <a class="sort__date">Newest</a></div></ul>';

global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(mockCommentsData)
  });

describe('Comments', () => {
  beforeEach(() => {
      comments = new Comments();
      document.body.innerHTML = mockDocument;
  });

  afterEach(() => {
    document.body.innerHTML = mockDocument;
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
    expect(document.querySelector('.article__comments-num span').innerHTML).toBe('2 comments');
  });

  test("commentHTMLMarkup", async () => {
    await comments.getCommentsData();

    const commentHTMLMarkup = jest.spyOn(comments, 'commentHTMLMarkup');
    comments.commentHTMLMarkup(mockCommentsData);
    expect(commentHTMLMarkup).toHaveBeenCalled();
  });

  test("appendComments", async () => {
    await comments.getCommentsData();

    const appendComments = jest.spyOn(comments, 'appendComments');
    comments.appendComments(mockCommentsData);
    expect(appendComments).toHaveBeenCalled();
  });

  test("sortBy", async () => {
    await comments.getCommentsData();

    const sortBy = jest.spyOn(comments, 'sortBy');
    const appendComments = jest.spyOn(comments, 'appendComments');
    comments.sortBy(mockCommentsData);
    expect(sortBy).toHaveBeenCalled();
    document.querySelector('.sort__date').click();
    expect(appendComments).toHaveBeenCalled();
    document.querySelector('.sort__likes').click();
    expect(appendComments).toHaveBeenCalled();
  });

  test("clearComments", async () => {
    await comments.getCommentsData();

    const clearComments = jest.spyOn(comments, 'clearComments');
    expect(document.querySelector('.article__comments-num span').innerHTML).toBe('2 comments');
    comments.clearComments();
    console.log(document.querySelector('.article__comments-num span').innerHTML);
    expect(clearComments).toHaveBeenCalled();
  });

  test("returns undefined when exception", async () => {
    fetch = () =>
      Promise.resolve({
        json: () => Promise.reject("ERR"),
      });
    const data = await comments.getCommentsData();
    expect(data).toEqual(undefined);
  });

  test("returns undefined when no data", async () => {
    fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve('')
      });
    const data = await comments.getCommentsData();
    expect(data).toEqual(undefined);
  });

});