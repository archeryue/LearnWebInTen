<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']" :router="true">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Information
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="/1-1">Table</el-menu-item>
              <el-menu-item index="/1-2">Calendar</el-menu-item>
              <el-menu-item index="/1-3">Progress</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="/1-x">Option x</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>Navigator
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="/2-1">Option 1</el-menu-item>
              <el-menu-item index="/2-2">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>Settings
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="/3-1">Option 1</el-menu-item>
              <el-menu-item index="/3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="/3-3">Option 3</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import Table from './components/Table.vue'
import Calendar from './components/Calendar.vue'
import Progress from './components/Progress.vue'
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  border-radius: 3px;
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-9);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>