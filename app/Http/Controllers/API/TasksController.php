<?php

namespace App\Http\Controllers\API;

use App\repositories\TaskRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
class TasksController extends Controller
{
    public $taskRepository;

    public function __construct(TaskRepository $taskRepository){
        $this->taskRepository = $taskRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = $this->taskRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Task List',
            'data'      =>  $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formData = $request->all();

        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100',
        ],
        [
            'name.required' => 'Task name is required',
            'name.max' => 'Name must be between 1000 characters',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ]);
        }
        

        $task = $this->taskRepository->create($request);

        return response()->json([
            'success'   =>  true,
            'message'   =>  'Task Stored',
            'data'      =>  $task
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = $this->taskRepository->findById($id);
        if (is_null($task)) {
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Task found',
            'data'    => $task
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = $this->taskRepository->findById($id);
        if (is_null($task)) {
            return response()->json([
                'success' => false,
                'message' => 'Task Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100'
        ],
        [
            'name.required' => 'Task name is required',
            'name.max' => 'Name must be between 1000 characters',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $task = $this->taskRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Task Updated',
            'data'    => $task
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = $this->taskRepository->findById($id);
        if (is_null($task)) {
            return response()->json([
                'success' => false,
                'message' => 'Task Not found',
                'data' => null,
            ]);
        }
        $task = $this->taskRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Task Deleted',
            'data'    => $task
        ]);
    }
}
