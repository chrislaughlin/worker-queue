Worker Queue
============

JavaScript queue processor, to produce a "multi threaded" defered processor. Create a queue and give it a function that will carry out thr processing. Push items into the queue and the queue will process them using setInterval.

## How to Use

``` JavaScript
WorkerQueue.createQueue('PrintPeople', function(person) {
	console.log(person.name);
	console.log(person.location);
});

WorkerQueue.pushItem('PrintPeople', {name: 'Peter', location: 'london'});
WorkerQueue.pushItem('PrintPeople', {name: 'Paul', location: 'Belfast'});
WorkerQueue.pushItem('PrintPeople', {name: 'John', location: 'Dublin'});

var people = [{name: 'Sam', location: 'NYC'}, {name: 'Max', location: 'France'}];
WorkerQueue.pushItem('PrintPeople', people);
```
### Outputs

``` bash
Max
France
Sam
NYC
John
Dublin
Paul
Belfast
Peter
london
```

## Install

### Bower

``` bash
bower install worker-queue
```


