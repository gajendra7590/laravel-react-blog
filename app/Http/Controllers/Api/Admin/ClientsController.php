<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Str;

//models
use App\User;

class ClientsController extends Controller
{
    
    /**
     * Get Clients List
     */
    public function getClients(Request $request) {   
        return User::whereHas('roles', function ($q) {
            $q->where('roles.name', '=', 'user');
        }) 
        ->orderBy('id','DESC') 
        ->get()
        ->all();  
    }
    
    

    /**
     * Edit Clients
     */
    public function editClients(Request $request,$id) {
        $user = User::whereHas('roles', function ($q) {
            $q->where('roles.name', '=', 'user');
        })->find($id);

        if(!$user){
            return [
                'status' => false,
                'message' => 'Invalid Client ID'
            ];
        } else {
            return $user;
        }
    }

    /**
     * Create Clients
     */
    public function createClients(Request $request) {
        $post = $request->all();
        $validator = Validator::make($post, array(
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:recipe_users',
            'phone' => 'nullable|numeric|digits:10',
            'zip' => 'nullable|numeric|digits:5',
            'password' => 'required',
            'status' => 'required',
            'image' => 'required|image|mimes:jpg,jpeg,png'
        ));
        if ($validator->fails()) {
            $errors = errorArrayCreate( $validator->errors() );
            return response()->json([
                'status'=>false,
                'message'=>'Incorrect form data',
                'errors'=> $errors
            ]);
        }else{
            $post['password'] = Hash::make($post['password']);
            if ($request->hasFile('image')) {
                $imageName = gen_uuid().'.'.$request->image->getClientOriginalExtension();
                $is_uploaded = $request->image->move(public_path('images'), $imageName);
                if( $is_uploaded){
                    $post['photo'] = $imageName;
                }
            }
            $model = new User();
            $save = $model->create($post);
            if($save){

                User::find($save->id)->assignRole('user');
                return response()->json([
                    'status' => true,
                    'message'=>'Data saved successfully'
                ]);
            } else{
                return response()->json([
                    'status' => false,
                    'message'=>'Opps! Server error in save data'
                ]);
            }
        }
    }

    /**
     * Update Clients
     * @param $id
     */
    public function updateClients(Request $request,$id){
        $model = User::whereHas('roles', function ($q) {
            $q->where('roles.name', '=', 'user');
        })->find($id);
        if(!$model){
            return response()->json([
                'status' => false,
                'message'=>'Invalid Client ID'
            ]);
        }

        $post = $request->all();
        $validator = Validator::make($post, array(
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => ['required','email','unique:recipe_users,email,'.$id],
            'phone' => 'nullable|numeric|digits:10',
            'zip' => 'nullable|numeric|digits:5',
            'status' => 'required',
            'image' => 'image|mimes:jpg,jpeg,png'
        ));
        if ($validator->fails()) {
            $errors = errorArrayCreate( $validator->errors() );
            return response()->json([
                'status'=>false,
                'message'=>'Incorrect form data',
                'errors'=> $errors
            ]);
        }else{

            if( isset($post['password'])  && ($post['password']!='')) {
                $post['password'] = Hash::make($post['password']);
            } else {
                unset($post['password']);
            }

            if ($request->hasFile('image')) {
                $imageName = gen_uuid().'.'.$request->image->getClientOriginalExtension();
                $is_uploaded = $request->image->move(public_path('images'), $imageName);
                if( $is_uploaded){
                    $post['photo'] = $imageName;
                }
            }
            $save = $model->update($post);
            if($save){
                return response()->json([
                    'status' => true,
                    'message'=>'Data updated successfully'
                ]);
            } else{
                return response()->json([
                    'status' => false,
                    'message'=>'Opps! Server error in save data'
                ]);
            }
        }

    }


    /**
     * Archieved Clients
     * @param $id
     */
    public function deleteClients(Request $request,$id){
        $model = User::whereHas('roles', function ($q) {
            $q->where('roles.name', '=', 'user');
        })->find($id);
        if(!$model){
            return response()->json([
                'status' => false,
                'message'=>'Invalid Client ID'
            ]);
        }

        $save = $model->update(['status' => '2']);
        if($save){
            return response()->json([
                'status' => true,
                'message'=>'Data updated successfully'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message'=>'Opps! Server error in save data'
            ]);
        }
    }


}
