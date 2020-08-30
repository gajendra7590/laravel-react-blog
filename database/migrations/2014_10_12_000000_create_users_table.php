<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integerIncrements('id')->unsigned(false)->length(11);
            $table->string('first_name',50)->nullable();
            $table->string('last_name',50)->nullable();
            $table->string('display_name',50)->nullable();
            $table->string('email',100)->unique(); 
            $table->string('password');
            $table->string('phone',15)->nullable();
            $table->string('photo',100)->nullable();
            $table->string('address_line',100)->nullable(); 
            $table->string('city',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('country',50)->nullable();
            $table->string('zip',10)->nullable();
            $table->timestamp('last_login')->nullable(); 
            $table->longText('about_me')->nullable();
            $table->enum('status',array('0','1','2'))->default(1);
            $table->rememberToken();
            $table->string('reset_token',100)->nullable();
            $table->string('reset_token_at',100)->nullable(); 
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
