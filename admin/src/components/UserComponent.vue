<template>
  <el-container>
    <el-aside>
      <el-scrollbar max-height="400px">
        <div class="user">
          <div class="name-user">User-1</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-2</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-3</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-4</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-5</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-5</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-5</div>
          <div class="status">Status</div>
        </div>
        <div class="user">
          <div class="name-user">User-5</div>
          <div class="status">Status</div>
        </div>
      </el-scrollbar>
    </el-aside>
    <el-container class="container">
      <el-header>
        <div class="currentUser">
          <div class="name-user">Welcome to User-1</div>
          <el-icon class="el-icon-more"></el-icon>
        </div>
      </el-header>
      <el-main>
        <div class="is-user">
          <el-icon class="el-icon-user" color="#409EFC"> </el-icon>
          <div class="text">User chat 1</div>
        </div>
        <div class="is-admin">
          <el-icon color="#409EFC" class="el-icon-user-solid"> </el-icon>
          <div class="text">Admin rep 1</div>
        </div>
        <div class="is-user">
          <el-icon class="el-icon-user" color="#409EFC"> </el-icon>
          <div class="text">User chat again 2</div>
        </div>
        <div class="is-admin">
          <el-icon color="#409EFC" class="el-icon-user-solid"> </el-icon>
          <div class="text">Admin rep again 2</div>
        </div>
        <div class="is-user">
          <el-icon class="el-icon-user" color="#409EFC"> </el-icon>
          <div class="text">User chat again again 3</div>
        </div>
        <div class="is-admin">
          <el-icon color="#409EFC" class="el-icon-user-solid"> </el-icon>
          <div class="text">Admin rep again again 3</div>
        </div>
      </el-main>
      <el-footer>
        <div class="form-input">
          <input
            type="text"
            name=""
            id=""
            class="input-text"
            placeholder="Send something to User"
            required
          />
          <button class="btn-send">Send</button>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({});
</script>

<style scoped>
.el-header,
.el-footer {
  border-radius: 20px;
}
.el-header {
  border-bottom: 1px solid #d3dce6;
}
.el-footer {
  height: 50px;
}

.el-aside {
  width: 20%;
  margin: 60px auto;
  max-height: 50vh;
  border-radius: 20px;
  background-color: #fafafa;
}
.el-container {
  min-height: 88vh;
}
.container {
  border-radius: 20px;
}

.el-main {
  color: var(--el-text-color-primary);
  text-align: center;
  border-radius: 20px;
}

.el-icon {
  font-size: 20px;
}

.user {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  padding: 20px;
  border-radius: 20px;
  border-bottom: 1px solid #d3dce6;
}

.user:hover {
  background-color: #d3dce6;
  cursor: pointer;
}
.user:active {
  background-color: #409eff;
}

.currentUser {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  margin: 0 20px;
}

.form-input {
  width: 100%;
  height: 100%;
}

.input-text {
  width: 80%;
  height: 100%;
  border-radius: 20px;
  font-size: 20px;
  padding-left: 20px;
}

.input-text:focus-visible {
  outline: none;
}

.btn-send {
  width: 20%;
  height: 100%;
  border-radius: 20px;
  font-size: 20px;
}
.btn-send:hover {
  background-color: #67c23a;
  cursor: pointer;
}

.is-admin {
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;
  margin-bottom: 10px;
  align-items: center;
}
.is-admin .text {
  background: #409eff;
  padding: 10px;
  border-radius: 20px;
}
.is-user {
  gap: 20px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  /* justify-content: flex-end; */
}
.is-user .text {
  background-color: #ddd;
  padding: 10px;
  border-radius: 20px;
}
</style>
