import videoApi from "@/api/video";
const setLoading = (context: any, data: boolean) => {
  context.commit("SET_LOADING", data);
};
const setVideo = async (context: any) => {
  const data = await videoApi.getVideo();
  console.log("dat1a", data);
  context.commit("SET_VIDEO", data);
};

export default { setLoading, setVideo };
