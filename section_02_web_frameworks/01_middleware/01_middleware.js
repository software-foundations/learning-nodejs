/*
 * middleware pattern (chain of responsabilitt pattern)

 * ctx: context object passed from a middleware to another
 * next: object which, when triggered, redirect to the next step in the chain
 * step1 and step2: functions
*/
const step1 = (ctx, next) => {
    ctx.value1 = 'middleware1'
    next()
}

const step2 = (ctx, next) => {
    ctx.value2 = 'middleware2'
    next()
}

const step3 = ctx => ctx.value3 = 'middleware3'

const exec = (ctx, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length &&
        middlewares[index](ctx, () => execStep(index + 1))
    }
    execStep(0)
}

const ctx = {}
exec(ctx, step1, step2, step3)
// exec(ctx, step2, step1, step3)
console.log(ctx)
