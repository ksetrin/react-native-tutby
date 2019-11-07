const parseString = require('react-native-xml2js').parseString;

// ретурнить

export const xmlToJson = xml => {
  let data = null;
  // It's odd but this lib works as you see
  parseString(xml, (err, {rss: {channel}}) => {
    if (err) {
      throw new Error(err);
    }
    console.log('+kse-channel[0]', channel[0]);
    data = channel[0];
  });
  return data;
};
