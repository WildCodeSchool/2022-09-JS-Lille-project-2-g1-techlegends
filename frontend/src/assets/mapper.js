import datas from "./raw";

const cleanDatas = datas.map((element) => {
  return {
    videoId: element.id.videoId,
    title: element.snippet.title,
  };
});
export default cleanDatas;
