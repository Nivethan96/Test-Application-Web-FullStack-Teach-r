<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiController
{
    /**
     * @var integer HTTP status code - 2OO (OK) by default
     */
    protected $statusCode = 200;

    /**
     * Obtenir la valeur du statusCode
     * @return integer
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
    }

    /**
     * Retouner un reponse sous format JSON
     * 
     * @param array $data
     * @param array $headers
     * 
     * @return Symfony\Component\HttpFoundation\JsonResponse
     */

     public function respond($data, $headers = [])
     {
         return new JsonResponse($data, $this->getStatusCode(), $headers);
     }

     protected function transformJsonBody(Request $request)
     {
         $data = json_decode($request->getContent(), true);

         if (json_last_error() !== JSON_ERROR_NONE){
             return null;
         }

         if ($data === null){
             return $request;
         }

         $request->request->replace($data);

         return $request;
     }

     /**
      * Retourne le status 201
      * @param array $data
      * @return Symfony\Component\HttpFoundation\JsonResponse
      */
      public function respondCreated($data = [])
      {
          return $this->setStatusCode(201)->respond($data);
      }

}