<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskRepository implements CrudInterface{
	public function getAll(){
		$tasks = Task::all();
		return $tasks;
	}
	public function findById($id){
		// $task = Task::with('sub_tasks')->find($id);
		$task = Task::find($id);
		return $task;
	}
	public function create(Request $request){
		$task = new Task;
		$task->name = $request->name;
		$task->save();

		return $task;
	}
	public function edit(Request $request, $id){
		$task = Task::find($id);
		$task->name = $request->name;
		$task->save();

		return $task;
	}
	public function delete($id){
		$task = Task::find($id);
		$task->delete();
		return $task;

	}
}