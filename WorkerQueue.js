window.WorkerQueue = (function () {

    function validateParams(queueName, processingFunc) {
        if (queueName == null || processingFunc == null) {
            throw new Error("Queue name and function are required");
        } else if (typeof queueName != 'string') {
            throw new Error("Queue name must be a string");
        } else if (typeof processingFunc != 'function') {
            throw new Error("Processing function must be of type function");
        }
    }

    return {
        createQueue: function(queueName, processingFunc) {
            validateParams(queueName, processingFunc);
        }
    };
})();
