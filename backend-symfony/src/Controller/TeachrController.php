<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Stats;
use App\Entity\TeachrUser;

use App\Repository\TeachrUserRepository;

use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class TeachrController
{   
    // Value to add in new column each time a new object is created
    protected $val_compteur = 1;
    // HTTP status code - 2OO (OK) by default
    protected $statusCode = 200;
    // Getter and setter for statusCode variable
    public function getStatusCode() { return $this->statusCode; }
    public function setStatusCode($statusCode) { $this->statusCode = $statusCode; }

    // This method returns a new JsonResponse object, parameters : data variable and empty header list
     public function respond($data, $headers = []) { return new JsonResponse($data, $this->getStatusCode(), $headers); }
     // This method transforms the request parameters into a string
     protected function transformJsonBody(Request $request)
     {
         // Get the json format content from the request parameter and decode
         // Then store into a variable
         $data = json_decode($request->getContent(), true);

         // If there is an error in decoding, then return an empty variable
         if (json_last_error() !== JSON_ERROR_NONE){
             return null;
         }
         // If there is no content in data variable, then return an empty variable
         if ($data === null){
             return $request;
         }
         // Else replace the request parameter with the new decoded variable (json -> string)
         $request->request->replace($data);
         // Return the new request variable
         return $request;
     }

    /**
     * @Route("/show-users", methods="GET")
     */
     public function show(TeachrUserRepository $teachrUserRepository)
     {
        // Read User table in database and store all into a variable using transformAllUsers()
         $teachrUsers = $teachrUserRepository->transformAllUsers();
        // Return the variable in JSON format, which could be displayed on a web browser
         return $this->respond($teachrUsers);
     }

     /**
      * @Route("/create-user", methods="POST")
      */
     public function create(Request $request, TeachrUserRepository $teachrUserRepository, EntityManagerInterface $em){
         // Transform this request to a string 
         $request = $this->transformJsonBody($request);
         // Create new User object
         $user = new TeachrUser;
         // Get the value from 'prenom' in request and set that value to the 'prenom' attribute 
         $user->setPrenom($request->get('prenom'));
         // Set new date to 'date' attribute (date = when object is created)
         $user->setDate($request->date = new \DateTime("now"));
         // Save new User object in database
         $em->persist($user);
         // Delete object by flushing out the created instance
         $em->flush();

         // Create new Stats object which will contain an integer value of 1 when a User object is created
         $compteur = new Stats;
         // Set the 'compteur' attribute with val_compteur
         $compteur->setCompteur($this->val_compteur);
         // Save new Stats object in database
         $em->persist($compteur);
         // Delete object by flushing out the created instance
         $em->flush();
        
         return $this->respond($teachrUserRepository->transformUser($user));
     }

    /**
    * @Route("/update-user/{userId}", methods="PUT")
    */
     public function update(Request $request, $userId, TeachrUserRepository $teachrUserRepository, EntityManagerInterface $em)
     {
         // Read User table in database and find User with the given ID parameter
        $user = $teachrUserRepository->find($userId);
        // Transform this request to a string
        $request = $this->transformJsonBody($request);
        // Get the value from 'prenom' in request and update the new value to the 'prenom' attribute 
        $user->setPrenom($request->get('prenom'));
        // Delete object by flushing out the created instance
        $em->flush();

        return $this->respond($teachrUserRepository->transformUser($user));
     }
}