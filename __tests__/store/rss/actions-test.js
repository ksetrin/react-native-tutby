import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import {
  RSS_FETCH_REQUEST_PENDING,
  RSS_FETCH_REQUEST_SUCCESS,
  rssFetchRequest,
} from '../../../src/store/rss/actions';
import {initialState} from '../../../src/store/rss/reducer';
import {rssRemote} from '../../../src/remotes';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const rssResponse = `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>TUT.BY: Новости ТУТ</title>
    <link>https://news.tut.by/</link>
    <description>Последние новости образования, здравоохранения, транспорта, ЖКХ и других сфер. Новости экономики и политики в мире, происшествия и др.</description>
    <language>ru</language>
    <image>
      <url>https://img.tyt.by/i/rss/news/logo.gif</url>
      <title>TUT.BY: Новости ТУТ</title>
      <link>https://news.tut.by/</link>
    </image>
    <pubDate>Thu, 07 Nov 2019 17:09:47 +0300</pubDate>
    <lastBuildDate>Thu, 07 Nov 2019 17:06:41 +0300</lastBuildDate>
    <ttl>10</ttl>
    <atom:link href="https://news.tut.by/rss/all.rss" rel="self" type="application/rss+xml" />
    <item>
      <title>Две литовские компании год проводят эксперимент: ввели 6-часовой рабочий день</title>
      <link>https://finance.tut.by/news660488.html?utm_campaign=news-feed&#x26;utm_medium=rss&#x26;utm_source=rss-news</link>
      <description>&#x3C;img src="https://img.tyt.by/thumbnails/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg" width="72" height="49" alt="Фото: Reuters" border="0" align="left" hspace="5" /&#x3E;Две действующие в Литве компании год назад начали эксперимент - сократили рабочий день с 8 до 6 часов. Чем закончился эксперимент?&#x3C;br clear="all" /&#x3E;</description>
      <atom:author>
        <atom:name>Delfi.lt</atom:name>
        <atom:uri>http://ru.delfi.lt</atom:uri>
      </atom:author>
      <category domain="https://finance.tut.by/rubric/offtop/">Офтоп</category>
      <enclosure url="https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg" type="image/jpeg" length="251448" />
      <guid isPermaLink="true">https://finance.tut.by/news660488.html?utm_campaign=news-feed&#x26;utm_medium=rss&#x26;utm_source=rss-news</guid>
      <pubDate>Thu, 07 Nov 2019 17:06:00 +0300</pubDate>
      <media:content url="https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg" type="image/jpeg" medium="image" height="813" width="1200" fileSize="251448" />
    </item>
  </channel>
</rss>`;

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('rssFetchRequest success', async () => {
    fetchMock.getOnce(rssRemote, {
      headers: {'content-type': 'application/json'},
      body: rssResponse,
    });
    const expectedActions = [
      {type: RSS_FETCH_REQUEST_PENDING},
      {
        type: RSS_FETCH_REQUEST_SUCCESS,
        title: ['TUT.BY: Новости ТУТ'],
        image: [{url: ['https://img.tyt.by/i/rss/news/logo.gif'], title: ['TUT.BY: Новости ТУТ'], link: ['https://news.tut.by/']}],
        newsList: [{"title":["Две литовские компании год проводят эксперимент: ввели 6-часовой рабочий день"],"link":["https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news"],"description":["<img src=\"https://img.tyt.by/thumbnails/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg\" width=\"72\" height=\"49\" alt=\"Фото: Reuters\" border=\"0\" align=\"left\" hspace=\"5\" />Две действующие в Литве компании год назад начали эксперимент - сократили рабочий день с 8 до 6 часов. Чем закончился эксперимент?<br clear=\"all\" />"],"atom:author":[{"atom:name":["Delfi.lt"],"atom:uri":["http://ru.delfi.lt"]}],"category":[{"_":"Офтоп","$":{"domain":"https://finance.tut.by/rubric/offtop/"}}],"enclosure":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","length":"251448"}}],"guid":[{"_":"https://finance.tut.by/news660488.html?utm_campaign=news-feed&utm_medium=rss&utm_source=rss-news","$":{"isPermaLink":"true"}}],"pubDate":["Thu, 07 Nov 2019 17:06:00 +0300"],"media:content":[{"$":{"url":"https://img.tyt.by/n/reuters/05/b/bezrabotica_tuneyadstvo_rabota_reuters_rtr4fw3u.jpg","type":"image/jpeg","medium":"image","height":"813","width":"1200","fileSize":"251448"}}]}],
      },
    ];
    const store = mockStore(initialState);
    await store.dispatch(rssFetchRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
