<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\TeachrUser;
use App\Entity\Stats;

use App\Repository\TeachrUserRepository;
use App\Repository\StatsRepository;

use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class TeachrController extends ApiController
{
    protected $val_compteur = 1;
    /**
     * @Route("/show-users", methods="GET")
     */
     public function show(TeachrUserRepository $teachrUserRepository)
     {
         $teachrUsers = $teachrUserRepository->transformAllUsers();

         return $this->respond($teachrUsers);
     }

     /**
      * @Route("/create-user", methods="POST")
      */
     public function create(Request $request, TeachrUserRepository $teachrUserRepository, EntityManagerInterface $em){
         $request = $this->transformJsonBody($request);
        
         // Créer le nouveau utilisateur
         $user = new TeachrUser;
         $user->setPrenom($request->get('prenom'));
         $user->setDate($request->date = new \DateTime("now"));
         
         $em->persist($user);
         $em->flush();

         // Ajouter une nouvelle valeur au compteur
         $compteur = new Stats;
         $compteur->setCompteur($this->val_compteur);
         // Préparer l'enregistrement de l'objet
         $em->persist($compteur);
         // Exécuter l'enregistrement
         $em->flush();

         return $this->respondCreated($teachrUserRepository->transformUser($user));
     }

    /**
    * @Route("/update-user/{userId}", methods="PUT")
    */
     public function update(Request $request, $userId, TeachrUserRepository $teachrUserRepository, EntityManagerInterface $em)
     {
        $user = $teachrUserRepository->find($userId);
        $request = $this->transformJsonBody($request);

        $user->setPrenom($request->get('prenom'));
        $em->flush();

        return $this->respondCreated($teachrUserRepository->transformUser($user));
     }
}