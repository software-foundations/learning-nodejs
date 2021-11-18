// A factory returns new instance
module.exports = () => {
    return {
        value: 1,
        incrementValue() {
            this.value++
        }
    }
}