<?php 
namespace VanguardDK\Http\Controllers\Api;

use VanguardDK\Repositories\Country\CountryRepository;
use VanguardDK\Transformers\CountryTransformer;

class CountriesController extends ApiController
{
    private $countries = null;
    public function __construct(CountryRepository $countries)
    {
        $this->middleware("auth");
        $this->countries = $countries;
    }
    public function index()
    {
        return $this->respondWithCollection($this->countries->all(), new CountryTransformer());
    }
}
