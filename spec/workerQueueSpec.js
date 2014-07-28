describe("Worker Queue Spec", function() {

    it('should allow creating of a queue for processing tasks', function() {
        expect(window.WorkerQueue).toBeDefined();
        expect(WorkerQueue.createQueue).toBeDefined();
        expect( function(){ WorkerQueue.createQueue(); } ).toThrow(new Error("Queue name and function are required"));
        expect( function(){ WorkerQueue.createQueue('queue name'); } ).toThrow(new Error("Queue name and function are required"));
        expect( function(){ WorkerQueue.createQueue(1, function(){}); } ).toThrow(new Error("Queue name must be a string"));
        expect( function(){ WorkerQueue.createQueue('queue name', 'function'); } ).toThrow(new Error("Processing function must be of type function"));
    });

});
