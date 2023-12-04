const setLoading = (context: any, data: boolean) => {
  context.commit("SET_LOADING", data);
};

export default { setLoading };
