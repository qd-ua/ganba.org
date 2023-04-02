<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('black_list_users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->nullable();
            $table->string('full_address')->nullable();
            $table->string('nomination')->nullable();
            $table->string('description')->nullable();
            $table->dateTime('dob')->nullable();
            $table->string('avatar')->nullable();
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
        Schema::dropIfExists('black_list_users');
    }
};
