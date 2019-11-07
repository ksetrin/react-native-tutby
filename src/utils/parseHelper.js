const parseString = require('react-native-xml2js').parseString;

export const xmlToJson = xml => {
  let data = null;
  parseString(xml, (err, {rss: {channel}}) => {
    if (err) {
      throw new Error(err);
    }
    data = channel[0];
  });
  return data;
};
