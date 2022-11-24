<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <van-button type="primary">按钮</van-button>
    </view>
    <view class="van-ellipsis"
      >按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮按钮</view
    >
  </view>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
const title: Ref<string> = ref('Hello');
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
