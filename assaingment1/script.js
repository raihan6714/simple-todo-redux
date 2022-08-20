const incrementEl   = document.getElementById('increment');
const decrementUi   = document.getElementById('decrement');


function myFunction() {
    const counterEl = document.getElementById('counters');
    counterEl.innerHTML = `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow" id="counters">
    <div class="text-2xl font-semibold">0</div>
    <div class="flex space-x-3">
        <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment"
        >
            Increment
        </button>
        <button
            class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement"
        >
            Decrement
        </button>
    </div>
</div>`;
    
    
}
