interface State {
  chatbotData: [];
}

export default {
  getChatbotData(state: State) {
    return state.chatbotData;
  }
};
