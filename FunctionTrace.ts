interface StashFunctionTrace {
    traceLevel?: number;
    trace: FunctionTrace;
}

class FunctionTraceStash {
    level: number; // 当前层级，默认为0
    traceList: StashFunctionTrace[]; // Trace数组

    constructor() {
        this.level = 0;
        this.traceList = [];
    }

    // 开始本次 Trace
    // 添加该 Trace 之后将 level + 1，便于记录当前 Trace 的层次
    start(trace: FunctionTrace) {}

    // 结束本次 Trace
    end() {}

    // 根据 traceId 获取某个 Trace 对象
    getTrace(traceId: string): StashFunctionTrace | null {
        return this.traceList.find((stashTrace) => stashTrace.trace.traceId === traceId) || null;
    }

    // 打印 Trace 堆栈信息
    printTraceList(): string {
        const traceStringList: string[] = [];
        this.traceList.forEach((stashTrace) => {
            let prefix = '';
            if (stashTrace.traceLevel && stashTrace.traceLevel > 0) {
                // 根据层次，前置 tab
                prefix = new Array(stashTrace.traceLevel).join('\t');
            }
            traceStringList.push(prefix + stashTrace.trace.print());
        });
        return traceStringList.join('\n');
    }

    // 打印函数调用次数统计
    printTraceCount(className?: string, functionName?: string) {}

    // 重放该堆栈
    replay() {}

    // 清空该堆栈信息
    clear() {}
}