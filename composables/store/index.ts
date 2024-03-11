export const useMainStore = defineStore('main', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        setCount(count: number) {
            console.log(count)
            this.count = count
        }
    },
})