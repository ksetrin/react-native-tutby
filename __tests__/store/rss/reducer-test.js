import reducer, {initialState} from '../../../src/store/rss/reducer';
import {
  RSS_FETCH_REQUEST_PENDING,
  RSS_FETCH_REQUEST_SUCCESS,
  RSS_FETCH_REQUEST_FAILURE,
} from '../../../src/store/rss/actions';
import {
  REQUEST_STATE_PENDING,
  REQUEST_STATE_FAILURE,
  REQUEST_STATE_SUCCESS,
} from '../../../src/store/constants';

describe('rss reducer', () => {
  it('RSS_FETCH_REQUEST_PENDING', () => {
    const action = {
      type: RSS_FETCH_REQUEST_PENDING,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      rssFetchRequestState: {
        ...REQUEST_STATE_PENDING,
      },
    });
  });
  it('RSS_FETCH_REQUEST_FAILURE', () => {
    const action = {
      type: RSS_FETCH_REQUEST_FAILURE,
      errorMessage: 'Error',
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      rssFetchRequestState: {
        ...REQUEST_STATE_FAILURE,
        errorMessage: 'Error',
      },
    });
  });
  it('RSS_FETCH_REQUEST_SUCCESS', () => {
    const action = {
      type: RSS_FETCH_REQUEST_SUCCESS,
      title: ['TUT.BY: Новости ТУТ'],
      image: [{url: ['https://img.tyt.by/i/rss/news/logo.gif'], title: ['TUT.BY: Новости ТУТ'], link: ['https://news.tut.by/']}],
      newsList: [{"title":["Две литовские компании год проводят эксперимент: ввели 6-часовой рабочий день"],"link":["https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news"],"description":["<img src=\"https://img.tyt.by/thumbnails/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg\" width=\"72\" height=\"49\" alt=\"Фото: Reuters\" border=\"0\" align=\"left\" hspace=\"5\" />Две действующие в Литве компании год назад начали эксперимент - сократили рабочий день с 8 до 6 часов. Чем закончился эксперимент?<br clear=\"all\" />"],"atom:author":[{"atom:name":["Delfi.lt"],"atom:uri":["http://ru.delfi.lt"]}],"category":[{"_":"Офтоп","$":{"domain":"https://finance.tut.by/rubric/offtop/"}}],"enclosure":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","length":"251448"}}],"guid":[{"_":"https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news","$":{"isPermaLink":"true"}}],"pubDate":["Thu, 07 Nov 2019 17:06:00 +0300"],"media:content":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","medium":"image","height":"813","width":"1200","fileSize":"251448"}}]}],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      rssFetchRequestState: {
        ...REQUEST_STATE_SUCCESS,
      },
      title: ['TUT.BY: Новости ТУТ'],
      image: [{url: ['https://img.tyt.by/i/rss/news/logo.gif'], title: ['TUT.BY: Новости ТУТ'], link: ['https://news.tut.by/']}],
      newsList: [{"title":["Две литовские компании год проводят эксперимент: ввели 6-часовой рабочий день"],"link":["https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news"],"description":["<img src=\"https://img.tyt.by/thumbnails/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg\" width=\"72\" height=\"49\" alt=\"Фото: Reuters\" border=\"0\" align=\"left\" hspace=\"5\" />Две действующие в Литве компании год назад начали эксперимент - сократили рабочий день с 8 до 6 часов. Чем закончился эксперимент?<br clear=\"all\" />"],"atom:author":[{"atom:name":["Delfi.lt"],"atom:uri":["http://ru.delfi.lt"]}],"category":[{"_":"Офтоп","$":{"domain":"https://finance.tut.by/rubric/offtop/"}}],"enclosure":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","length":"251448"}}],"guid":[{"_":"https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news","$":{"isPermaLink":"true"}}],"pubDate":["Thu, 07 Nov 2019 17:06:00 +0300"],"media:content":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","medium":"image","height":"813","width":"1200","fileSize":"251448"}}]}],
    });
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
