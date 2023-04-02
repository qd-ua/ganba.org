<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class BlackListUser extends Model
{
    public function files()
    {
        return $this->hasMany(File::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function isAvatar()
    {
        return $this->avatar !== null && Storage::disk('public')->exists($this->avatar);
    }
}
