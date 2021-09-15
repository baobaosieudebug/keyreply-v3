<template>
  <div class="chat-bot">
    <div class="action">
      <el-button type="primary" size="small" @click="openModal">
        <i class="el-icon-edit"></i> Add
      </el-button>
      <chat-bot-modal ref="chatFormModal" />
    </div>

    <div class="table" v-if="tableData">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(item, index) in langSetting"
          :label="item.toUpperCase()"
          :name="item"
          :key="index"
        >
          <chat-bot-table :tableData="tableData" :lang="item" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import ChatBotTable from './ChatBotTable.vue';
import ChatBotModal from './ChatBotModal.vue';

import { computed, defineComponent, ref, watch } from '@vue/runtime-core';
import { useQuery, useResult } from '@vue/apollo-composable';
import { getAll } from '../graphql/queries';
import { useStore } from 'vuex';
import { ChatNode } from '../types/chatbot.interface';

export default defineComponent({
  components: { ChatBotTable, ChatBotModal },
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);
    const langSetting = ['vi', 'en'];
    const activeName = ref('vi');
    const { result, loading } = useQuery(getAll);

    /**
     * id :
     * language : [
     *  {
     *    lang : ,
     *    text : ,
     *    buttons : [],
     *    conditions : [],
     *    regex : []
     *  }
     * ]
     */

    const setChatbotData = (payload: ChatNode[]) =>
      store.commit('chatbot/SET_CHATBOT_DATA', payload);

    watch(result, (value) => {
      setChatbotData(value.getAll[0].content);
    });

    const tableData = computed(() => store.getters['chatbot/getChatbotData']);

    console.log(result);

    return {
      dialogVisible,
      activeName,
      tableData,
      loading,
      langSetting
    };
  },
  methods: {
    openModal() {
      (this.$refs.chatFormModal as any).open();
    }
  }
});
</script>

<style lang="scss" scoped>
i {
  margin-right: 5px;
}

.table {
  margin-top: 20px;
}
</style>
