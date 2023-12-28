export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const repo = await $fetch('https://dm-assignment-commonshare.koyeb.app/api/cars')
    return await repo
  })