const datas = require("./raw");

const cleanDatas = datas.map((element) => {
  return {
    videoId: element.id.videoId,
    title: element.snippet.title,
  };
});
console.log(cleanDatas);
export default cleanDatas;
