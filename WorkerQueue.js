window.WorkerQueue = (function () {

    var _TIMEOUT = 1000;
    var _queues = {};

    var createQueue = function(queueName, processingFunc, delay) {
        validateParams(queueName, processingFunc);
        _queues[queueName] = {processingFun: processingFunc, items:[], delay: delay};
        startQueue(queueName);
    };

    var pushItem = function(queueName, item) {
        if (_queues[queueName]) {
            if (Object.prototype.toString.call(item) === '[object Array]') {
                for (var i = 0, len = item.length; i < len; i++) {
                    _queues[queueName].items.push(item[i]);
                }
            } else {
                _queues[queueName].items.push(item);
            }
        } else {
            throw new Error('No queue for %s', queueName);
        }
    };

    var destroyQueue = function(queueName) {
        clearInterval(_queues[queueName].interval);
        delete _queues[queueName];
    };

    function validateParams(queueName, processingFunc) {
        if (queueName == null || processingFunc == null) {
            throw new Error('Queue name and function are required');
        } else if (typeof queueName != 'string') {
            throw new Error('Queue name must be a string');
        } else if (typeof processingFunc != 'function') {
            throw new Error('Processing function must be of type function');
        }
    }

    function queueProcessor(queueName) {
        if (_queues[queueName] && _queues[queueName].items.length > 0) {
            _queues[queueName].processingFun(_queues[queueName].items.pop());
        }
    }

    function startQueue(queueName) {
        _queues[queueName].interval = setInterval(function() {
            queueProcessor(queueName);
        }, _queues[queueName].delay ? _queues[queueName].delay : _TIMEOUT);
    }

    return {
        createQueue: createQueue,
        pushItem: pushItem,
        destroyQueue: destroyQueue
    };
})();
